"use strict";
const {test}=require("@playwright/test");
const {expect}=require("@playwright/test");
const http=require("node:http"),fs=require("node:fs"),path=require("node:path");
const root=process.cwd();let server,base;
test.beforeAll(async()=>{server=http.createServer((req,res)=>{const pathname=decodeURIComponent(new URL(req.url,"http://localhost").pathname);const relative=pathname.endsWith("/")?pathname+"index.html":pathname;const full=path.resolve(root,"."+relative);if(!full.startsWith(root+path.sep)){res.writeHead(403).end();return}fs.readFile(full,(err,data)=>{if(err){res.writeHead(404).end();return}res.setHeader("Content-Type",full.endsWith(".js")?"text/javascript":full.endsWith(".css")?"text/css":"text/html");res.end(data)})});await new Promise(resolve=>server.listen(0,"127.0.0.1",resolve));base="http://127.0.0.1:"+server.address().port});
test.afterAll(async()=>{if(server)await new Promise(resolve=>server.close(resolve))});
test("two grade-one children keep separate weekly notes and lesson sessions",async({page})=>{
 await page.goto(base+"/");await page.locator("#child-name").fill("Barn A");await page.locator("#save-child").click();await page.locator("#child-name").fill("Barn B");await page.locator("#save-child").click();
 const profiles=await page.evaluate(()=>JSON.parse(localStorage.getItem("lk-family-profiles-v1")));expect(profiles).toHaveLength(2);
 const [a,b]=profiles;
 await page.goto(base+"/veckokarta/?child="+encodeURIComponent(a.id));await expect(page.locator("h1")).toContainText("Barn A");
 const note=page.locator(".school-week").first();await note.fill("Plan för A");await note.dispatchEvent("change");
 await page.goto(base+"/veckokarta/?child="+encodeURIComponent(b.id));await expect(page.locator(".school-week").first()).toHaveValue("");await page.locator(".school-week").first().fill("Plan för B");await page.locator(".school-week").first().dispatchEvent("change");
 await page.goto(base+"/veckokarta/?child="+encodeURIComponent(a.id));await expect(page.locator(".school-week").first()).toHaveValue("Plan för A");
 await page.locator('a[href*="../lektion/"]').first().click();await expect(page).toHaveURL(new RegExp("child="+encodeURIComponent(a.id)));
 const keys=await page.evaluate(()=>Object.keys(localStorage).filter(k=>k.startsWith("lk-school-week-child-v1:")));expect(keys.some(k=>k.includes(encodeURIComponent(a.id)))).toBeTruthy();expect(keys.some(k=>k.includes(encodeURIComponent(b.id)))).toBeTruthy();
 await page.goto(base+"/lektion/?ak=1&child="+encodeURIComponent(a.id));await expect(page.locator("#lesson")).not.toBeEmpty();
 await page.goto(base+"/ak1/?child="+encodeURIComponent(b.id));await expect(page.locator("main#app")).not.toBeEmpty();
});


test("completed lessons are saved only for the selected child",async({page})=>{
 await page.goto(base+"/");await page.evaluate(()=>localStorage.setItem("lk-family-profiles-v1",JSON.stringify([{id:"child-a",name:"Barn A",grade:"1"},{id:"child-b",name:"Barn B",grade:"1"}])));
 async function complete(id,answer){
  await page.goto(base+"/lektion/?ak=1&goal=swedish-reading&child="+id+"&antal=2");
  await page.locator("#start").click();
  for(let i=0;i<2;i++){await page.locator("#answer").fill(answer);await page.locator("#check").click();if(await page.locator("#next").isHidden()){await page.locator("#check").click()}await page.locator("#next").click()}
  await expect(page.getByText("Resultatet har sparats på den här enheten.")).toBeVisible();
 }
 await complete("child-a","mat");
 let a=await page.evaluate(()=>JSON.parse(localStorage.getItem("lk-child-sessions-v1:child-a")||"[]"));expect(a).toHaveLength(1);
 expect(await page.evaluate(()=>localStorage.getItem("lk-child-sessions-v1:child-b"))).toBeNull();
 await complete("child-b","mat");
 const result=await page.evaluate(()=>({a:JSON.parse(localStorage.getItem("lk-child-sessions-v1:child-a")||"[]"),b:JSON.parse(localStorage.getItem("lk-child-sessions-v1:child-b")||"[]"),shared:localStorage.getItem("larkompassen-v1-sessions")}));
 expect(result.a).toHaveLength(1);expect(result.b).toHaveLength(1);expect(result.shared).toBeNull();
});
