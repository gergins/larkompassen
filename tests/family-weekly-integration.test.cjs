"use strict";
const fs=require("node:fs"),assert=require("node:assert/strict"),test=require("node:test");
test("family page loads profile script and weekly planner",()=>{const h=fs.readFileSync("index.html","utf8");assert.match(h,/src="\.\/family\.js"/);assert.match(h,/href="\.\/veckokarta\//)});
test("profile link and weekly storage share child identity",()=>{const f=fs.readFileSync("family.js","utf8"),w=fs.readFileSync("veckokarta/timeline.js","utf8");assert.match(f,/veckokarta\/\?child=/);assert.match(f,/encodeURIComponent\(p\.id\)/);assert.match(w,/params\.get\("child"\)/);assert.match(w,/lk-family-profiles-v1/);assert.match(w,/lk-school-week-child-v1:/)});
test("grade-only mode remains available",()=>{const w=fs.readFileSync("veckokarta/timeline.js","utf8");assert.match(w,/lk-school-week-v1:/);assert.match(w,/childProfile\?/)});
