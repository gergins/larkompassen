# Lärkompassen — Projektminne och beslutslogg
Uppdaterad: 2026-10-14

## Syfte
En svensk Lgr22-inspirerad fristående lärplattform för två barn, årskurs 1 och årskurs 5. En offentlig GitHub Pages-webbplats med två fasta elevlänkar. Föräldern väljer hur plattformen utvecklas och vill att diskussion och krav ska finnas kvar mellan sessioner.

## Verifierat levererat
Repository: https://github.com/gergins/larkompassen
Implementerade filer: index.html, ak1/index.html, ak5/index.html, style.css, app.js, README.md (kontrollera alltid aktuell commit). Startsida, ämnesval, enkel introduktion/handledning, ledtråd, två försök, återkoppling, och slutresultat. Veckonummer samt ett ämnesförslag som växlar med veckan. En mycket liten bank med exempeluppgifter. Status för GitHub Pages måste kontrolleras; användaren visade 404 före aktivering och har inte bekräftat att Pages fungerar.

## Beslut
1. Behåll ORIGINAL-läget på /ak1/ och /ak5/ oförändrat vid experiment. Förändringar där endast efter uttrycklig acceptans.
2. Nytt separat läge 'Upptäck & lär' under /upptack/ak1/ och /upptack/ak5/, plus eventuell intern testyta /lab/. Återanvänd lärinnehåll och datamodeller utan att kopiera innehållet.
3. Fokusera på förståelse före rättning: förklaring, konkret exempel, uppgift, stegvis ledtråd, nytt försök, lösningsförklaring, transferuppgift.
4. Albert Junior är referens för offentlig pedagogisk mekanik (dra objekt, minispel, kapitelnivåer). Skapa egna uttryck och implementationer; påstå inte insyn i privat källkod. REA-granskning ska skilja observationer från hypoteser.
5. Föräldraläge ska kunna visa genomförda övningar, ämnen, datum, antal besvarade uppgifter, första-försöks-korrekthet, ledtrådsförfrågningar, extra försök, avbrutna sessioner och kunskapsluckor samt progression över tid.
6. Många ledtrådar ska inte tolkas som misslyckande; visa förbättring och självständighet, inte övervaknings- eller skamindikatorer.
7. Respektera barns integritet. Spara inga elevuppgifter i offentligt repository. Lokal browser-lagring kan vara första prototypen men synkar inte mellan enheter; säkra konton/backend behövs för tvärenhetssynk. Val av enheter är ÄNNU EJ BESVARAT.
8. Lgr22 anger kursplanernas centrala innehåll över stadium, inte exakt skolveckas kapitel. Veckoplan är en egen dokumenterad plan, inte utgiven som officiell Skolverket-plan. Ingen pågående automatisk AI-generering har skapats. Kvalitetssäkrad terminsbank och datumstyrd visning före schemalagd generering.
9. Ingen automatisk veckopublicering eller fullständig Föräldraläge finns implementerad ännu.
10. Skapa inte fler överlappande plugins: befintliga 'parent-homework-checker' / Parent Learning Navigator för pedagogisk navigering, 'rea-reverse-engineering' för evidensbaserad jämförelse, och projektets README/denna fil som projektspecifik källa.

## Prioriterad backlog
P0: verifiera Pages-publicering, aktuella filer och exempel i browser; lägg in tester för facit och ämnesnavigation.
P1: Upptäck & lär som separat prototyp för åk1 matematik (tiokompisar, talblock) och åk5 (bråk/decimal) utan originaländring.
P2: Definiera event-schema för övningar (hint_used, attempt_submitted, exercise_completed etc.) och lokalt dataskydd; bygg Föräldraläge lokalt efter enhetsbeslut.
P3: Testa pedagogisk effekt med frivillig barnanpassad feedback; därefter fler Lgr22-kopplade veckolektioner och försiktig automatik.
P4: Eventuell synkad föräldraöversikt med autentisering och privata backenddata.

## Öppna frågor
- Använder barnen samma enhet, separata enheter eller blandat?
- Ska föräldern kunna se resultat från egen mobil om barnen använder andra enheter?
- Vilka läromedel, svårigheter och skolplaner gäller faktiskt just nu?
- Hur mycket innehåll bör införas varje vecka, och hur ska fakta granskas?

