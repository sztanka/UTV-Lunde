window.UTV_OKT = {
  nr: 11, gruppe: 'veivalg', tittel: 'Studiekompetanse og fagbrev',
  ingress: 'Det finnes flere veier gjennom og videre fra videregående opplæring.',
  mal: [
    'forklare med egne ord hva studiekompetanse er',
    'forklare med egne ord hva fagbrev er',
    'vite forskjellen på studieforberedende og yrkesfaglig sluttkompetanse',
    'kjenne til påbygg, fagskole og y-veien',
    'se at både studiekompetanse og fagbrev kan gi mange videre muligheter',
    'bruke informasjon om utdanningsveier til å lage ditt eget «utdanningskart»'],
  steg: [
    { tittel: 'Treets mange grener', blokker: [
      { type: 'snakk', sporsmal: ['Må alle følge den samme grenen?', 'Kan man bytte gren underveis?'] }
    ] },

    { tittel: 'Hva tror du?', blokker: [
      { type: 'instruks', tekst: 'Forklar begrepene uten å slå dem opp. Skriv det du tror, så ser du etterpå om du traff.' },
      { type: 'felt', id: 'sk', label: 'Studiekompetanse betyr …', rader: 2 },
      { type: 'felt', id: 'fb', label: 'Et fagbrev er …', rader: 2 },
      { type: 'felt', id: 'pb', label: 'Påbygg betyr …', rader: 2 },
      { type: 'felt', id: 'fs', label: 'En fagskole er …', rader: 2 }
    ] },

    { tittel: 'To hovedveier', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Studiekompetanse', punkter: ['Gir tilgang til mange studier ved universitet og høyskole', 'Vanlig vei fra studieforberedende', 'Kan føre videre til høyere utdanning', 'Kan kombineres med andre utdanningsveier', 'Ikke «bedre» enn fagbrev'] },
        { tittel: 'Fagbrev', punkter: ['Gir yrkeskompetanse i et bestemt fag', 'Vanlig vei gjennom yrkesfag og opplæring i bedrift', 'Kan føre direkte til arbeid', 'Kan også bygges videre med for eksempel fagskole', 'Ikke «mindre verdifullt» enn studiekompetanse'] }] },
      { type: 'poeng', tekst: 'Studiekompetanse og fagbrev er forskjellige former for kompetanse. Den ene er ikke bedre eller mer verdifull enn den andre. De åpner bare ulike dører.' }
    ] },

    { tittel: 'Hva er studiekompetanse?', blokker: [
      { type: 'tekst', avsnitt: ['Studiekompetanse betyr at du har kompetansen som kreves for å søke mange studier ved universitet og høyskole.'] },
      { type: 'ord', tittel: 'Studiekompetanse kan gi vei til', ord: ['lærerutdanning', 'sykepleierutdanning', 'psykologi', 'økonomi', 'ingeniørutdanning', 'juss', 'mange andre studier'] },
      { type: 'poeng', tekst: 'Obs! Studiekompetanse betyr ikke at du automatisk kommer inn på alle studier. Noen utdanninger har spesielle opptakskrav eller karakterkrav.' }
    ] },

    { tittel: 'Hva er fagbrev?', blokker: [
      { type: 'snakk', intro: 'Hvis du har fagbrev som elektriker, hva tror du det forteller en arbeidsgiver?', sporsmal: ['du har lært et bestemt fag', 'du har både praktisk og teoretisk kompetanse', 'du har gjennomført opplæring og vurdering', 'du kan bruke kompetansen i arbeidslivet'] },
      { type: 'ord', tittel: 'Eksempler på fagbrev', ord: ['Tømrer', 'Elektriker', 'Helsefagarbeider', 'Industrimekaniker', 'Kokk', 'Barne- og ungdomsarbeider', 'Logistikkoperatør'] }
    ] },

    { tittel: 'Hva hvis jeg ombestemmer meg?', blokker: [
      { type: 'avslor', sporsmal: 'Jeg velger yrkesfag. Er løpet kjørt?', svar: ['**Nei!** Etter yrkesfag finnes det muligheter for å ta påbygging til generell studiekompetanse.'] },
      { type: 'flyt', tittel: 'Yrkesfag, fagbrev og arbeid', trinn: ['Yrkesfag', 'Fagbrev', 'Arbeid'] },
      { type: 'flyt', tittel: 'Men også', trinn: ['Yrkesfag', 'Påbygg', 'Studiekompetanse', 'Høyere utdanning'] },
      { type: 'flyt', tittel: 'Og', trinn: ['Yrkesfag', 'Fagbrev', 'Fagskole'] },
      { type: 'tekst', tittel: 'Y-veien', avsnitt: ['For enkelte utdanninger kan relevant fagbrev eller yrkeskompetanse gi en alternativ vei inn i høyere utdanning, for eksempel til enkelte ingeniørutdanninger.', '**Obs!** Dette gjelder ikke de fleste.'] }
    ] },

    { tittel: 'Oppgave: Min veimatrise', tid: 'Ca. 15 min', blokker: [
      { type: 'instruks', avsnitt: ['De fleste veier etter ungdomsskolen fører enten mot studiekompetanse eller fagbrev. Begge kan lede videre til flere muligheter enn du kanskje tror.', 'Steg 1 (5–6 min): jobb alene og fyll ut de to kolonnene. Steg 2: sammenlign og diskuter med en medelev, og fullfør «Veier videre» sammen.'] },
      { type: 'gjenta', id: 'v', titler: ['A: Studiekompetanse', 'B: Fagbrev'], felt: [
        { type: 'liste-felt', id: 'mulig', label: 'Dette kan gi meg mulighet til å', antall: 3, plassholder: 'Mulighet' },
        { type: 'liste-felt', id: 'eks', label: 'Eksempler på utdanninger, studier, yrker eller fag', antall: 3, plassholder: 'Eksempel' },
        { type: 'felt', id: 'person', label: 'Noe som kan passe for en person som …', rader: 2 }] },
      { type: 'tekst', tittel: 'Veier videre', avsnitt: ['Vis hvilke veier kolonne A og B kan lede videre til, som en rekke med piler. Her er noen eksempler som inspirasjon.'] },
      { type: 'flyt', tittel: 'Eksempel', trinn: ['Yrkesfag', 'Fagbrev', 'Arbeid'] },
      { type: 'flyt', tittel: 'Eksempel', trinn: ['Yrkesfag', 'Påbygg', 'Studiekompetanse', 'Høyere utdanning'] },
      { type: 'flyt', tittel: 'Eksempel', trinn: ['Yrkesfag', 'Fagbrev', 'Fagskole'] },
      { type: 'liste-felt', id: 'vei', label: 'Min egen vei videre', hint: 'Skriv ett steg per linje, i rekkefølge. Bruk det du har skrevet i kolonne A eller B.', antall: 5, plassholder: 'Steg' },
      { type: 'snakk', intro: 'Snakk med medeleven din:', sporsmal: ['Er det noen veier dere begge kunne tenke dere?', 'Er det noen som overrasker dere?'] },
      { type: 'tekst', avsnitt: ['Husk: det finnes ikke bare én riktig vei. Mange yrker og studier kan nås på flere måter.'] }
    ] },

    { tittel: 'Hvilken vei passer?', blokker: [
      { type: 'instruks', tekst: 'Snakk med partneren din. Hvilken vei kan være aktuell for hver person?' },
      { type: 'sitat', tekst: '«Emma liker å jobbe med mennesker og ønsker å bli sykepleier.»' },
      { type: 'felt', id: 'emma', label: 'Emma: veien kan være …', rader: 2 },
      { type: 'sitat', tekst: '«Trym liker teknologi, problemløsing og å arbeide praktisk.»' },
      { type: 'felt', id: 'trym', label: 'Trym: veien kan være …', rader: 2 },
      { type: 'sitat', tekst: '«Sarah velger yrkesfag, men bestemmer seg senere for at hun ønsker høyere utdanning.»' },
      { type: 'felt', id: 'sarah', label: 'Sarah: veien kan være …', rader: 2 },
      { type: 'sitat', tekst: '«Ali ønsker et praktisk yrke, men har også lyst til å utdanne seg videre etter fagbrevet.»' },
      { type: 'felt', id: 'ali', label: 'Ali: veien kan være …', rader: 2 }
    ] },

    { tittel: 'Oppsummering', blokker: [
      { type: 'poeng', tekst: 'Ulike veier fører oss til ulike eller det samme målet. Det finnes alltid alternativer, og din vei trenger ikke være lik andres.' }
    ] }
  ]
};
