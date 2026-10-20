window.UTV_OKT = {
  nr: 3, gruppe: 'meg', tittel: 'Hva er jeg god på?',
  ingress: 'Du er mer enn karakterene dine. I denne økten finner du ut hva du mestrer og hva du kan bidra med.',
  steg: [
    { tittel: 'Start her', blokker: [
      { type: 'tekst', avsnitt: [
        'En styrke kan være noe du får til, noe andre setter pris på hos deg, eller noe du liker å bruke tid på.',
        'Målet er ikke å finne ut hva du er «best» i, men å oppdage **hva du mestrer og hva du kan bidra med.**'] }
    ] },

    { tittel: 'Styrkeduellen', blokker: [
      { type: 'instruks', avsnitt: ['Finn en partner. Partneren din fullfører setningen:', '**«Jeg synes du er god på … fordi …»**'] },
      { type: 'liste', tittel: 'Eksempler', punkter: [
        '«Jeg synes du er god på å forklare ting fordi du gjør det lett å forstå.»',
        '«Jeg synes du er god på å få andre med fordi du alltid inkluderer folk.»',
        '«Jeg synes du er god på å finne løsninger når noe ikke fungerer.»',
        '«Jeg synes du er god på å holde hodet kaldt når det skjer mye.»'] },
      { type: 'ord', tittel: 'Det kan være noe fra', ord: ['skolen', 'fritiden', 'idrett', 'gaming', 'venner', 'familie', 'praktiske ting', 'måten du er sammen med andre på'] },
      { type: 'poeng', tekst: 'Ikke avvis komplimentet. Du skal bare si takk.' },
      { type: 'felt', id: 'duell', label: 'Dette sa partneren min om meg', hint: 'Valgfritt. Skriv det du husker.', rader: 3 }
    ] },

    { tittel: 'Hva er egentlig en styrke?', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Ferdighet', tekst: 'Noe du kan gjøre.', punkter: ['bruke regneark', 'skrive en tekst', 'regne', 'lage mat', 'spille fotball', 'bruke verktøy', 'snakke engelsk'] },
        { tittel: 'Styrke', tekst: 'Noe du ofte får til eller bidrar med på en god måte.', punkter: ['tålmodig', 'kreativ', 'nøyaktig', 'omsorgsfull', 'løsningsorientert', 'flink til å samarbeide'] },
        { tittel: 'Interesse', tekst: 'Noe du liker å bruke tid på eller lære mer om.', punkter: ['teknologi', 'dyr', 'mennesker', 'musikk', 'sport', 'biler'] }
      ] },
      { type: 'poeng', tekst: 'Interesse + styrke + ferdighet kan bli interessant når vi skal utforske utdanning og yrker.' },
      { type: 'flyt', tittel: 'Eksempel', trinn: ['Liker teknologi', 'God til å løse problemer', 'Liker å jobbe praktisk', 'Kan være interessant å utforske tekniske og yrkesfaglige utdanninger'] },
      { type: 'tekst', avsnitt: ['Husk: dette betyr ikke at du kun «passer til» ett bestemt yrke. Det er bare et utgangspunkt for videre utforsking.'] }
    ] },

    { tittel: 'En styrke er ikke nødvendigvis noe du er best i', blokker: [
      { type: 'sitat', tekst: '«Jeg er ikke flink i matte, så jeg har ingen faglige styrker.»' },
      { type: 'liste', tittel: 'Men kanskje er du:', punkter: ['flink til å forklare', 'flink til å se mønstre', 'flink til å samarbeide', 'flink til å holde ut når noe er vanskelig'] },
      { type: 'tekst', avsnitt: ['Styrker er bredere enn karakterer.'] },
      { type: 'snakk', intro: 'Diskuter med sidemannen:', sporsmal: ['Kan man være god på noe uten å få 6 i det?'] }
    ] },

    { tittel: 'Styrkebanken', blokker: [
      { type: 'instruks', tekst: 'Trykk på de styrkene du kjenner deg igjen i. Du kan velge så mange du vil. Valgene dine blir lagret.' },
      { type: 'valg', id: 'bank', label: 'Mine styrker', grupper: [
        { tittel: 'Analytiske styrker', valg: ['problemløser', 'nysgjerrig', 'logisk', 'undersøker', 'ser sammenhenger', 'lærer raskt', 'god hukommelse', 'kritisk tenkende'] },
        { tittel: 'Sosiale styrker', valg: ['god lytter', 'inkluderende', 'omsorgsfull', 'samarbeidsvillig', 'flink til å forklare', 'tålmodig', 'empatisk', 'god til å motivere andre'] },
        { tittel: 'Kreative styrker', valg: ['idérik', 'kreativ', 'fantasifull', 'god på design', 'liker å skape', 'ser nye løsninger', 'uttrykksfull'] },
        { tittel: 'Praktiske styrker', valg: ['flink med hendene', 'løsningsorientert', 'teknisk', 'nøyaktig', 'liker å reparere', 'flink til å bygge', 'lærer gjennom å gjøre'] },
        { tittel: 'Personlige og fysiske styrker', valg: ['utholdende', 'energisk', 'disiplinert', 'modig', 'selvstendig', 'konsentrert', 'strukturert', 'ansvarsfull'] },
        { tittel: 'Organisatoriske styrker', valg: ['planlegger', 'holder orden', 'møter opp', 'tar ansvar', 'holder frister', 'har oversikt', 'systematisk'] }
      ] }
    ] },

    { tittel: 'Lag ditt styrkekart', blokker: [
      { type: 'instruks', tekst: 'Fyll ut under. Da får du et styrkekart med deg selv i midten.' },
      { type: 'liste-felt', id: 'faglig', label: 'Mine faglige ferdigheter', hint: 'Tre ting du får til eller mestrer på skolen.', antall: 3, plassholder: 'For eksempel: forklare, regne, skrive' },
      { type: 'liste-felt', id: 'personlig', label: 'Mine personlige styrker', hint: 'Tre egenskaper andre kanskje setter pris på hos deg.', antall: 3, plassholder: 'For eksempel: tålmodig, rolig, pålitelig' },
      { type: 'liste-felt', id: 'praktisk', label: 'Mine praktiske og sosiale ferdigheter', hint: 'Tre ting du kan gjøre eller bidra med.', antall: 3, plassholder: 'For eksempel: lage mat, hjelpe andre, ordne' },
      { type: 'felt', id: 'bedre', label: 'Én ting jeg vil bli bedre på', hint: 'Bare én.', rader: 1 }
    ] },

    { tittel: 'Koble styrker til arbeidslivet', blokker: [
      { type: 'tekst', avsnitt: ['Spørsmålet er: **Hvor kan denne styrken være nyttig?**', 'Eksempel: **God til å lytte** kan være nyttig i:'] },
      { type: 'ord', ord: ['helse', 'skole', 'barnehage', 'kundeservice', 'rådgivning', 'politi', 'mange andre yrker'] },
      { type: 'poeng', tekst: 'Én styrke kan brukes i mange forskjellige yrker.' }
    ] },

    { tittel: 'Avslutning: Styrken jeg tar med meg', tid: 'Ca. 5 min', blokker: [
      { type: 'instruks', tekst: 'Fullfør de tre setningene, og skriv hva du vil undersøke videre.' },
      { type: 'felt', id: 'a1', label: 'En styrke jeg har er', rader: 2 },
      { type: 'felt', id: 'a2', label: 'Jeg vet det fordi', rader: 2 },
      { type: 'felt', id: 'a3', label: 'En utdanning eller et yrke hvor denne styrken kanskje kan være nyttig, er', rader: 2 },
      { type: 'felt', id: 'a4', label: 'Dette vil jeg undersøke mer', rader: 2 }
    ] }
  ]
};
