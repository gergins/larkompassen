(()=>{
"use strict";
const grade=Number(document.body.dataset.grade);
const subjects=[["matematik","🔢"],["svenska","📖"],["engelska","🇬🇧"],["geografi","🌍"],["historia","🏛️"],["samhällskunskap","🏘️"],["religionskunskap","🕊️"],["biologi","🌱"],["fysik","🔭"],["kemi","🧪"],["teknik","⚙️"],["bild","🎨"],["musik","🎵"],["idrott och hälsa","⚽"],["slöjd","🧵"]];
const bank={
1:{
matematik:{title:"Plus och minus",intro:"När du adderar lägger du ihop antal. När du subtraherar tar du bort.",example:"Exempel: 6 + 3. Börja på 6 och räkna tre steg: 7, 8, 9. Då är svaret 9.",tasks:[["7 + 4","11","Börja på 7 och ta fyra steg framåt.","7 + 3 = 10, sedan 1 till: 11."],["13 − 5","8","Räkna fem steg bakåt från 13.","13 − 3 = 10 och 10 − 2 = 8."],["9 + 8","17","Gör först en tia.","9 + 1 = 10. Sju är kvar. 10 + 7 = 17."]]},
svenska:{title:"Bokstäver och ord",intro:"Ord byggs av bokstäver. Vi läser från vänster till höger.",example:"Exempel: K + A + T = KAT. Säg varje ljud och sätt ihop dem.",tasks:[["Vilket ord bildar S + O + L?","sol","Ljuden blir s-o-l.","S + O + L bildar SOL."],["Vilken bokstav börjar ordet BOLL med?","b","Lyssna på första ljudet i boll.","Boll börjar med B."]]},
engelska:{title:"Enkla engelska ord",intro:"Vi kan lära oss ord genom att koppla dem till saker vi känner igen.",example:"Cat betyder katt. Dog betyder hund.",tasks:[["Vad betyder CAT på svenska?","katt","Det är ett litet husdjur.","Cat betyder katt."],["Hur säger man hund på engelska?","dog","Det börjar med D.","Hund heter dog."]]},
geografi:{title:"Din närmiljö",intro:"En karta visar platser uppifrån. Vi använder riktningar för att hitta.",example:"På många kartor ligger norr uppåt och söder nedåt.",tasks:[["Vilket väderstreck brukar vara uppåt på en karta?","norr","Tänk på bokstaven N.","N betyder norr."]]},
historia:{title:"Då och nu",intro:"Historia handlar om det som hände förr. Vi jämför med idag.",example:"Förr skrev man brev oftare; idag kan många skicka meddelanden digitalt.",tasks:[["Vad kallar vi tiden som redan har varit?","förr","Tänk dåtid.","Förr betyder tid som redan passerat."]]},
samhällskunskap:{title:"Regler och samarbete",intro:"Regler hjälper oss att vara trygga och komma överens.",example:"Vi turas om att tala så alla blir hörda.",tasks:[["Vad kallas något som bestämmer vad man får göra, till exempel i skolan?","regel","Vi följer en sådan på rasten.","En regel visar vad man ska eller inte ska göra."]]},
religionskunskap:{title:"Högtider",intro:"Människor firar olika högtider och traditioner.",example:"Olika familjer kan fira på olika sätt; alla behöver inte fira samma högtid.",tasks:[["Vad kallas en dag som människor brukar fira?","högtid","Till exempel jul eller eid.","Det kallas en högtid."]]},
biologi:{title:"Levande saker",intro:"Växter och djur är levande organismer.",example:"En växt behöver bland annat vatten och ljus för att växa.",tasks:[["Vad behöver en växt dricka för att leva?","vatten","Det kommer ur kranen eller regnet.","Växter behöver vatten."]]},
fysik:{title:"Ljus och skugga",intro:"Ljuset kan stoppas av ett föremål. Då bildas en skugga.",example:"När du står i solskenet kan marken bakom dig bli mörkare.",tasks:[["Vad bildas när något stoppar ljuset?","skugga","Se på marken när solen lyser.","När ljus blockeras kan en skugga bildas."]]},
kemi:{title:"Material omkring oss",intro:"Saker kan bestå av exempelvis trä, glas, metall eller plast.",example:"En sked kan vara gjord av metall.",tasks:[["Vilket material används ofta i fönsterrutor?","glas","Det går att se igenom.","Fönsterrutor är ofta av glas."]]},
teknik:{title:"Enkla uppfinningar",intro:"Teknik hjälper människor att lösa praktiska problem.",example:"Ett hjul gör det lättare att flytta något tungt.",tasks:[["Vad hjälper en cykel att rulla?","hjul","Den har vanligen två.","Hjulen gör att cykeln rullar."]]},
bild:{title:"Färg och form",intro:"Vi kan beskriva bilder med färger och former.",example:"En cirkel är rund och en triangel har tre hörn.",tasks:[["Hur många hörn har en triangel?","3","Räkna hörnen i en trekant.","En triangel har tre hörn."]]},
musik:{title:"Rytm",intro:"Rytm är ett mönster av slag och pauser.",example:"Klappa långsamt två slag och sedan två snabbare.",tasks:[["Vad kallas ett mönster av slag i musik?","rytm","Du kan klappa den.","Det kallas rytm."]]},
"idrott och hälsa":{title:"Rörelse",intro:"Kroppen mår bra av rörelse och återhämtning.",example:"Vi kan springa, hoppa, dansa och vila.",tasks:[["Vad behöver kroppen efter mycket ansträngning?","vila","Tänk på återhämtning.","Vila hjälper kroppen att återhämta sig."]]},
slöjd:{title:"Skapa med material",intro:"I slöjd planerar vi, tillverkar och testar saker.",example:"Trä kan sågas och tyg kan sys.",tasks:[["Vilket material kan man sy med nål och tråd?","tyg","Det används i kläder.","Man kan sy i tyg."]]}
},
5:{
matematik:{title:"Decimaltal och bråk",intro:"En decimal beskriver delar av en hel. Siffran efter kommatecknet visar tiondelar och nästa visar hundradelar.",example:"3,5 är samma som 3,50. Alltså 3,50 + 1,25 = 4,75.",tasks:[["2,4 + 1,35","3,75","Skriv 2,4 som 2,40.","2,40 + 1,35 = 3,75."],["6,2 − 2,75","3,45","Skriv 6,2 som 6,20.","6,20 − 2,75 = 3,45."],["Vad är 25 % av 80?","20","25 % är en fjärdedel.","80 ÷ 4 = 20."]]},
svenska:{title:"Läsförståelse och ord",intro:"En text kan berätta både direkt och mellan raderna. Leta efter ledtrådar.",example:"'Sara tog fram paraplyet.' Vi kan gissa att hon tror det ska regna, men det står inte säkert.",tasks:[["Vad kallas det när man förstår något som inte står direkt i texten?","slutsats","Du använder textens ledtrådar.","Man drar en slutsats utifrån ledtrådar."],["Vilket ord är motsats till modig?","rädd","Tänk på någon som känner fruktan.","Rädd är en vanlig motsats till modig."]]},
engelska:{title:"Engelska meningar",intro:"En engelsk mening använder ofta subjekt före verb.",example:"She plays football betyder Hon spelar fotboll.",tasks:[["Översätt: I like books","jag gillar böcker","I = jag, like = gillar, books = böcker.","Meningen betyder 'Jag gillar böcker'."],["Vilket engelskt ord betyder eftersom?","because","Det börjar med be-.","Because betyder eftersom."]]},
geografi:{title:"Sveriges geografi",intro:"Sverige består av landskap och län. Landskap är historiska geografiska områden.",example:"Skåne är ett landskap längst i södra Sverige.",tasks:[["Vad heter landskapet längst i söder på det svenska fastlandet?","skåne","Malmö ligger där.","Skåne ligger längst i söder."],["Vilken är Sveriges största sjö?","vänern","Den ligger bland annat vid Värmland.","Vänern är Sveriges största sjö."]]},
historia:{title:"Historiska källor",intro:"En historisk källa kan vara ett brev, föremål eller en bild. Vi undersöker vem som skapat den och varför.",example:"Ett gammalt brev från någon som var med om en händelse kan ge förstahandsuppgifter.",tasks:[["Vad kallas material som hjälper oss att undersöka det förflutna?","källa","Historiska ...","Det är en historisk källa."]]},
samhällskunskap:{title:"Demokrati",intro:"Demokrati innebär att människor får möjlighet att påverka gemensamma beslut.",example:"Vid omröstning får flera personer uttrycka sin åsikt.",tasks:[["Vad heter det när människor röstar för att välja representanter?","val","Det sker vid riksdags...","Man håller ett val."]]},
religionskunskap:{title:"Religioner och livsfrågor",intro:"Religioner kan innehålla berättelser, traditioner och olika sätt att se på livet.",example:"Det är viktigt att kunna beskriva olika traditioner respektfullt.",tasks:[["Vad kallas en fråga om livets mening eller rätt och fel?","livsfråga","Det är en fråga om livet.","Det kallas en livsfråga."]]},
biologi:{title:"Ekosystem",intro:"Ett ekosystem består av levande organismer och deras miljö.",example:"I en skog samspelar växter, svampar, djur och mark.",tasks:[["Vad kallas en organism som tillverkar sin egen näring genom fotosyntes?","producent","Växter är ofta sådana.","Växter fungerar ofta som producenter."]]},
fysik:{title:"Kraft och rörelse",intro:"Krafter kan påverka ett föremåls rörelse, riktning eller form.",example:"Friktion mellan skor och mark hjälper oss att inte halka.",tasks:[["Vad kallas kraften som bromsar när två ytor gnids mot varandra?","friktion","Den kan göra att cykeln saktar ner.","Det kallas friktion."]]},
kemi:{title:"Blandningar och lösningar",intro:"Vissa ämnen löses i vatten och andra gör det inte.",example:"Salt kan lösas i vatten, medan sand oftast lägger sig på botten.",tasks:[["Vilket ämne löses lätt i vatten: salt eller sand?","salt","Tänk på havsvatten.","Salt löser sig i vatten."]]},
teknik:{title:"Tekniska system",intro:"Ett tekniskt system består av delar som samarbetar för att lösa ett behov.",example:"Vattenledningar, pumpar och rening samverkar för att ge dricksvatten.",tasks:[["Vad kallas flera tekniska delar som samarbetar?","system","Ett tekniskt ...","Det kallas ett system."]]},
bild:{title:"Perspektiv och bildspråk",intro:"Perspektiv hjälper oss visa djup i en bild.",example:"Föremål långt bort kan ritas mindre än föremål nära.",tasks:[["Vad kallas en metod för att visa djup i en bild?","perspektiv","Det påverkar hur avstånd ser ut.","Det kallas perspektiv."]]},
musik:{title:"Puls och tempo",intro:"Puls är regelbundna slag i musiken. Tempo anger hur snabbt slagen går.",example:"En snabb låt har ofta ett högre tempo än en långsam.",tasks:[["Vad kallas hur snabbt musiken går?","tempo","Snabbt eller långsamt ...","Det kallas tempo."]]},
"idrott och hälsa":{title:"Uppvärmning",intro:"Uppvärmning gör kroppen förberedd för en aktivitet.",example:"Före en löprunda kan du börja med rask gång.",tasks:[["Vad kallas rörelse som förbereder kroppen inför träning?","uppvärmning","Man gör det före träningen.","Det kallas uppvärmning."]]},
slöjd:{title:"Från idé till föremål",intro:"I slöjd undersöker man behov, gör skisser, väljer material och prövar lösningar.",example:"En ritning kan hjälpa dig bestämma mått innan du bygger.",tasks:[["Vad kallas en enkel teckning som visar en planerad idé?","skiss","Du ritar den före tillverkningen.","Det kallas en skiss."]]}
}
};

let currentTasks=[];
function randomInt(min,max){return min+Math.floor(Math.random()*(max-min+1))}
function shuffled(items){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=randomInt(0,i);[a[i],a[j]]=[a[j],a[i]]}return a}

const reviewedExtra={
  1:{
    svenska:[["Vilket ord bildar B + O + K?","bok","Ljuda en bokstav i taget.","B + O + K = bok."],["Vad rimmar på katt: hatt eller sol?","hatt","Orden slutar lika.","Katt och hatt rimmar."]],
    engelska:[["Vad betyder BOOK?","bok","Något man läser.","Book betyder bok."],["Hur säger man 'tack' på engelska?","thank you","Två ord.","Thank you betyder tack."]],
    biologi:[["Vilken årstid kommer efter hösten?","vinter","Den kallare årstiden.","Efter hösten kommer vintern."],["Vad behöver växter för att växa: ljus eller plast?","ljus","Tänk på solen.","Växter behöver bland annat ljus."]],
    geografi:[["Vilket väderstreck är motsatt norr?","söder","S på kompassen.","Söder ligger motsatt norr."]],
    historia:[["Vilken tid kommer först: idag eller förr?","förr","Förr är dåtid.","Förr var före idag."]]
  },
  5:{
    svenska:[["Vad kallas textens viktigaste tanke?","huvudbudskap","Huvud...","Det kan kallas huvudbudskap."],["Vilket ord betyder ungefär samma som 'modig': tapper eller rädd?","tapper","Tänk på någon som vågar.","Tapper betyder ungefär modig."]],
    engelska:[["Vad betyder 'I am tired'?","jag är trött","Tired = trött.","I am tired betyder jag är trött."],["Hur säger man 'Jag gillar musik' på engelska?","i like music","I like = jag gillar.","I like music betyder jag gillar musik."]],
    biologi:[["Vad kallas en växt som tillverkar sin egen näring?","producent","En del av näringskedjan.","Växter är producenter."],["Vad kallas samspelet mellan organismer och deras miljö?","ekosystem","Eko...","Det kallas ett ekosystem."]],
    geografi:[["Vilken stad är Sveriges huvudstad?","stockholm","Sveriges största stad.","Stockholm är huvudstaden."],["Vilken är Sveriges största sjö?","vänern","Den ligger i västra Sverige.","Vänern är störst."]],
    historia:[["Vad kallas ett föremål som kan berätta om livet förr?","historisk källa","Två ord.","Ett föremål kan vara en historisk källa."]]
  }
};
for(const g of [1,5])for(const [subject,tasks] of Object.entries(reviewedExtra[g]))if(bank[g][subject])bank[g][subject].tasks.push(...tasks);
let mathLevel=grade===1?"20":"decimal";
function buildMathTasks(){
 const out=[],seen=new Set(),target=6;
 while(out.length<target){
   let text,answer,hint,explanation;
   if(grade===1){
     const limit=Number(mathLevel),minus=Math.random()<0.4,a=randomInt(minus?2:1,minus?limit:limit-1),b=randomInt(1,minus?a:limit-a);
     text=a+(minus?" − ":" + ")+b;answer=String(minus?a-b:a+b);
     hint=minus?"Räkna bakåt från "+a+".":"Dela upp talet så att du kommer till en tia.";
     explanation=text+" = "+answer+". Räkna med fingrar, tiokompisar eller en tallinje.";
   }else{
     const percent=mathLevel==="percent"||mathLevel==="mix"&&Math.random()<0.3;
     if(percent){const whole=4*randomInt(5,40);text="Vad är 25 % av "+whole+"?";answer=String(whole/4);hint="25 % är en fjärdedel.";explanation=whole+" ÷ 4 = "+answer+"."}
     else {const a=randomInt(180,750),b=randomInt(25,160),minus=Math.random()<0.4;const fmt=n=>(n/100).toFixed(2).replace(".",",");text=fmt(a)+(minus?" − ":" + ")+fmt(b);answer=fmt(minus?a-b:a+b);hint="Sätt kommatecknen under varandra och räkna hundradelar.";explanation=text+" = "+answer+"."}
   }
   if(!seen.has(text)){seen.add(text);out.push([text,answer,hint,explanation])}
 }
 return shuffled(out);
}
function prepareTasks(){const source=bank[grade][key].tasks;currentTasks=key==="matematik"?buildMathTasks():shuffled(source)}
let key=null,index=0,attempts=0,answered=false,score=0,misses=[];
const root=document.getElementById("app");
const escape=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm=s=>String(s).trim().toLocaleLowerCase("sv-SE").replace(/[.!?]/g,"").replace(/\s+/g," ").replace(/\./g,",");
function week(){let now=new Date(),d=new Date(Date.UTC(now.getFullYear(),now.getMonth(),now.getDate()));d.setUTCDate(d.getUTCDate()+4-(d.getUTCDay()||7));return Math.ceil((((d-new Date(Date.UTC(d.getUTCFullYear(),0,1)))/86400000)+1)/7)}
const w=week(),suggest=subjects[((w-42)%subjects.length+subjects.length)%subjects.length][0];
function shell(body){root.innerHTML='<header><a class="link" href="../">🏠 Start</a><span class="pill">Årskurs '+grade+' · vecka '+w+'</span></header><h1>📚 Lärkompassen</h1>'+body+'<div class="footer">Lärandet bygger på relevanta områden ur Lgr22. Veckoförslagen är egna – inte skolans officiella veckoplan. Inga elevsvar skickas till en server.</div>'}
function home(){key=null;shell('<div class="card"><h2>Välkommen!</h2><p>Välj ett ämne. Börja med att förstå, prova sedan själv. Fråga om en ledtråd när du behöver.</p><p><span class="pill">Veckans förslag: '+escape(suggest)+'</span></p></div><div class="grid">'+subjects.map(([s,e])=>'<button class="subject" data-sub="'+escape(s)+'">'+e+'<br><strong>'+escape(s.charAt(0).toUpperCase()+s.slice(1))+'</strong></button>').join('')+'</div>');document.querySelectorAll('[data-sub]').forEach(b=>b.onclick=()=>start(b.dataset.sub))}
function start(s){key=s;index=0;score=0;misses=[];lesson()}
function lesson(){const x=bank[grade][key];shell('<nav><button id="back">← Alla ämnen</button></nav><section class="card"><span class="pill">'+escape(key)+'</span><h2>'+escape(x.title)+'</h2><h3>1. Förstå</h3><p>'+escape(x.intro)+'</p><h3>2. Visa mig</h3><p class="feedback">'+escape(x.example)+'</p><p>Nu provar du på egen hand. Du kan få en ledtråd innan du kontrollerar.</p><button class="primary" id="go">Börja öva →</button></section>');document.getElementById("back").onclick=home;if(key==="matematik"){const section=document.querySelector(".card");const chooser=document.createElement("p");chooser.innerHTML='<label for="mathLevel">Välj nivå (inte styrd av kalenderdatum)</label> <select id="mathLevel">'+(grade===1?'<option value="10">Tal 0–10</option><option value="20">Tal 0–20</option><option value="100">Tal 0–100</option>':'<option value="decimal">Decimaltal</option><option value="percent">Procent</option><option value="mix">Blandat</option>')+'</select>';section.insertBefore(chooser,document.getElementById("go"));document.getElementById("mathLevel").value=mathLevel;document.getElementById("mathLevel").onchange=e=>{mathLevel=e.target.value}}document.getElementById("go").onclick=()=>{prepareTasks();question()}}
function question(){answered=false;attempts=0;draw()}
function draw(){const x=bank[grade][key],t=currentTasks[index];shell('<nav><button id="back">← Genomgång</button><span class="muted">Fråga '+(index+1)+' av '+currentTasks.length+'</span></nav><section class="card"><h2>3. Prova själv</h2><p class="question">'+escape(t[0])+'</p><label for="answer">Ditt svar</label><p><input id="answer" autocomplete="off" aria-label="Ditt svar"></p><div id="feedback" aria-live="polite"></div><nav><button id="hint">💡 Ledtråd</button><button id="check" class="primary">Kontrollera</button><button id="next" hidden>Nästa →</button></nav></section>');document.getElementById("back").onclick=lesson;document.getElementById("hint").onclick=()=>message("Ledtråd: "+t[2]);document.getElementById("check").onclick=check;document.getElementById("answer").onkeydown=e=>{if(e.key==="Enter")check()}}
function message(s){document.getElementById("feedback").innerHTML='<div class="feedback">'+escape(s)+'</div>'}
function check(){if(answered)return;const t=currentTasks[index],v=document.getElementById("answer").value;if(!v.trim()){message("Skriv ett svar först.");return}attempts++;if(norm(v)===norm(t[1])){score++;done("Rätt! ⭐ "+t[3])}else if(attempts<2){message("Försök igen. Tänk på ledtråden: "+t[2]);document.getElementById("answer").focus()}else{misses.push(t[0]);done("Det blev inte rätt ännu. Rätt svar: "+t[1]+". "+t[3])}}
function done(s){answered=true;message(s);document.getElementById("check").hidden=true;document.getElementById("hint").hidden=true;document.getElementById("answer").disabled=true;const b=document.getElementById("next");b.hidden=false;b.textContent=index===currentTasks.length-1?"Se resultatet →":"Nästa fråga →";b.onclick=()=>{index++;index>=currentTasks.length?finish():question()}}
function finish(){const x=bank[grade][key];shell('<section class="card"><h2>🎉 Färdigt!</h2><p>Du fick '+score+' av '+currentTasks.length+' rätt på första eller andra försöket.</p><p>'+(misses.length?'Öva gärna igen på: '+escape(misses.join(", ")):'Bra jobbat! Kan du förklara hur du tänkte?')+'</p><nav><button id="again" class="primary">Öva igen</button><button id="subjects">Välj ett annat ämne</button></nav></section>');document.getElementById("again").onclick=()=>start(key);document.getElementById("subjects").onclick=home}
home();
})();