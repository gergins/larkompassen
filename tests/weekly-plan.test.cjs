"use strict";
const fs=require("node:fs"),vm=require("node:vm"),assert=require("node:assert/strict"),test=require("node:test");
const ctx={window:{}};vm.runInNewContext(fs.readFileSync("weekly-plan.js","utf8"),ctx);
const p=ctx.window.LK_WEEKLY_PLAN;
test("suggestions never claim to be official weekly requirements",()=>{assert.equal(p.officialWeeklySchedule,false);assert.match(p.notes,/not a national week-by-week timetable/)});
test("weekly topics link to existing curriculum goals",()=>{const c={window:{}};vm.runInNewContext(fs.readFileSync("curriculum.js","utf8"),c);for(const [grade,topics] of Object.entries(p.grades)){assert.ok(topics.length);const ids=new Set(c.window.LK_CURRICULUM.grades[grade].map(x=>x.id));for(const t of topics){assert.ok(ids.has(t.goalId),t.goalId);assert.ok(t.subject&&t.topic)}}});
test("weekly UI distinguishes school plans and avoids dynamic HTML in storage values",()=>{const src=fs.readFileSync("veckokarta/timeline.js","utf8");assert.match(src,/esc\(school\)/);assert.match(src,/lk-school-week-v1:/);assert.match(src,/Skolans plan/);assert.match(src,/Lärkompassens förslag/);assert.match(src,/localStorage\.setItem/)});