## Återuppta
Säg 'Fortsätt Lärkompassen: läs docs/PROJECT_MEMORY.md, kontrollera repo och föreslå nästa lilla verifierbara steg'. Använd ingen påstådd automatisering eller pluginändring utan verifiering.


## Ny funktion — Veckokarta, 2026-10-14
Beslut: användaren vill att båda barnen lätt kan gå tillbaka till veckan före, för två veckor sedan eller en tidigare månad, se nuvarande vecka och tjuvkika på nästa vecka eller månad. Implementerad separat väg: /veckokarta/?ak=1 respektive ?ak=5, med månadsnavigation, ISO-veckonummer, statusetiketter och förslag på ämnen. Ingångslänk tillagd på de befintliga /ak1/ och /ak5/ sidorna. Originalövningarna, frågelogiken och uppgiftsbanken är oförändrade.
Begränsning: Kalendern innehåller genererade ämnesförslag, inte skolans schema eller unika veckolektioner. 'Öppna ämnesövningarna' går till befintligt ämnesval och spårar inte kalendervecka i lärhistorik. Skolans planering ska inte hävdas utan underlag.
Nästa kvalitetssteg: en verklig planmodell per vecka med lesson-id, mål, tillgänglighetsstatus ('redo'/'planerad'), och återbesök till samma specifika lektion. Föräldraläges progression och privat svarshistorik är fortfarande planerad, inte implementerad.


## Veckolektioner och Föräldraläge – 2026-10-14
- Infört /lektion/?ak=1|5&year=YYYY&week=WW som ger direkt öppningsbar och återbesökbar lektion. Lektionerna har exempel, frågor, ledtrådar, två försök och sparad sammanfattning på samma enhet via localStorage. Första prototypen återanvänder en cyklisk bank med fem lektioner per årskurs; detta är **inte** 52 unika veckolektioner och inte skolans officiella veckoplan.
- Veckokartans länk går nu till vald vecka och årskurs. Föräldraportal /foralder/ tillagd och länkad från startsidan.
- Föräldraläge kräver lokal 6–12-siffrig PIN innan lokal övningsöversikt visas. PIN-hash med slumpmässigt salt lagras lokalt. Detta är bara en bekvämlighetsspärr: inte autentisering, inte säkerhet mot tekniskt kunniga användare och data är inte krypterad. PIN finns inte i repositoryt.
- Historik visas bara om veckolektioner avslutas på **samma browser och enhet**. Originalövningar spåras ännu inte och inga framsteg synkas. Inga namn behövs. Borttagen localStorage betyder förlorad historik.
- För riktigt lösenordsskydd på separata enheter krävs autentiserad backend och privat datalagring. Ingen sådan backend har byggts.
- Föreslagna nästa steg: skapa riktiga veckospecifika lektioner med plan-ID, validera allt facit, testa UI i webbläsare, införa opt-in-export/radering och säker autentisering vid synkning; lämna barnens Original-upplevelse oförändrad.


## Föräldraläge v1.3 — 2026-10-14
Implementerat på /foralder/ med tre interaktiva flikar:
- Översikt: filtrera åk 1, åk 5 eller båda; denna vecka, denna månad, förra månaden, all registrerad historik; räkna verkliga lokala lektioner, frågor, ledtrådar och svarsförsök. Veckodiagram.
- Kunskaper: gruppering per ämne och lektion, visning av firstTryCorrect/antal frågor (övningssignal, inte betyg), antal ledtrådar och försök, markerbara uppföljningsområden.
- Planering: lokala föräldraanteckningar om kommande ämnesövningar, inklusive ta bort. Planerna visas ännu INTE hos barnet och schemaläggs inte automatiskt.
- Behåller lokal PIN-kod och visar integritets- och säkerhetsbegränsningar. Inga privata data skickas till publikt GitHub. Test av JavaScript-syntax lyckades, men publicerad browser-E2E och funktionstest återstår.
- Ingen uppdatering av befintliga Original-övningar. Ingen synk mellan enheter, lösenordsåterställning eller riktig serverautentisering. E-postinloggning är beslutad som senare version.
Nästa: verifiera webbläsarflöde på Pages, prova PIN och två barns sessioner, event-schema för ledtråd per fråga, och förälders möjlighet att dela tilldelningar till barnens enheter när säker autentisering införts.


