window.UTV_OKT = {
  nr: 21, gruppe: 'fagfelt', tittel: 'Yrker jeg ikke kjenner',
  ingress: 'Det finnes jobber du ikke visste fantes. I denne økten gjetter du, utforsker og bygger din egen yrkesbank.',
  mal: ['Oppdage yrker du ikke kjente fra før', 'Bruke Interessevelgeren på Utdanning.no til å utforske yrker', 'Finne ut hva yrkene du velger sier om interessene dine'],
  steg: [
    { tittel: 'Startoppdrag: Yrkeslotteriet', tid: '8 min', blokker: [
      { type: 'poeng', tekst: 'Vi gjetter ikke for å ha rett. Vi gjetter for å finne ut hva vi trenger å undersøke. Ingen ler av et «feil» svar.' },
      { type: 'instruks', avsnitt: ['Du får ett yrke om gangen. Bruk 20 sekunder på hver og skriv hva du tror personen gjør. Åpne svaret først når du har gjettet.'] },
      { type: 'felt', id: 'g1', label: 'AKTUAR: Hva tror jeg denne personen gjør?', rader: 2 },
      { type: 'avslor', sporsmal: 'Vis forklaring: aktuar', svar: 'En aktuar bruker matematikk og statistikk til å vurdere risiko, for eksempel i forsikring og pensjon.' },
      { type: 'felt', id: 'g2', label: 'AFIS-FULLMEKTIG: Hva tror jeg denne personen gjør?', rader: 2 },
      { type: 'avslor', sporsmal: 'Vis forklaring: AFIS-fullmektig', svar: 'En AFIS-fullmektig gir informasjon til fly og helikopter på mindre flyplasser. Det er ikke det samme som flygeleder.' },
      { type: 'felt', id: 'g3', label: 'AKTIVITØR: Hva tror jeg denne personen gjør?', rader: 2 },
      { type: 'avslor', sporsmal: 'Vis forklaring: aktivitør', svar: 'En aktivitør planlegger og leder aktiviteter som gir hverdagen mer innhold, for eksempel for eldre eller andre som trenger støtte.' },
      { type: 'felt', id: 'g4', label: 'BRØNNBORER: Hva tror jeg denne personen gjør?', rader: 2 },
      { type: 'avslor', sporsmal: 'Vis forklaring: brønnborer', svar: 'En brønnborer borer brønner, for eksempel for drikkevann eller for varme fra berggrunnen.' },
      { type: 'felt', id: 'g-overrasket', label: 'Hvilket yrke trodde jeg at jeg visste noe om, men tok feil?', rader: 2 }
    ] },

    { tittel: 'Lær noe nytt: Hvorfor kjenner vi noen yrker og ikke andre?', tid: '5 min', blokker: [
      { type: 'felt', id: 'antall', label: 'Hvor mange yrker tror jeg finnes?', rader: 1 },
      { type: 'tekst', avsnitt: ['På Utdanning.no finnes Interessevelgeren, der du kan utforske hundrevis av yrker etter interesser, egenskaper, ferdigheter og kunnskaper.', 'Vi lærer ofte om yrker gjennom familien, venner, sosiale medier, TV og det vi møter i hverdagen. **Det vi kjenner til, er ikke nødvendigvis det som finnes.**'] },
      { type: 'poeng', tekst: 'At du ikke kjenner et yrke, betyr ikke at du ikke er interessert i det.' },
      { type: 'lenke', tekst: 'Utforsk yrker på Utdanning.no', url: 'https://utdanning.no/', merknad: 'Åpnes i ny fane' }
    ] },

    { tittel: 'Utforsk: Tre ukjente', tid: '20 min', blokker: [
      { type: 'instruks', avsnitt: ['Bruk Interessevelgeren og finn tre yrker du ikke kjenner godt fra før.', 'Hvert yrke må oppfylle **minst to av tre** krav under.'] },
      { type: 'lenke', tekst: 'Interessevelgeren: utforsk yrker', url: 'https://utdanning.no/', merknad: 'Åpnes i ny fane' },
      { type: 'gjenta', id: 'y', tittel: 'Yrke', antall: 3, felt: [
        { type: 'felt', id: 'navn', label: 'Navn på yrket', tittel: true, rader: 1 },
        { type: 'valg', id: 'krav', label: 'Dette stemmer (velg minst to)', valg: ['Jeg hadde aldri hørt om det', 'Jeg visste ikke hva personen gjorde', 'Jeg hadde ikke tenkt på det som et yrke'] },
        { type: 'felt', id: 'gjor', label: 'Hva gjør personen?', rader: 2 },
        { type: 'felt', id: 'sted', label: 'Hvor kan personen jobbe?', rader: 2 },
        { type: 'felt', id: 'utd', label: 'Hvilken utdanning finnes?', rader: 2 },
        { type: 'felt', id: 'over', label: 'Hva overrasket meg?', rader: 2 },
        { type: 'valg', id: 'stjerner', label: 'Nysgjerrighet (1–5)', maks: 1, valg: ['1', '2', '3', '4', '5'] }
      ] }
    ] },

    { tittel: 'Del med andre: Bytt yrke!', tid: '7 min', blokker: [
      { type: 'instruks', avsnitt: ['Gå sammen i grupper på tre. Hver av dere får **30 sekunder** til å presentere yrket som overrasket dere mest.', 'De andre skal ikke stille spørsmål før alle tre har presentert.'] },
      { type: 'snakk', tittel: 'Svar sammen etter tre presentasjoner', sporsmal: ['Hvilket yrke vil vi vite mer om?', 'Hva ble vi mest nysgjerrige på?'] },
      { type: 'poeng', tekst: 'Dere skal ikke finne ut hvilket yrke som er best. Dere skal finne ut hva dere ble nysgjerrige på.' },
      { type: 'felt', id: 'gruppe', label: 'Yrket gruppa vil vite mer om', rader: 2 }
    ] },

    { tittel: 'Hva sier valget ditt om interessene dine?', tid: '3 min', blokker: [
      { type: 'tekst', avsnitt: ['Yrkene du velger kan fortelle noe om hva du liker.'] },
      { type: 'liste', tittel: 'Eksempler', punkter: ['aktuar: matematikk og data', 'arrangementsplanlegger: mennesker og organisering', 'anleggsgartner: praktisk arbeid og natur', 'animatør: kreativitet og teknologi'] },
      { type: 'valg', id: 'tema', label: 'Ser jeg noe som går igjen i de tre yrkene mine?', hint: 'Velg det som passer.', valg: ['mennesker', 'teknologi', 'kreativitet', 'natur', 'praktisk arbeid', 'problemløsing', 'organisering', 'økonomi', 'språk', 'forskning'] },
      { type: 'felt', id: 'tema-hvorfor', label: 'Hva sier dette om interessene mine?', rader: 2 }
    ] },

    { tittel: 'Reflekter: Mitt ukjente yrke', tid: '2 min', blokker: [
      { type: 'felt', id: 'e1', label: 'Et yrke jeg aldri hadde tenkt på før er …', rader: 1 },
      { type: 'felt', id: 'e2', label: 'Det som gjorde meg nysgjerrig var …', rader: 2 },
      { type: 'felt', id: 'e3', label: 'Jeg har lyst til å undersøke … videre.', rader: 2 },
      { type: 'felt', id: 'e4', label: 'Før økta trodde jeg … Nå vet jeg …', rader: 2 }
    ] },

    { tittel: 'Lagre i yrkesbanken din', blokker: [
      { type: 'tekst', avsnitt: ['De tre yrkene du fant er starten på din egen yrkesbank. Senere kan du koble dem til interesseprofilen din (RIASEC), utdanningsprogram, verdier og styrker.'] },
      { type: 'poeng', tekst: 'Trykk «Kopier svarene mine» nederst og lagre teksten i porteføljen din.' }
    ] }
  ]
};
