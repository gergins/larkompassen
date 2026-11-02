"use strict";
const {readFileSync}=require("node:fs"),vm=require("node:vm"),assert=require("node:assert/strict"),test=require("node:test");
const source=readFileSync("family.js","utf8");
class Element{
 constructor(id=""){this.id=id;this.value="";this.textContent="";this.children=[];this.handlers={};this.attributes={};this.className="";this.href="";}
 append(...nodes){this.children.push(...nodes)}
 replaceChildren(...nodes){this.children=nodes}
 addEventListener(type,fn){this.handlers[type]=fn}
 setAttribute(k,v){this.attributes[k]=v}
 focus(){}
 reset(){}
}
function setup(initial="[]",storageError=false){
 const ids=Object.fromEntries(["profiles","add-child","family-notice","child-name","child-grade","editing-id","save-child"].map(id=>[id,new Element(id)]));
 ids["child-grade"].value="1";let raw=initial;const localStorage={getItem:()=>{if(storageError)throw Error("blocked");return raw},setItem:(_,v)=>{if(storageError)throw Error("blocked");raw=v}};
 const document={getElementById:id=>ids[id],createElement:()=>new Element()};
 const ctx={document,localStorage,Date,Math,confirm:()=>true};ctx.window=ctx;vm.runInNewContext(source,ctx,{filename:"family.js"});
 const submit=(name,grade="1",id="")=>{ids["child-name"].value=name;ids["child-grade"].value=grade;ids["editing-id"].value=id;ids["add-child"].handlers.submit({preventDefault(){}})};
 return {ids,submit,stored:()=>JSON.parse(raw)};
}
test("creates separate profiles even in same grade",()=>{const a=setup();a.submit("Barn A");a.submit("Barn B");assert.equal(a.stored().length,2);assert.notEqual(a.stored()[0].id,a.stored()[1].id);assert.equal(a.ids.profiles.children.length,2)});
test("edits grade and removes a child",()=>{const a=setup();a.submit("Barn A");const p=a.stored()[0];a.submit("Barn A ny","5",p.id);assert.equal(a.stored()[0].grade,"5");const remove=a.ids.profiles.children[0].children[1].children[3];remove.handlers.click();assert.equal(a.stored().length,0)});
test("limits profile count",()=>{const a=setup();for(let i=0;i<13;i++)a.submit("Barn "+i);assert.equal(a.stored().length,12)});
test("ignores malformed saved data",()=>{const a=setup("not-json");assert.equal(a.ids.profiles.children.length,1)});
test("shows storage failures instead of claiming success",()=>{const a=setup("[]",true);a.submit("Barn");assert.match(a.ids["family-notice"].textContent,/inte att spara/)});
test("renders names as text and does not interpolate markup",()=>{const a=setup();a.submit("<img src=x onerror=alert(1)>");assert.match(a.ids.profiles.children[0].children[0].textContent,/<img/);assert.equal(a.ids.profiles.children[0].children.length,2)});
test("routes grade 5 to its existing portal",()=>{const a=setup();a.submit("Barn","5");assert.equal(a.ids.profiles.children[0].children[1].children[0].href,"./ak5/")});

test("profile weekly links retain distinct child identifiers",()=>{const a=setup();a.submit("Barn A");a.submit("Barn B");const links=a.ids.profiles.children.map(x=>x.children[1].children[1].href);assert.notEqual(links[0],links[1]);assert.ok(links.every(x=>x.startsWith("./veckokarta/?child=")))});
