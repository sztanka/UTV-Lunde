window.UTV_OKT = {
  nr: 4, gruppe: 'meg', tittel: 'Hva er viktig for meg?',
  ingress: 'Verdier: hva ønsker du at livet og arbeidslivet ditt skal inneholde?',
  mal: [
    'forklare med egne ord hva en verdi er',
    'kjenne igjen noen verdier som er viktige for deg selv',
    'forstå at mennesker kan ha ulike prioriteringer',
    'se sammenheng mellom verdier, trivsel og valg av utdanning eller yrke',
    'bruke egne verdier som ett av flere utgangspunkt når du utforsker framtidige muligheter'],
  steg: [
    { tittel: 'Hva ville du valgt?', blokker: [
      { type: 'instruks', tekst: 'Du får tre dilemmaer, og i hvert av dem to jobber. Hva er viktig for deg? Velg den jobben du helst ville hatt, og skriv hvorfor.' },
      { type: 'kort', kort: [
        { tittel: 'Dilemma 1, jobb A', punkter: ['høy lønn', 'mye ansvar', 'lite fritid', 'du må ofte jobbe overtid'] },
        { tittel: 'Dilemma 1, jobb B', punkter: ['middels lønn', 'mye fritid', 'mindre ansvar', 'du liker arbeidsoppgavene godt'] }] },
      { type: 'felt', id: 'd1', label: 'Dilemma 1: Jeg ville valgt … fordi …', rader: 2 },
      { type: 'kort', kort: [
        { tittel: 'Dilemma 2, jobb A', punkter: ['du jobber mest alene', 'mye frihet', 'du bestemmer selv hvordan du løser oppgavene'] },
        { tittel: 'Dilemma 2, jobb B', punkter: ['du jobber tett sammen med andre', 'tydelige oppgaver', 'mye samarbeid'] }] },
      { type: 'felt', id: 'd2', label: 'Dilemma 2: Jeg ville valgt … fordi …', rader: 2 },
      { type: 'kort', kort: [
        { tittel: 'Dilemma 3, jobb A', punkter: ['du hjelper mennesker hver dag', 'lønnen er ganske vanlig'] },
        { tittel: 'Dilemma 3, jobb B', punkter: ['du jobber med noe du synes er interessant', 'svært god lønn', 'du opplever arbeidet som lite meningsfylt'] }] },
      { type: 'felt', id: 'd3', label: 'Dilemma 3: Jeg ville valgt … fordi …', rader: 2 },
      { type: 'poeng', tekst: 'Det er menneskelig at vi velger forskjellig. Det betyr ikke at noen velger riktig og andre feil. Det betyr at vi legger vekt på forskjellige ting. Dette handler om verdier.' }
    ] },

    { tittel: 'Hva er en verdi?', blokker: [
      { type: 'poeng', tekst: 'En verdi er noe du synes er viktig, og som påvirker hvordan du ønsker å leve og ha det.' },
      { type: 'kort', kort: [
        { tittel: 'Frihet', tekst: 'Jeg ønsker å kunne bestemme selv.' },
        { tittel: 'Trygghet', tekst: 'Jeg vil vite hva jeg har å forholde meg til.' },
        { tittel: 'Fellesskap', tekst: 'Jeg trenger å høre til og gjøre ting sammen med andre.' },
        { tittel: 'Mestring', tekst: 'Det er viktig for meg å føle at jeg får til ting.' },
        { tittel: 'Kreativitet', tekst: 'Jeg ønsker mulighet til å skape og komme med egne ideer.' },
        { tittel: 'Hjelpe andre', tekst: 'Det betyr noe for meg å gjøre en forskjell for andre.' }] },
      { type: 'kort', kort: [
        { tittel: 'Interesser', tekst: 'Hva liker jeg?', punkter: ['Eksempel: «Jeg liker teknologi.»'] },
        { tittel: 'Styrker', tekst: 'Hva er jeg god på?', punkter: ['Eksempel: «Jeg er flink til å løse problemer.»'] },
        { tittel: 'Verdier', tekst: 'Hva er viktig for meg?', punkter: ['Eksempel: «Jeg vil ha frihet til å bestemme hvordan jeg jobber.»'] }] }
    ] },

    { tittel: 'Verdisortering', blokker: [
      { type: 'instruks', avsnitt: ['Sorter hver verdi i én av de tre gruppene. Jobb først alene.', 'Har du mer enn fem verdier på «Veldig viktig»? Flytt noen til du bare har fem.'] },
      { type: 'sorter', id: 'verdier', label: 'Hvor viktig er hver verdi for meg?', kategorier: ['Veldig viktig', 'Ganske viktig', 'Mindre viktig'],
        teller: { kategori: 'Veldig viktig', maks: 5 },
        elementer: ['Trygghet', 'Frihet', 'Familie', 'Vennskap', 'Fellesskap', 'Å hjelpe andre', 'Mestring', 'Utvikling', 'Læring', 'Kreativitet', 'Variasjon', 'Spenning', 'Stabilitet', 'God lønn', 'Økonomisk trygghet', 'Status', 'Ansvar', 'Selvstendighet', 'Natur', 'Fritid', 'Tid', 'Rettferdighet', 'Respekt', 'Å gjøre en forskjell'] },
      { type: 'snakk', tittel: 'Hva ble resultatet?', sporsmal: ['Hvis du nå måtte tatt vekk én til, hvilke verdier sitter du igjen med da?'] }
    ] },

    { tittel: 'Hva betyr verdien egentlig?', blokker: [
      { type: 'instruks', tekst: 'Velg én av de fem verdiene dine. Hva betyr den egentlig for deg?' },
      { type: 'kort', kort: [{ tittel: 'Eksempel: frihet', tekst: 'Det kan bety:', punkter: ['å bestemme arbeidstid', 'å kunne jobbe selvstendig', 'å kunne reise', 'å kunne velge arbeidsoppgaver', 'å slippe å bli kontrollert', 'å kunne starte egen bedrift'] }] },
      { type: 'felt', id: 'min-verdi', label: 'Min viktigste verdi', rader: 1 },
      { type: 'felt', id: 'betyr', label: 'Hva betyr den for meg?', rader: 3 },
      { type: 'snakk', intro: 'Snakk to og to:', sporsmal: ['«Hva betyr din viktigste verdi for deg?»'] },
      { type: 'poeng', tekst: 'Den samme verdien kan bety forskjellige ting for forskjellige mennesker.' }
    ] },

    { tittel: 'Mine fem viktigste verdier', blokker: [
      { type: 'instruks', tekst: 'Ta dine topp fem verdier. Forklar hva de betyr for deg, og hvordan du tror de kan være viktige i arbeidslivet.' },
      { type: 'gjenta', id: 'v', tittel: 'Verdi', antall: 5, felt: [
        { type: 'felt', id: 'navn', label: 'Min verdi', tittel: true, rader: 1 },
        { type: 'felt', id: 'betyr', label: 'Hva betyr den for meg?', rader: 2 },
        { type: 'felt', id: 'jobb', label: 'Hvordan kan den være viktig i en jobb?', rader: 2 }] }
    ] },

    { tittel: 'Hvilken jobb passer best?', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Jobb A: Hjelpe mennesker', punkter: ['mye kontakt med mennesker', 'meningsfullt arbeid', 'ganske forutsigbar arbeidstid', 'middels lønn'] },
        { tittel: 'Jobb B: Teknologi', punkter: ['spennende problemløsing', 'høy lønn', 'mye selvstendig arbeid', 'lite kontakt med mennesker'] },
        { tittel: 'Jobb C: Kreativt arbeid', punkter: ['stor frihet', 'kreative oppgaver', 'varierende inntekt', 'mye prosjektarbeid'] }] },
      { type: 'felt', id: 'jobbvalg', label: 'Hvilken jobb passer best med dine fem verdier, og hvorfor?', rader: 3 },
      { type: 'tekst', avsnitt: ['Husk: dette betyr ikke at du skal velge en slik jobb. Vi trener bare på å bruke verdiene våre når vi vurderer alternativer.'] }
    ] },

    { tittel: 'Kan verdier kollidere?', blokker: [
      { type: 'ord', tittel: 'Eksempler', ord: ['God lønn eller mye fritid', 'Trygghet eller frihet', 'Spennende arbeid eller forutsigbarhet', 'Bo nær familien eller drømmejobben langt unna'] },
      { type: 'snakk', sporsmal: ['Kan begge være viktige?', 'Må man alltid velge?', 'Kan prioriteringene endre seg gjennom livet?', 'Hva kan være viktig når man er 16? Hva kan være viktig når man er 35?', 'Hva hvis du må velge mellom to ting som begge er viktige?'] },
      { type: 'felt', id: 'kollisjon', label: 'Hvilke to av verdiene mine kan komme i konflikt?', hint: 'Valgfritt.', rader: 2 }
    ] },

    { tittel: 'Verdier og utdanningsvalg', blokker: [
      { type: 'tekst', avsnitt: ['Når vi senere skal undersøke utdanningsprogram og yrker, kan du bruke verdiene dine som et filter.'] },
      { type: 'flyt', trinn: ['Hva liker jeg?', 'Hva er jeg god på?', 'Hva er viktig for meg?', 'Hva kan passe?', 'Hva bør jeg undersøke?'] }
    ] }
  ]
};