## Lgr22-orientering för familjen — 2026-10-14
- Delad innehållsmodell i curriculum.js: pedagogiska sammanfattningar av utvalda kursplaneområden med nivåanpassade föräldratexter och barntexter, hemaktiviteter och nästa steg.
- Föräldraläge: expanderbara kursplanskopplade texter under Kunskaper och Planering. Detta är separerat från faktisk resultatstatistik och säger inte att barnet uppnått visst mål.
- Barnläge: /laromraden/?ak=1 och ?ak=5, länkat från elevportalernas startsidor. Samma undervisningsmål uttryckta enkelt för barnen.
- Dessa exempel är inte fullständig läroplanstäckning och är inte Skolverkets veckoplan. Tillagd struktur kan senare utökas ämne för ämne; källhänvisning per område behöver förbättras.
- Verifierat: GitHub-commits och JavaScript-syntax. Publicerad end-to-end-kontroll återstår. Befintliga Original-övningar och lokal PIN kvarstår.


## Direkta länkar från lärandemål till övning — 2026-10-14
- Lärandekartans knappar länkar nu till /lektion/?ak=1|5&goal=<mål-id> för mål som har en passande första övning. Barnet slipper gå via ämnesöversikten.
- Delad lektionsmotor stöder mål-id för ett urval mål utan att veckokartans year/week-länkar ändras. För mål utan matchande övning står det tydligt 'Övning kommer senare'.
- Observera att kopplingarna är pedagogiskt ungefärliga: exempelvis 'Tal och de fyra räknesätten' öppnar tiokompisar, inte fullständig undervisning i alla fyra räknesätt. En fullständig mål-till-lektion-katalog med täckningsstatus återstår.
- Källkod och JS-syntax verifierade; publicerad E2E-kontroll återstår.


## Kvalitetsansvar och navigationsfel — 2026-10-14
Användaren rapporterar att mål->övning fortfarande inte fungerar. Tidigare syntaxtest och GitHub-commit var otillräckliga bevis för fungerande publicerad UX. Underhållsansvar: befintlig utvecklings-/verifieringsorkestrering, INTE ny överlappande plugin. Regel: deklarera inte en funktion klar förrän korrekt mål-route, webbläsarflöde och Pages-publicering verifierats; skilj statiska tester från E2E.
Ändringar: cache-versionerad laromraden/goals.js samt lektion/lesson.js i respektive HTML, statiska testfall under tests/verify.mjs, GitHub Actions-kontroll .github/workflows/verify.yml. Kontrollera CI-resultat och användarens reproduktion; slutför manuell mobil+desktop E2E när browseråtkomst finns. Pages kan inte tillförlitligt avläsas via nuvarande åtkomst. Regressera även Föräldraläge, klassbyte och veckokarta.
Öppen blockerare: användaren har inte specificerat vilket område/knapp som felar och hur; be om exakt symptom om senaste publiceringen fortfarande inte fungerar.


## Föräldervalt antal frågor – 2026-10-14
Föräldraläge → Planering innehåller inställningar för antal frågor per åk (2,5,10,20,30), sparade i lokalStorage `lk-practice-settings-v1`. Veckolektioner och direkt öppnade mållektioner läser inställningen. Matematik inom förberedda lägen skapar varierade aritmetiska uppgifter; andra ämnen använder bara tillgängliga frågor och visar tydligt när antalet är lägre. Ingen synk mellan olika enheter, därför gäller inställningen endast barn som övar i samma browser/device. JavaScript-syntax kontrollerad, browser-E2E återstår. För framtida version: synka via autentiserad backend och säkerställ provbank för samtliga ämnen.


## QA 2026-10-14 – Frågeantal och facit
Bråkgeneratorns nämnare har korrigerats så båda bråkdelarna är äkta bråk. Kontroll för exakt antal unika frågor infördes. `tests/question-count.mjs` kontrollerar matematikgeneratorn för båda årskurserna med 2/5/10/20/30 frågor och verifierar facit/unikhet/talgränser. GitHub Actions-workflow kör nu detta efter statisk navigationstest. **CI-körning och publicerad browser-E2E ej verifierade**; Quality Gate issue #1 hålls öppen. Lokal repository-kloning misslyckades på grund av DNS-begränsning i exekveringsmiljön.


