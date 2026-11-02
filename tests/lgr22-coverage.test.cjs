"use strict";
const fs=require("node:fs"),vm=require("node:vm"),assert=require("node:assert/strict"),test=require("node:test");
const ctx={window:{}};vm.runInNewContext(fs.readFileSync("lgr22-coverage.js","utf8"),ctx);
const d=ctx.window.LK_LGR22_COVERAGE;
test("32 subject-band records, no duplicate identifiers",()=>{assert.equal(d.items.length,32);assert.equal(new Set(d.items.map(x=>x.id)).size,32);assert.equal(new Set(d.items.map(x=>x.subject)).size,16)});
test("unknown coverage is never shown as complete",()=>{for(const x of d.items){assert.equal(x.coverageStatus,"not-inventoried");assert.equal(x.reviewStatus,"pending");assert.ok(["1–3","4–6"].includes(x.gradeBand));assert.equal(new URL(x.source).hostname,"www.skolverket.se");assert.ok(x.source.includes(x.subjectCode))}});
test("the registry declares its limited scope",()=>{assert.equal(d.scope,"core-subject-grade-band-index-only");assert.ok(d.notes.includes("not a complete"))});
