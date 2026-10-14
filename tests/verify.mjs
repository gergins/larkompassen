import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const read=p=>fs.readFileSync(p,"utf8");
for(const p of ["app.js","curriculum.js","laromraden/goals.js","lektion/lesson.js","foralder/parent.js","veckokarta/timeline.js"]) new vm.Script(read(p),{filename:p});
const curriculum=read("curriculum.js"),goals=read("laromraden/goals.js"),lesson=read("lektion/lesson.js");
assert.ok(goals.includes('href="../lektion/?ak='),"Specific exercise link missing");
assert.ok(goals.includes("encodeURIComponent(x.id)"),"Goal route parameter missing");
assert.ok(goals.includes("Övning kommer senare"),"Unavailable lesson fallback missing");
for(const id of ["math-number","swedish-reading","geo-near","math-decimals","math-fractions","swedish-text","geo-sweden"]){
 assert.ok(curriculum.includes('id:"'+id+'"'),"Curriculum goal absent: "+id);
 assert.ok(lesson.includes('"'+id+'":'),"Lesson target absent: "+id);
}
assert.ok(read("laromraden/index.html").includes('goals.js?v='),"Learning-map cache version absent");
assert.ok(read("lektion/index.html").includes('lesson.js?v='),"Lesson cache version absent");
console.log("PASS static navigation and JavaScript checks");