## Inställningar på olika enheter — 2026-10-14
Användaren rapporterade att valet av antal frågor i Föräldraläge inte syntes i barnets vy. Orsak: inställningarna ligger i lokalStorage på förälderns enhet; separata enheter delar inte lagring. Implementerat nu: Föräldraläge → Planering → Skicka övning till barnet ger delbara länkar med `ak`, `goal` och `antal` (2/5/10/20/30) till matematiklektionerna. Lektionen prioriterar giltigt frågeantal från URL framför lokal inställning. Den ordinarie elevlänken kan fortfarande visa sitt eget antal beroende på klientens lokala inställning, och originalövningarna ändras inte. Säkert synkad föräldraplanering kräver senare backend eller annan gemensam datakälla. JavaScript-syntax kontrollerad, browser-E2E återstår.


## Resultat & misstag samt valfri belöning — 2026-10-14
- /lektion/ sparar från och med nya genomförda lektioner answerDetails med varje fråga, facit, barnets inskickade försök, sista svaret korrekt/inte korrekt, förstaförsök rätt och antal ledtrådar. Uppmuntrande färdigvy visar antal rätt efter högst två försök samt förstaförsöksrätt.
- /foralder/ har fjärde fliken Resultat & misstag där samma webbläsares nyregistrerade lektioner kan öppnas frågevis. Äldre lektioner saknar fråga-för-fråga-data och kommer inte att rekonstrueras.
- /foralder/ -> Planering har valfria belöningar per årskurs: på/av, tröskel 70,80,90,100 procent och förälders eget meddelande (max 180 tecken). Tröskeln utgår från antal **korrekta slutsvar** dividerat med alla frågor, inte antal rätt vid första försöket. Barnet ser gratulation på slutförd lektion endast när tröskeln uppnås.
- Skärmtidsbelöningar är textliga uppmuntringar som alltid kräver förälderns medgivande; inga appar låses upp. Spara inte privata känsliga uppgifter. Lokal storage/PIN är inte riktig säker autentisering och synkas inte mellan enheter. För cross-device gäller senare backend eller explicit säker konfiguration.
- GitHub källkod uppdaterad och JS-syntax verifierad. Publicerad browser-E2E och flödestest för belöning/resultat återstår. QA gate öppen.


## Belöningar v1.8 — 2026-10-14
- Föräldraläge har nu en separat flik '🎁 Belöningar' i stället för att belöningar ligger långt ner i Planering.
- Föräldern väljer belöningstext/tröskel per årskurs och sparar lokalt, därefter väljer årskurs, övning och antal frågor och skapar en delbar övningslänk. `rewardThreshold` och `rewardText` förs över som URL-parametrar och läses av lektionen vid avslutning. Andra enheter behöver öppna just länken; den fasta elevlänken läser inte centrala föräldrainställningar.
- Länken är inte säker, kan läsas/ändras av mottagaren och får inte innehålla privat information. Föräldern måste godkänna skärmtidsbelöning; inget upplåsningstillstånd ges. Behöver säker backend i framtiden.
- GitHub commits och JS-syntax verifierade; webbläsar-/CI-verifiering ej bekräftad.


## Flera belöningar per barn — 2026-10-14
Fix: tidigare `lk-rewards-v1` lagrade bara ett objekt per årskurs och varje Spara ersatte det tidigare. Ny flik Belöningar använder `lk-reward-library-v1` som lista av {id,grade,text,threshold}, migrerar äldre enstaka belöningar vid första sparning, visar alla sparade poster, kan ta bort och låter föräldern välja en från dropdown för att skapa delbar länk till rätt matematikkurs. HTML-script versionsuppdaterat till v1.9.0. Javascript syntax verifierad, publicerad E2E kvarstår. Supabase Free är lämplig framtida backend men är inte ansluten.


