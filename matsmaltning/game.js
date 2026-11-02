"use strict";
const lesson=window.ESCAPE_ROOM_CONTENT;
const rooms=lesson?.rooms;
if(!Array.isArray(rooms)||!rooms.length)throw Error("Missing escape-room content");
let room=0,selected=null,tries=0,score=0,finished=false;
const game=document.getElementById("game"),progress=document.getElementById("progress");
progress.max=rooms.length;
function render(){progress.value=finished?rooms.length:room;if(finished){game.innerHTML='<h2>🏆 Alla dörrar öppnade!</h2><p>Du klarade '+score+' av '+rooms.length+' rum på första försöket.</p><p>'+lesson.summary+'</p><button id="restart" class="primary">Spela igen</button>';document.getElementById("restart").addEventListener("click",()=>{room=0;score=0;finished=false;reset();render()});return}
const r=rooms[room];game.innerHTML='<h2>'+r.title+'</h2><p>'+r.lesson+'</p><h3>'+r.question+'</h3><div id="options" class="options"></div><p id="feedback" role="status"></p><button id="hint">Visa ledtråd</button><button id="check" class="primary" disabled>Kontrollera svar</button><div id="next"></div>';
const options=document.getElementById("options");r.options.forEach((answer,i)=>{const b=document.createElement("button");b.textContent=answer;b.type="button";b.setAttribute("aria-pressed","false");b.addEventListener("click",()=>{selected=i;options.querySelectorAll("button").forEach((el,j)=>el.setAttribute("aria-pressed",String(j===i)));document.getElementById("check").disabled=false});options.append(b)});
document.getElementById("hint").addEventListener("click",()=>{document.getElementById("feedback").textContent="Ledtråd: "+r.hint});
document.getElementById("check").addEventListener("click",()=>{if(selected===null)return;tries++;const good=selected===r.correct;const feedback=document.getElementById("feedback");if(!good&&tries<2){feedback.textContent="Inte riktigt. Försök igen! "+r.hint;return}if(good&&tries===1)score++;feedback.textContent=(good?"Rätt! ":"Rätt svar: "+r.options[r.correct]+". ")+r.explain;options.querySelectorAll("button").forEach(b=>b.disabled=true);document.getElementById("check").disabled=true;document.getElementById("hint").disabled=true;const next=document.createElement("button");next.className="primary";next.textContent=room===rooms.length-1?"Visa resultat":"Öppna nästa rum →";next.addEventListener("click",()=>{room++;if(room>=rooms.length)finished=true;reset();render()});document.getElementById("next").append(next);next.focus()});
}
function reset(){selected=null;tries=0}
render();
