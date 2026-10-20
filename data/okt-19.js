window.UTV_OKT = {
  nr: 19, gruppe: 'fagfelt', tittel: 'Helse, kropp og aktivitet',
  ingress: 'Hva skal til for å hjelpe et menneske? Du undersøker hvor ulike yrkene innen helse, kropp og aktivitet egentlig er.',
  mal: ['Beskrive ulike yrker innen helse, kropp og aktivitet', 'Forklare forskjeller mellom noen av yrkene', 'Finne informasjon om utdanning og arbeidsoppgaver', 'Reflektere over hvilke arbeidsoppgaver og egenskaper som virker interessante for deg'],
  steg: [
    { tittel: 'Startoppdrag: Hva ville du gjort?', tid: '7 min', blokker: [
      { type: 'instruks', avsnitt: ['Les situasjonen. Velg deretter hvem du tror kan hjelpe, og snakk med sidemannen.'] },
      { type: 'sitat', tekst: 'En ungdom har begynt å få vondt i kneet etter mye aktivitet. Personen vil fortsatt være aktiv, men vet ikke helt hva som er lurt å gjøre.', kilde: 'Situasjon' },
      { type: 'valg', id: 'case', label: 'Hvem tror du kan hjelpe, og med hva? Velg de du tror kan bidra.', hint: 'Du kan velge flere.', valg: ['Fysioterapeut', 'Personlig trener', 'Ernæringsfysiolog', 'Idrettspsykolog'] },
      { type: 'snakk', tittel: 'Snakk i par i 60 sekunder', sporsmal: ['Kan flere av dem hjelpe samme person, men på helt forskjellige måter?'] },
      { type: 'felt', id: 'case-hvorfor', label: 'Hvem kan hjelpe, og med hva?', rader: 3 },
      { type: 'poeng', tekst: 'Det finnes ikke ett riktig svar ennå. Spørsmålet viser at yrkene hjelper med ulike ting.' }
    ] },

    { tittel: 'Lær noe nytt: Helse er et lagarbeid', tid: '7 min', blokker: [
      { type: 'tekst', avsnitt: ['Mange tenker at «helseyrke» betyr sykepleier eller lege. Men helse handler også om kroppen, aktivitet, mat og psyken. Og noen ganger om hjelp som må komme raskt.'] },
      { type: 'kort', kort: [
        { tittel: 'Kropp', tekst: 'Fysisk funksjon', punkter: ['fysioterapeut'] },
        { tittel: 'Aktivitet', tekst: 'Trening og aktivitet', punkter: ['personlig trener', 'idrettspedagog'] },
        { tittel: 'Mat', tekst: 'Kosthold og ernæring', punkter: ['ernæringsfysiolog'] },
        { tittel: 'Mentalt', tekst: 'Psykisk helse og prestasjon', punkter: ['idrettspsykolog'] },
        { tittel: 'Akutt', tekst: 'Rask hjelp i krevende situasjoner', punkter: ['ambulansearbeider'] }
      ] },
      { type: 'poeng', tekst: 'På Utdanning.no er yrker ordnet etter interesser, blant annet helse og medisin, idrett og fritid, og rådgivning og veiledning.' },
      { type: 'lenke', tekst: 'Utforsk yrker på Utdanning.no', url: 'https://utdanning.no/', merknad: 'Åpnes i ny fane' }
    ] },

    { tittel: 'Test deg selv: Hvilket yrke passer best?', tid: '3 min', blokker: [
      { type: 'instruks', avsnitt: ['Velg ett yrke til hver beskrivelse. Svar alene først, og sjekk fasiten etterpå.'] },
      { type: 'valg', id: 't1', label: '«Jeg liker å hjelpe mennesker tilbake til aktivitet.»', maks: 1, valg: ['Fysioterapeut', 'Personlig trener', 'Ernæringsfysiolog', 'Ambulansearbeider', 'Idrettspsykolog'] },
      { type: 'valg', id: 't2', label: '«Jeg er interessert i hva som skjer med kroppen under trening.»', maks: 1, valg: ['Fysioterapeut', 'Personlig trener', 'Ernæringsfysiolog', 'Ambulansearbeider', 'Idrettspsykolog'] },
      { type: 'valg', id: 't3', label: '«Jeg liker akutte situasjoner og å hjelpe mennesker raskt.»', maks: 1, valg: ['Fysioterapeut', 'Personlig trener', 'Ernæringsfysiolog', 'Ambulansearbeider', 'Idrettspsykolog'] },
      { type: 'valg', id: 't4', label: '«Jeg er interessert i hvordan tanker og følelser påvirker prestasjon.»', maks: 1, valg: ['Fysioterapeut', 'Personlig trener', 'Ernæringsfysiolog', 'Ambulansearbeider', 'Idrettspsykolog'] },
      { type: 'avslor', sporsmal: 'Vis forslag til svar', svar: ['1: Fysioterapeut', '2: Personlig trener (kan også passe for ernæringsfysiolog, avhengig av hva du er nysgjerrig på)', '3: Ambulansearbeider', '4: Idrettspsykolog', 'Noen beskrivelser kan passe flere yrker. Det er også greit å si hvorfor.'] }
    ] },

    { tittel: 'Utforsk: Yrkesdetektiven', tid: '18 min', blokker: [
      { type: 'instruks', avsnitt: ['Velg ett yrke. Du skal ikke bare finne fakta, du skal løse et detektivoppdrag. Bruk Utdanning.no.', 'Du kan jobbe alene eller sammen med en annen.'] },
      { type: 'valg', id: 'yrke', label: 'Mitt yrke', maks: 1, valg: ['Fysioterapeut', 'Idrettspedagog', 'Ernæringsfysiolog', 'Ambulansearbeider', 'Personlig trener', 'Idrettspsykolog'] },
      { type: 'lenke', tekst: 'Søk opp yrket på Utdanning.no', url: 'https://utdanning.no/', merknad: 'Åpnes i ny fane' },
      { type: 'felt', id: 'd1', label: '🔎 1. Hva gjør personen? Skriv tre konkrete arbeidsoppgaver.', rader: 3 },
      { type: 'felt', id: 'd2', label: '🎓 2. Hvordan kommer man dit? Hvilken utdanning trengs?', rader: 2 },
      { type: 'felt', id: 'd3', label: '🏢 3. Hvor kan personen jobbe? Finn minst to arbeidssteder.', rader: 2 },
      { type: 'felt', id: 'd4', label: '🤝 4. Hvem samarbeider personen med?', rader: 2 },
      { type: 'felt', id: 'd5', label: '⚡ 5. Hva kan være krevende?', rader: 2 },
      { type: 'felt', id: 'd6', label: '✨ 6. Hva virker interessant?', rader: 2 },
      { type: 'felt', id: 'd7', label: 'Finn én ting du trodde om yrket som ikke stemte helt.', hint: 'Dette er det viktigste i oppdraget.', rader: 3 }
    ] },

    { tittel: 'Del med andre: Yrkesduell', tid: '8 min', blokker: [
      { type: 'instruks', avsnitt: ['Finn et par som har valgt et annet yrke enn du.', 'Situasjon: **en ungdom vil begynne med mer fysisk aktivitet og trenger hjelp.**', 'Dere får 60 sekunder hver til å argumentere for: «Hvorfor kan akkurat vårt yrke være nyttig?»'] },
      { type: 'snakk', tittel: 'Svar deretter på', sporsmal: ['Hva kan yrket vårt gjøre som det andre yrket ikke først og fremst gjør?'] },
      { type: 'poeng', tekst: 'Poenget er ikke å kåre et beste yrke. Dere skal se forskjeller mellom rollene.' },
      { type: 'felt', id: 'duell', label: 'Dette lærte jeg om det andre yrket', rader: 2 }
    ] },

    { tittel: 'Reflekter: Passer helse og kropp for meg?', tid: '5 min', blokker: [
      { type: 'valg', id: 'exit', label: 'Helse og kropp som yrke: passer det for meg?', maks: 1, valg: ['🟢 Dette ble mer interessant enn jeg trodde', '🟡 Jeg er usikker, men vil undersøke mer', '🔴 Dette virker ikke særlig interessant'] },
      { type: 'felt', id: 'exit-hvorfor', label: 'Jeg valgte dette fordi …', rader: 2 },
      { type: 'felt', id: 'exit-oppgave', label: 'En arbeidsoppgave jeg kunne likt å gjøre er …', rader: 2 }
    ] },

    { tittel: 'Lagre i porteføljen', blokker: [
      { type: 'tekst', avsnitt: ['Disse svarene lagres når du bruker «Kopier svarene mine». Sjekk at du har fått med dette:'] },
      { type: 'liste', punkter: ['yrket', 'utdanningsveien', 'én overraskelse', 'din egen refleksjon'] },
      { type: 'poeng', tekst: 'Yrkesutforskingen er ikke en fasit på hva du skal velge. Den er et utgangspunkt for å tenke videre.' }
    ] }
  ]
};
