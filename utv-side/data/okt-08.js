window.UTV_OKT = {
  nr: 8, gruppe: 'veivalg', tittel: 'Videregående: den store oversikten',
  ingress: 'Før du kan ta et godt valg, må du vite hvilke valg du faktisk har.',
  mal: [
    'vite hvor mange utdanningsprogram det er i videregående opplæring',
    'kjenne forskjellen på studieforberedende og yrkesfaglige utdanningsprogram',
    'kunne forklare på et enkelt nivå hva de ulike programmene handler om',
    'kjenne igjen noen utdanningsprogram du ikke kjente fra før',
    'vite hvor du kan finne mer informasjon om programmene'],
  steg: [
    { tittel: 'Hvor mye vet vi allerede?', blokker: [
      { type: 'snakk', intro: 'Tenk først selv, og snakk så med partneren din.', sporsmal: ['Hvor mange utdanningsprogram tror dere det finnes i videregående?', 'Hvor mange av dem klarer dere å nevne?'] },
      { type: 'avslor', sporsmal: 'Vis svaret', svar: ['Det finnes **15** utdanningsprogram.'] }
    ] },

    { tittel: 'Studieforberedende og yrkesfaglig', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Studieforberedende', tekst: 'Hovedmålet er å forberede seg til videre studier, for eksempel på universitet eller høgskole.', punkter: ['Studiespesialisering', 'Idrettsfag', 'Kunst, design og arkitektur', 'Medier og kommunikasjon', 'Musikk, dans og drama (MDD)'] },
        { tittel: 'Yrkesfaglig', tekst: 'Du lærer mye som er knyttet til et yrkesområde. Mange går videre mot læretid og fagbrev eller svennebrev.', punkter: ['Bygg- og anleggsteknikk', 'Elektro og datateknologi', 'Frisør, blomster, interiør og eksponeringsdesign', 'Helse- og oppvekstfag', 'Håndverk, design og produktutvikling', 'Informasjonsteknologi og medieproduksjon', 'Naturbruk', 'Restaurant- og matfag', 'Salg, service og reiseliv', 'Teknologi- og industrifag'] }] }
    ] },

    { tittel: 'Videregående skoler i distriktet', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Primært studieforberedende', punkter: ['Stavanger Katedralskole (Kongsgård)', 'St. Olav', 'St. Svithun', 'Hetland', 'Sandnes'] },
        { tittel: 'Primært yrkesfaglig', punkter: ['Bergeland', 'Godalen', 'SOT (Stavanger Offshore Teknisk)'] },
        { tittel: 'Blanding', punkter: ['Jåttå', 'Randaberg', 'Vågen', 'Sola'] }] }
    ] },

    { tittel: 'Diskuter: hva tror dere dette er?', blokker: [
      { type: 'snakk', intro: 'Snakk i par eller trioer om programmene du har sett.', sporsmal: ['Hva tror dere en lærer om og gjør i de forskjellige utdanningsprogrammene?', 'Kan dere komme på noen yrker som en kan bli i etterkant?'] }
    ] },

    { tittel: 'Oppgave: Min programoversikt', blokker: [
      { type: 'instruks', avsnitt: ['Lag din egen oversikt over alle programmene. Skriv en kort setning med dine egne ord om hva hvert program handler om, og velg din første tanke.', 'Bruk Utdanning.no eller Vilbli.no til å undersøke.'] },
      { type: 'lenke', tekst: 'Utdanning.no', url: 'https://utdanning.no/' },
      { type: 'lenke', tekst: 'Vilbli.no', url: 'https://vilbli.no/' },
      { type: 'gjenta', id: 'p', titler: ['Studiespesialisering', 'Idrettsfag', 'Kunst, design og arkitektur', 'Medier og kommunikasjon', 'Musikk, dans og drama (MDD)', 'Bygg- og anleggsteknikk', 'Elektro og datateknologi', 'Frisør, blomster, interiør og eksponeringsdesign', 'Helse- og oppvekstfag', 'Håndverk, design og produktutvikling', 'Informasjonsteknologi og medieproduksjon', 'Naturbruk', 'Restaurant- og matfag', 'Salg, service og reiseliv', 'Teknologi- og industrifag'], felt: [
        { type: 'felt', id: 'hva', label: 'Hva handler det om?', rader: 2 },
        { type: 'valg', id: 'tanke', maks: 1, label: 'Min første tanke', valg: ['Spennende', 'Vet ikke', 'Ikke for meg'] }] },
      { type: 'tekst', tittel: 'Utforsk enda mer', avsnitt: ['Når du har gått gjennom alle programmene, svarer du på de tre ekstra oppgavene.'] },
      { type: 'liste-felt', id: 'tre', label: 'A. Tre programmer jeg vil vite mer om', antall: 3, plassholder: 'Program' },
      { type: 'felt', id: 'lite-prog', label: 'B. Ett program jeg visste lite om', rader: 1 },
      { type: 'felt', id: 'lite', label: 'Det jeg nå vet om det er …', rader: 3 },
      { type: 'felt', id: 'trodde-prog', label: 'C. Ett program jeg først trodde var noe annet', rader: 1 },
      { type: 'felt', id: 'trodde', label: 'Jeg trodde …', rader: 3 }
    ] },

    { tittel: 'Alle veier er ekte veier', blokker: [
      { type: 'poeng', tekst: 'Studieforberedende er ikke bedre. Yrkesfag er ikke dårligere.' },
      { type: 'avslor', sporsmal: 'Hvorfor kan vi ikke si at den ene typen videregående er bedre enn den andre?', svar: ['Det som er riktig for én person, trenger ikke være riktig for en annen.'] },
      { type: 'flyt', tittel: 'Spørsmål å ta med seg', trinn: ['Hva liker jeg?', 'Hva er jeg god på?', 'Hva er viktig for meg?', 'Hvilke arbeidsoppgaver liker jeg?', 'Hvilket arbeidsmiljø passer meg?'] },
      { type: 'tekst', avsnitt: ['Et utdanningsprogram er ikke en karakter på hvor flink du er. Det er en mulig vei mot videre utdanning og arbeidsliv.'] }
    ] },

    { tittel: 'Refleksjon', blokker: [
      { type: 'instruks', tekst: 'Tenk først selv, og snakk så med partneren din.' },
      { type: 'felt', id: 'r1', label: 'Hva overrasket deg mest i dag?', rader: 2 },
      { type: 'felt', id: 'r2', label: 'Var det et program du aldri hadde tenkt på før?', rader: 2 },
      { type: 'felt', id: 'r3', label: 'Var det et program som virket annerledes enn du trodde?', rader: 2 },
      { type: 'felt', id: 'r4', label: 'Hvorfor tror du det er nyttig å kjenne til mange alternativer før du skal velge?', rader: 3 }
    ] }
  ]
};
