(()=>{
"use strict";
const now=new Date(),start=new Date(now.getFullYear(),now.getMonth(),1),monthTitle=document.getElementById("month"),grade=document.getElementById("grade"),weeks=document.getElementById("weeks");
let offset=0;
const topics={1:[["Matematik","Plus och minus"],["Svenska","Bokstäver och korta ord"],["Engelska","Enkla engelska ord"],["Biologi","Djur och växter"],["Geografi","Min närmiljö"],["Matematik","Tal och mönster"],["Svenska","Läsa och förstå"]],5:[["Matematik","Decimaltal och bråk"],["Svenska","Läsförståelse"],["Geografi","Sveriges geografi"],["Engelska","Ord och meningar"],["Biologi","Ekosystem"],["Matematik","Problemlösning"],["Historia","Historiska källor"]]};
const datefmt=new Intl.DateTimeFormat("sv-SE",{day:"numeric",month:"short"});
const monthfmt=new Intl.DateTimeFormat("sv-SE",{month:"long",year:"numeric"});
function isoWeek(date){const d=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()));d.setUTCDate(d.getUTCDate()+4-(d.getUTCDay()||7));const year=d.getUTCFullYear();return {year,week:Math.ceil(((d-new Date(Date.UTC(year,0,1)))/86400000+1)/7)}}
function mon(date){const d=new Date(date);d.setDate(d.getDate()-((d.getDay()+6)%7));d.setHours(12,0,0,0);return d}
function mondayKey(d){const m=mon(d);return m.getFullYear()+"-"+(m.getMonth()+1)+"-"+m.getDate()}
function render(){const d=new Date(start.getFullYear(),start.getMonth()+offset,1);monthTitle.textContent=monthfmt.format(d);const end=new Date(d.getFullYear(),d.getMonth()+1,0),sel=Number(grade.value);document.getElementById("child").href="../ak"+sel+"/";const p=mon(d);const items=[];for(let t=new Date(p);t<=end;t.setDate(t.getDate()+7)){let e=new Date(t);e.setDate(e.getDate()+6);const {year,week}=isoWeek(t);const current=mondayKey(t)===mondayKey(now);const past=e<now&&!current;const label=current?"Den här veckan":past?"Repetera":"Tjuvkika";const pair=topics[sel][((week-1)%topics[sel].length+topics[sel].length)%topics[sel].length];items.push('<section class="week'+(current?' today':'')+'"><span class="tag">'+label+'</span><h3>Vecka '+week+' · '+datefmt.format(t)+'–'+datefmt.format(e)+'</h3><p><strong>'+pair[0]+'</strong>: '+pair[1]+'</p><a class="link" href="../ak'+sel+'/">Öppna ämnesövningarna →</a></section>')}weeks.innerHTML=items.join("")}
document.getElementById("prev").onclick=()=>{offset--;render()};
document.getElementById("next").onclick=()=>{offset++;render()};
document.getElementById("now").onclick=()=>{offset=0;render()};
grade.onchange=render;
const q=new URLSearchParams(location.search).get("ak");if(q==="5")grade.value="5";
render();
})();