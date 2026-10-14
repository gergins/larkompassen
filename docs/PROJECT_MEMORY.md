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