## Föräldraläge v1.10 — årskursspecifik Lgr22-orientering
Tidigare visade Planering och Kunskaper innehåll för både åk 1 och åk 5 om globala filtret stod på 'Båda årskurserna'. Nu finns en separat väljare för åk 1 respektive åk 5 inne i läroplanssektionen. Åk 1 visar endast Lärkompassens utvalda innehåll för Lgr22 åk 1–3, åk 5 för Lgr22 åk 4–6. Globalt val av enskild årskurs förinställer denna väljare. Felvisande länk med bara matematik som källa ersatt med allmän Lgr22-länk. Det är INTE Skolverkets detaljerade läroplan per enskild årskurs, och hela kursplanen är ännu inte implementerad. GitHub-kod/JS-syntax kontrollerad; webbläsartest återstår.


## Matematikmål och bedömningsorientering v1.11 – 2026-10-14
Ny egen flik Matematikmål i Föräldraläge. Åk 1 visar tydlig riktning mot kriterierna för slutet av åk 3, åk 5 riktning mot betygskriterierna för slutet av åk 6. Pedagogiskt sammanfattade områden: begrepp, metoder, problemlösning, resonemang och kommunikation (geometri/mönster särskilt åk 1). Föreslår relaterade övningar och ger förälder lokala markeringar 'extra träning' utan att kalla det diagnos eller betyg. Relaterade första-försöksresultat märks uttryckligen som partiell övningssignal; resonemang och förståelse bedöms inte automatiskt. Länk till Skolverkets officiella matematik-kursplan. Ej fullständig matris eller personlig skolbedömning. Kod + syntax verifierade; webbläsartest återstår.


## Föräldraläge v1.12 Ämnesmål
Tidigare Matematikmål är nu Ämnesmål med separat ämnes- och årskursväljare. Exempelområden åk 1: Matematik, Svenska, Engelska, NO, SO. Åk 5: Matematik, Svenska, Engelska, Geografi, Historia, Biologi. Vägledning mot centralt innehåll och kriterier i Lgr22:s åk 1–3 respektive 4–6; ENDAST Lärkompassens egna pedagogiska sammanfattningar, ej heltäckande/ordagrant kriteriedokument. Markeringar för extra träning sparas lokalt per ämne/årskurs/område. Endast existerande målövningar får direktlänkar; övriga märks 'kommer senare'. Övningsresultat representeras aldrig som betyg. GitHub/JS-syntax verifierat, publicerad E2E återstår.


## v1.13 — Kunskaper, Träningsplan och belöningsutmaning
- Kunskaper: ämnesfilter inkluderar nu alla ämnen från registrerade ämnesguider för båda årskurserna och historiskt registrerade ämnen, även när barn inte genomfört övningar. Frånvaro av data visas som 'Ingen registrerad ämneshistorik' och aldrig som misslyckande.
- Ämnesmål: för mål med befintlig relaterad övning finns knappen 'Skapa träningsplan'. Ny flik Träningsplan lagrar lokalt områden per barn och visar fyra coachningssteg: Förstå, Öva, Förklara, Repetera. Endast Öva har en faktiskt implementerad övningslänk; övriga är instruktioner, inte automatiska moment.
- Barnets lektionsstart: om delad länk innehåller rewardThreshold och rewardText visas 'Vill du anta utmaningen?' med sparad belöning och tröskel innan barnet klickar Börja öva. URL-parametrarna är inte autentiserade/kan ändras; belöning kräver alltid vuxens godkännande.
- Kod i GitHub och JS-syntax kontrollerade, browser-E2E och CI-resultat kvarstår. Familjeövergripande synk saknas.


## v1.14 – läroplansansvar och gemensamt ämnesregister (2026-10-14)
Jämförelse mot Skolverkets Lgr22: tidigare hade Kunskaper, Planering och Ämnesmål olika och ofullständiga ämneslistor. Ett gemensamt ämnesregister LK_SUBJECTS ligger nu i curriculum.js och används av alla tre föräldravisningar. Finns ingen färdig övning respektive ingen granskad målsammanfattning visas detta tydligt; inget falskt betyg eller felaktig bedömningsstatus. Katalogen skiljer ordinarie skolämnen, vissa valbara/särskilda ämnen och gruppnamn NO/SO; exakt ämnesutbud varierar mellan elever. Fullständiga kursplansmål och samtliga specialämnen återstår att inventera.
Test tests/subjects.mjs har lagts till och kopplats till GitHub Actions. CI-grönt och publicerad webbläsar-E2E är ännu inte verifierade. Ämnes-/läroplansansvaret registrerat i GitHub issue #2 och release-QA ägs av befintlig quality gate (issue #1).


