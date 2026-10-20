window.UTV_OKT = {
  nr: 10, gruppe: 'veivalg', tittel: 'Yrkesfag',
  ingress: 'Praktiske veier til kompetanse og arbeid. Yrkesfag kan være en vei til fagbrev, arbeid, videre utdanning og egen virksomhet.',
  mal: [
    'forklare med egne ord hva yrkesfag er',
    'forklare hva et fagbrev er',
    'kjenne til forskjellen på skole og opplæring i bedrift',
    'kjenne til at yrkesfag kan gi mulighet for videre utdanning',
    'undersøke et yrkesfaglig program og et konkret yrke',
    'kjenne igjen og utfordre noen vanlige fordommer om yrkesfag',
    'reflektere over om praktisk arbeid kan passe egne interesser og styrker'],
  steg: [
    { tittel: 'Myte eller fakta?', blokker: [
      { type: 'instruks', avsnitt: ['Du skal ta stilling til noen påstander om yrkesfag. Svar det du faktisk mener, ikke det du tror læreren vil høre.', 'Sant: rekk opp hånden. Usant: hold hendene på pulten.'] },
      { type: 'liste', nummerert: true, punkter: [
        '«Yrkesfag er for elever som ikke er flinke nok til studiespesialisering.»',
        '«På yrkesfag lærer man bare praktiske ting.»',
        '«Yrkesfag kan føre til fagbrev.»',
        '«Hvis du velger yrkesfag, kan du aldri studere på universitet eller høyskole.»',
        '«Mange yrkesfaglige utdanninger kan føre til arbeid i bedrift.»'] }
    ] },

    { tittel: 'Hva er egentlig yrkesfag?', blokker: [
      { type: 'ord', tittel: 'Ti ulike utdanningsprogram', ord: ['Bygg- og anleggsteknikk', 'Elektro og datateknologi', 'Håndverk, design og produktutvikling', 'Frisør, blomster, interiør og eksponeringsdesign', 'Informasjonsteknologi og medieproduksjon', 'Helse- og oppvekstfag', 'Naturbruk', 'Restaurant- og matfag', 'Salg, service og reiseliv', 'Teknologi- og industrifag'] },
      { type: 'flyt', tittel: 'Eksempel: elektriker', trinn: ['Elektro og datateknologi (Vg1, 1 år)', 'Elenergi og ekom (Vg2, 1 år)', 'Opplæring og praksis (2 år)', 'Fagbrev (avsluttende prøve og attest)', 'Arbeid som elektriker'] }
    ] },

    { tittel: 'Hva er et fagbrev?', blokker: [
      { type: 'snakk', intro: 'Hva tror dere en arbeidsgiver vil vite når de ansetter en fagarbeider?', sporsmal: ['Kan personen faget?', 'Kan personen arbeide selvstendig?', 'Kan personen følge regler og HMS?', 'Kan personen samarbeide?', 'Kan personen løse problemer?', 'Kan personen bruke utstyr og verktøy riktig?'] },
      { type: 'poeng', tekst: 'Et fagbrev er dokumentasjon på at du har oppnådd yrkeskompetanse i et bestemt fag.' }
    ] },

    { tittel: 'Fra skole til arbeidsliv', blokker: [
      { type: 'flyt', trinn: ['Vg1', 'Vg2', 'Lærling', 'Fagbrev'] },
      { type: 'snakk', sporsmal: ['Hva tror dere er forskjellen på å lære et yrke på en skole og å lære det i en bedrift?'] },
      { type: 'kort', kort: [
        { tittel: 'På skole', punkter: ['lærer', 'verksted eller lab', 'undervisning', 'øving'] },
        { tittel: 'I bedrift', punkter: ['ekte arbeidsoppgaver', 'kunder eller brukere', 'kolleger', 'ansvar', 'produksjon eller tjenester'] }] }
    ] },

    { tittel: 'Oppgave: Finn et yrkesfag som passer', tid: 'Ca. 20 min', blokker: [
      { type: 'instruks', avsnitt: ['Du jobber deg gjennom tre deler: en interessetest, ett program testen peker mot, og ett konkret yrke som hører til programmet.', 'Svar oppriktig på testen. Fyll ut underveis, og del funnene dine med en partner etterpå.'] },
      { type: 'tekst', tittel: 'Del 1: Interessevelgeren', avsnitt: ['Gjennomfør testen. Den tar noen minutter og gir deg en oversikt over hvilke yrkesfaglige retninger som kan passe for deg.'] },
      { type: 'lenke', tekst: 'Vilbli interessevelger', url: 'https://interessetest.vilbli.no/' },
      { type: 'liste-felt', id: 'resultat', label: 'Mitt resultat peker mot', antall: 3, plassholder: 'Retning eller program' },
      { type: 'felt', id: 'overr', label: 'Hva overrasket meg?', rader: 2 },
      { type: 'tekst', tittel: 'Del 2: Velg ett program', avsnitt: ['Velg ett av de yrkesfaglige programmene fra resultatet ditt.'] },
      { type: 'felt', id: 'program', label: 'Program', rader: 1 },
      { type: 'felt', id: 'lerer', label: 'Hva lærer man om?', rader: 2 },
      { type: 'felt', id: 'praktisk', label: 'Hva slags praktisk arbeid kan inngå?', rader: 2 },
      { type: 'felt', id: 'trives', label: 'Hva slags mennesker tror du kan trives her?', rader: 2 },
      { type: 'tekst', tittel: 'Del 3: Finn ett yrke', avsnitt: ['Finn et yrke som hører til, eller kan knyttes til, programmet du valgte.'] },
      { type: 'lenke', tekst: 'Yrkesfaghåndboka på Utdanning.no', url: 'https://utdanning.no/yrkesfag' },
      { type: 'felt', id: 'yrke', label: 'Yrke', rader: 1 },
      { type: 'felt', id: 'gjor', label: 'Hva gjør man i dette yrket?', rader: 2 },
      { type: 'felt', id: 'hvor', label: 'Hvor kan man jobbe?', rader: 2 },
      { type: 'felt', id: 'god', label: 'Hva må man være god på?', rader: 2 },
      { type: 'felt', id: 'int', label: 'Hva synes jeg virker interessant?', rader: 2 }
    ] },

    { tittel: 'Mine tre setninger', tid: 'Ca. 5 min', blokker: [
      { type: 'instruks', tekst: 'Fyll ut de tre setningene ut fra det du fant ut. Les dem deretter høyt for en medelev, og lytt til det medeleven din har funnet ut. Har dere funnet noe felles, eller helt ulike ting?' },
      { type: 'felt', id: 's1', label: 'Jeg undersøkte …', rader: 2 },
      { type: 'felt', id: 's2', label: 'Jeg fant ut at …', rader: 2 },
      { type: 'felt', id: 's3', label: 'Det jeg synes er mest interessant eller overraskende, er …', rader: 2 }
    ] },

    { tittel: 'Hva tenker jeg nå?', blokker: [
      { type: 'tekst', avsnitt: ['Da vi startet timen, hadde du kanskje noen tanker om yrkesfag. Har noen av dem endret seg?'] },
      { type: 'felt', id: 'h1', label: 'Før timen tenkte jeg …', rader: 2 },
      { type: 'felt', id: 'h2', label: 'Nå tenker jeg …', rader: 2 },
      { type: 'felt', id: 'h3', label: 'En fordom eller myte jeg har hørt om yrkesfag er …', rader: 2 },
      { type: 'felt', id: 'h4', label: 'Jeg tror yrkesfag kan passe for en person som …', rader: 2 },
      { type: 'felt', id: 'h5', label: 'Jeg kunne vært nysgjerrig på yrkesfag fordi … (eller: Jeg tror ikke yrkesfag nødvendigvis passer for meg fordi …)', rader: 3 }
    ] }
  ]
};
