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