## v1.15 – enhetlig ämnesnavigation och mer vägledning
Ämnesval i Kunskaper, Planering, Ämnesmål och Träningsplan hämtar nu ämnesnamn från samma LK_SUBJECTS i curriculum.js. Träningsplan har separat årskurs- och ämnesfilter för sparade planer. Ämnesmål har dessutom pedagogiska exempelguider i fler ämnen (bild, musik, slöjd, idrott, teknik, fysik, kemi, samhällskunskap, religion m.fl.), där ännu inga färdiga digitala övningar finns. Dessa är inte kompletta eller ordagranna bedömningskriterier. Lgr22-katalogen inkluderar även särskilda/valbara kursplaner samt dans och judiska studier; att visa ämnet innebär inte att varje barn läser det. Inga nya fungerande elevövningar har implementerats i detta steg. Repo-uppdatering och JS-syntax kontrollerade, publicerad E2E fortfarande ej bekräftad.


## v1.16 – granskade delmål och första nya elevövning (2026-10-14)
Avgränsat första innehållssteg: engelska och bild har nu tydligare åk 1–3/4–6-anpassade beskrivningar och direkta kursplanslänkar till Skolverkets Engelska GRGRENG01 och Bild GRGRBIL01 i Ämnesmål. Engelska har nya målövningar: english-everyday för åk 1 och english-communication för åk 5, fem korta skrivna frågor vardera. Dessa testar bara en begränsad del av språkförmågorna och prövar INTE hörförståelse/uttal. Ämnesmål erbjuder träningsplan för engelska där fungerande målövning finns. Bild har ännu ingen digital elevövning; praktiskt bildskapande kan inte bedömas automatiskt med korta flervals- eller textsvar. Tests/subjects.mjs utökad med tester för nya mål, övningar och källor; kopplad CI som tidigare. Repoändringar och JavaScript-syntax verifierade; publicerad webbläsar-E2E och CI-resultat inte verifierade. Nästa steg är att fortsätta ämne för ämne, först med källgranskad målkarta och sedan faktiskt användbara övningar.


## v1.17 – målövningar synliga från elevstart
Verifierat att /ak1/ och /ak5/ innehåller separata originalämnesövningar, så /lektion/?goal=english-* var inte direkt upptäckbar från startsidan. Båda barnens originalövningar i app.js har behållits oförändrade. I stället har båda elevstartsidor fått egen liten sektion Nya målövningar med engelska, svenska, SO/geografi och NO/biologi. Lektionsrutt science-plants (åk1→lektion 3) respektive science-ecosystem (åk5→lektion 4) använder befintlig övningsbank, och NO/Biologi-guider kopplas till dessa. Notera att samlingsrubriken NO på åk 5 länkar till biologi, inte alla NO-ämnen. Tests/subjects.mjs utökad med statiska navigationskontroller; körning av GitHub Actions och webbläsar-E2E återstår. Detta är ännu inte en allomfattande åk-/ämnesplan eller automatiskt synkad läroplan.


## v1.18 – varierande övningar i originalvyerna
I original /ak1/ och /ak5/ matematik skapas sex unika uppgifter per omgång vid start; åk1 addition/subtraktion med tal inom 20 och åk5 decimaler samt 25 procent av tal. 'Öva igen' skapar ny omgång, korrekt uppdaterad resultatnämnare. Övriga ämnen blandar befintliga frågors ordning vid varje start, men ämnen med en fråga får inte falsk 'randomisering' eller automatiskt uppfunna påståenden. Ursprunglig layout, svarsrättning och ledtrådar bibehålls. Tests/random-practice.mjs tillagd i GitHub Actions, publicerad webbläsar-E2E och grön CI återstår att verifiera. Framtida ämnesbank ska innehålla flera sakkontrollerade frågor per ämne, helst nivå- och kompetensmärkta.
