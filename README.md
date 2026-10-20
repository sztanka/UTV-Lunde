# Utdanningsvalg – øktene som nettside

Forsiden viser en flis per økt. Hver økt har stegene fra presentasjonen, og oppgavene fra arbeidsarket er skrivefelt på siden. Eleven kan kopiere alt hun har skrevet med én knapp. Svarene lagres bare i elevens nettleser (localStorage) og sendes ikke noe sted.

## Prøv lokalt
Dobbeltklikk på `index.html`. Det trengs ingen installasjon.

## Legg ut på GitHub Pages
1. Lag et nytt repository på GitHub og last opp alle filene i denne mappen (`index.html` skal ligge øverst).
2. Gå til **Settings → Pages**. Velg **Deploy from a branch**, branch `main` og mappen `/ (root)`.
3. Etter et minutt er siden tilgjengelig på `https://<brukernavn>.github.io/<repo>/`.

## Legg inn en ny økt
1. Kopier `data/okt-05.js` til `data/okt-XX.js` (to sifre, for eksempel `okt-06.js`) og bytt ut innholdet.
2. I `data/okter.js`: sett `klar: true` for økten, så blir flisen klikkbar.

Hver økt er en liste med **steg**, og hvert steg er en liste med **blokker**:

| Blokk | Bruk |
|---|---|
| `tekst` | Avsnitt. `**fet**` fungerer. |
| `liste` | Punktliste (`nummerert: true` for tall) |
| `instruks` | Ramme med oppgaveteksten. `tid: '3 min'` er valgfritt. |
| `snakk` | Boks for samtale i par eller grupper |
| `poeng` | Gul fremhevet setning |
| `sitat` | Utheva sitat |
| `kort` | Kort side om side med tittel, tekst og punkter |
| `ord` | Merkelapper (eksempler, ordlister) |
| `flyt` | Kjede med piler |
| `lenke` | Knapp som åpner en nettside |
| `felt` | Skrivefelt. `rader: 1` gir én linje, større tall gir flere. |
| `liste-felt` | Flere nummererte enkeltlinjer (`antall: 3`) |
| `valg` | Knapper eleven kan trykke på, i grupper eller som flat liste |
| `gjenta` | Samme skjemakort flere ganger, for eksempel «Yrke 1–5» |

`gruppe` i hver økt styrer fargen: `meg`, `arbeid`, `veivalg` eller `fagfelt`.
