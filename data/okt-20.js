window.UTV_OKT = {
  nr: 20, gruppe: 'fagfelt', tittel: 'Kreative fag, medier og kunst/design',
  ingress: 'Kan kreativitet være en jobb? Du skal lage noe selv først, og deretter undersøke yrkene bak.',
  mal: ['Oppdage bredden i kreative yrker', 'Undersøke hva kreative yrker faktisk lager', 'Forstå at kreativitet kan kombineres med teknologi, kommunikasjon, business og problemløsning', 'Presentere et yrke kort og overbevisende'],
  steg: [
    { tittel: 'Startoppdrag: Hvem har bestemt dette?', tid: '7 min', blokker: [
      { type: 'instruks', avsnitt: ['Tenk på fem helt vanlige ting. Hvem har bestemt hvordan de skulle se ut? Skriv så mange yrker du kommer på for hver ting.'] },
      { type: 'ord', tittel: 'Fem ting', ord: ['en joggesko', 'en app', 'en brusflaske', 'et dataspill', 'en konsertplakat'] },
      { type: 'flyt', tittel: 'Eksempel: joggesko', trinn: ['designer', 'materialutvikler', 'fotograf', 'markedsfører', 'produktutvikler', 'selger'] },
      { type: 'flyt', tittel: 'Eksempel: app', trinn: ['UX-designer', 'grafisk designer', 'utvikler', 'innholdsprodusent', 'prosjektleder'] },
      { type: 'felt', id: 'ting1', label: 'Yrker bak en joggesko', rader: 2 },
      { type: 'felt', id: 'ting2', label: 'Yrker bak en app', rader: 2 },
      { type: 'felt', id: 'ting3', label: 'Yrker bak en brusflaske', rader: 2 },
      { type: 'felt', id: 'ting4', label: 'Yrker bak et dataspill', rader: 2 },
      { type: 'felt', id: 'ting5', label: 'Yrker bak en konsertplakat', rader: 2 },
      { type: 'felt', id: 'kreativt', label: 'Hvilke av yrkene ville du kalt kreative? Hvorfor?', rader: 2 }
    ] },

    { tittel: 'Lær noe nytt: Kreativitet har mange adresser', tid: '6 min', blokker: [
      { type: 'tekst', avsnitt: ['**Kreativitet er ikke bare kunst.** Det kan være å lage, forme, fortelle, programmere, designe, løse problemer, kommunisere og utvikle ideer.'] },
      { type: 'kort', kort: [
        { tittel: '🎭 Scene', punkter: ['musiker', 'skuespiller', 'scenekunst'] },
        { tittel: '🎨 Design', punkter: ['grafisk designer', 'interiørdesigner', 'motedesigner'] },
        { tittel: '🎬 Medier', punkter: ['videoprodusent', 'animatør', 'innholdsprodusent'] },
        { tittel: '💻 Teknologi', punkter: ['spillutvikler', 'UX/UI', 'digital design'] }
      ] },
      { type: 'poeng', tekst: 'Kreative yrker kan ha svært ulike utdanningsveier. Et yrke kan også passe til flere interesseområder.' },
      { type: 'lenke', tekst: 'Interessevelgeren på Utdanning.no', url: 'https://utdanning.no/', merknad: 'Åpnes i ny fane' }
    ] },

    { tittel: 'Utforsk: Lag noe som ikke finnes', tid: '10 min', blokker: [
      { type: 'instruks', tid: '5 min', avsnitt: ['Jobb i grupper på 2–3. Dere skal lage et produkt som løser et problem for ungdom. Dere har 5 minutter.'] },
      { type: 'ord', tittel: 'Idéer til å komme i gang', ord: ['en skolebag som gjør skoledagen enklere', 'en app som hjelper elever å organisere fritid', 'et nytt spill', 'et rom på skolen', 'en konsert', 'et klesplagg', 'en kampanje'] },
      { type: 'felt', id: 'p-hva', label: 'Hva er det?', rader: 2 },
      { type: 'felt', id: 'p-hvem', label: 'Hvem er det for?', rader: 1 },
      { type: 'felt', id: 'p-hvorfor', label: 'Hvorfor trengs det?', rader: 2 },
      { type: 'felt', id: 'p-ser', label: 'Hvordan ser det ut?', rader: 2 },
      { type: 'felt', id: 'p-yrker', label: 'Hvilke yrker måtte samarbeide for å få dette fra idé til virkelighet?', rader: 3 }
    ] },

    { tittel: 'Hovedoppgave: 60 sekunder, overbevis meg', tid: '15 min', blokker: [
      { type: 'instruks', avsnitt: ['Velg ett kreativt yrke og undersøk det. Lag en pitch på 60 sekunder som du kan holde for en annen.'] },
      { type: 'valg', id: 'yrke', label: 'Mitt kreative yrke', maks: 1, valg: ['Grafisk designer', 'Regissør', 'Musiker', 'Skuespiller', 'Animatør', 'Motedesigner', 'Spillutvikler', 'Interiørdesigner', 'Fotograf', 'Innholdsprodusent'] },
      { type: 'lenke', tekst: 'Søk opp yrket på Utdanning.no', url: 'https://utdanning.no/', merknad: 'Åpnes i ny fane' },
      { type: 'felt', id: 'k-yrke', label: '1. Yrket: «Jeg har undersøkt …»', rader: 1 },
      { type: 'felt', id: 'k-gjor', label: '2. Hva lager eller gjør de?', rader: 2 },
      { type: 'felt', id: 'k-trenger', label: '3. Hvem trenger det?', rader: 2 },
      { type: 'felt', id: 'k-verdi', label: '4. Hvilket problem løser de, eller hvilken verdi skaper de?', rader: 2 },
      { type: 'felt', id: 'k-god', label: '5. Hva trenger man å være god på?', rader: 2 },
      { type: 'felt', id: 'k-overraskelse', label: '6. Én overraskende ting', rader: 2 },
      { type: 'felt', id: 'k-bonus', label: 'Bonus: «Dette yrket kunne passet for en person som …»', hint: 'Ikke «passer for meg». Målet er først å forstå yrket.', rader: 2 }
    ] },

    { tittel: 'Test deg selv: Kreativitetsbingo', tid: '4 min', blokker: [
      { type: 'instruks', avsnitt: ['Kryss av for minst fire av rutene.'] },
      { type: 'valg', id: 'bingo', label: 'Dette fant jeg', valg: ['Jeg fant et yrke jeg ikke kjente.', 'Jeg fant et kreativt yrke som bruker teknologi.', 'Jeg fant et yrke som jobber med mennesker.', 'Jeg fant et yrke som lager noe fysisk.', 'Jeg fant et yrke som lager noe digitalt.', 'Jeg fant et yrke jeg kunne tenke meg å undersøke mer.'] }
    ] },

    { tittel: 'Reflekter: Exit-ticket', tid: '3 min', blokker: [
      { type: 'felt', id: 'exit1', label: 'Kreativitet som arbeid betyr ikke bare å være kunstner. For meg betyr kreativitet i arbeidslivet …', rader: 3 },
      { type: 'felt', id: 'exit2', label: 'Et kreativt yrke jeg vil vite mer om er … fordi …', rader: 3 }
    ] },

    { tittel: 'Lagre i porteføljen: Mitt kreative yrke', blokker: [
      { type: 'felt', id: 'pf-yrke', label: 'Yrke', rader: 1 },
      { type: 'felt', id: 'pf-gjor', label: 'Hva lager eller gjør de?', rader: 2 },
      { type: 'felt', id: 'pf-bruker', label: 'Hvem bruker det?', rader: 1 },
      { type: 'felt', id: 'pf-ferdighet', label: 'Viktigste ferdighet', rader: 1 },
      { type: 'felt', id: 'pf-overraskelse', label: 'Overraskelse', rader: 2 },
      { type: 'felt', id: 'pf-nysgjerrig', label: 'Min nysgjerrighet', rader: 2 }
    ] }
  ]
};
