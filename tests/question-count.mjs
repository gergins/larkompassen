import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const read=p=>fs.readFileSync(p,"utf8");
const src=read("lektion/lesson.js");
const begin=src.indexOf("function arithmeticTasks(n){");
const end=src.indexOf("const mathGenerator=",begin);
assert.ok(begin>=0&&end>begin,"Cannot find arithmetic generator");
const definition=src.slice(begin,end);
for(const grade of [1,5])for(const index of (grade===1?[0,2]:[0,3]))for(const count of [2,5,10,20,30]){
 const context={grade,lessonIndex:index};
 vm.createContext(context);
 vm.runInContext(definition+"\nthis.generate=arithmeticTasks",context);
 const tasks=context.generate(count);
 assert.equal(tasks.length,count,`Wrong count for grade ${grade} lesson ${index}`);
 assert.equal(new Set(tasks.map(t=>t[0])).size,count,`Duplicate questions grade ${grade} lesson ${index}`);
 for(const [expression,expected,hint] of tasks){
  assert.ok(hint.length>10,"Missing pedagogical hint");
  if(grade===1){
   const m=expression.match(/^(\d+) \+ (\d+)$/);
   assert.ok(m,`Malformed addition ${expression}`);
   assert.equal(Number(expected),Number(m[1])+Number(m[2]));
   assert.ok(Number(expected)<=20&&Number(expected)>=0,"Grade 1 answer outside 0–20");
  }else if(index===0){
   const m=expression.match(/^([\d,]+) ([+−]) ([\d,]+)$/);
   assert.ok(m,`Malformed decimal expression ${expression}`);
   const n=s=>Math.round(Number(s.replace(",", "."))*100);
   const result=m[2]==="+"?n(m[1])+n(m[3]):n(m[1])-n(m[3]);
   assert.equal(n(expected),result,`Incorrect decimal answer: ${expression}`);
  }else{
   const m=expression.match(/^(\d+)\/(\d+) \+ (\d+)\/(\d+)$/);
   const a=expected.match(/^(\d+)\/(\d+)$/);
   assert.ok(m&&a,`Malformed fraction expression ${expression}`);
   const [x,d,y,e]=m.slice(1).map(Number);
   assert.equal(d,e);
   assert.ok(x>0&&x<d&&y>0&&y<d,"Expected proper fractions");
   assert.equal((x+y)*Number(a[2]),Number(a[1])*d,`Incorrect fraction answer ${expression}`);
  }
 }
 console.log(`PASS grade=${grade} lesson=${index} questions=${count}`);
}
assert.ok(src.includes('questions:tasks.length'),"Completion event does not reflect generated count");
console.log("PASS generated question counts, uniqueness and answer correctness");
