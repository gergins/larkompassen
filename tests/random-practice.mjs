import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const src=fs.readFileSync("app.js","utf8");
new vm.Script(src);
assert.match(src,/function buildMathTasks\(\)/);
assert.match(src,/function shuffled\(items\)/);
assert.match(src,/currentTasks=key==="matematik"\?buildMathTasks\(\):shuffled\(source\)/);
assert.match(src,/getElementById\("again"\)\.onclick=\(\)=>start\(key\)/);
assert.match(src,/score\+' av '\+currentTasks\.length/);
for(const g of [1,5]) assert.match(fs.readFileSync("ak"+g+"/index.html","utf8"),/app\.js\?v=1\.19\.0/);
console.log("PASS randomized exercise wiring and correct score count");

assert.match(src,/id="mathLevel"/,"Difficulty selector missing");
assert.match(src,/Tal 0–100/,"Grade 1 level 100 missing");
assert.match(src,/const reviewedExtra=/,"Reviewed additional subject questions missing");
assert.match(src,/prepareTasks\(\);question\(\)/,"Question generation must follow level selection");
console.log("PASS grade-specific math level control and expanded subject banks");
