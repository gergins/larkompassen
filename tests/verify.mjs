import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const read=p=>fs.readFileSync(p,"utf8");
const files=["app.js","curriculum.js","laromraden/goals.js","lektion/lesson.js","foralder/parent.js","veckokarta/timeline.js"];
for(const f of files){new vm.Script(read(f),{filename:f});}
const curriculum=read("curriculum.js"),goal=read("laromraden/goals.js"),lesson=read("lektion/lesson.js");
assert.match(goal,/href=\\"\.\.\/lektion\/\?ak=/);
assert.match(goal,/goal='\+encodeURIComponent\(x\.id\)/);
assert.match(goal,/Övning kommer senare/);
for(const [grade,id] of [[1,"math-number"],[1,"swedish-reading"],[1,"geo-near"],[5,"math-decimals"],[5,"math-fractions"],[5,"swedish-text"],[5,"geo-sweden"]]){
 assert.ok(curriculum.includes('id:"'+id+'"'),"Missing curriculum goal "+id);
 assert.ok(lesson.includes('"'+id+'":'),"Missing lesson mapping "+id);
}
assert.match(read("laromraden/index.html"),/src="\.\/goals\.js\?v=/);
assert.match(read("lektion/index.html"),/src="\.\/lesson\.js\?v=/);
console.log("PASS: JS syntax, goal-to-lesson mapping, and cache-versioned scripts");
