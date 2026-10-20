window.UTV_OKT = {
  nr: 16, gruppe: 'fagfelt', tittel: 'Midtårsevaluering',
  ingress: 'Dette er ikke en prøve. Det er en pause i utforskingen, der du ser tilbake på det du har lært så langt og fremover mot resten av året. Det er ingen fasit, og det er helt greit å fortsatt være usikker på mye.',
  steg: [
    { tittel: 'Dette skal du gjøre', blokker: [
      { type: 'liste', punkter: ['se tilbake på de første 15 øktene', 'kjenne etter hva du har lært om deg selv og om utdanningsvalg', 'sette et personlig mål for resten av året'] },
      { type: 'tekst', avsnitt: ['Ha portfolioen din (digital eller fysisk) klar før du starter.'] }
    ] },

    { tittel: 'To stjerner og ett ønske', tid: '8 min', blokker: [
      { type: 'instruks', tekst: 'Tenk tilbake på alt du har gjort i Utdanningsvalg så langt i år, og skriv.' },
      { type: 'felt', id: 's1', label: 'Stjerne 1: noe jeg er fornøyd med fra første halvår', rader: 2 },
      { type: 'felt', id: 's2', label: 'Stjerne 2: noe mer jeg er fornøyd med', rader: 2 },
      { type: 'felt', id: 'o1', label: 'Ett ønske: noe jeg har lyst til å utforske mer', rader: 2 }
    ] },

    { tittel: 'Dette kommer i andre halvår', tid: '7 min', blokker: [
      { type: 'tekst', avsnitt: ['Læreren presenterer hva som kommer. Du trenger ikke fylle ut noe, men skriv gjerne stikkord om noe du blir nysgjerrig på.'] },
      { type: 'liste', punkter: ['Flere fagfelt å utforske, etter samme modell som økt 13–15', 'Mer yrkesforskning og konkret research på egen hånd', 'Mer selvrefleksjon: interesser, verdier og styrker', 'Arbeid mot en tydeligere egen profil mot slutten av året'] },
      { type: 'poeng', tekst: 'Ingen forventer at du har funnet svaret ennå. Målet med resten av året er nettopp å utforske videre.' },
      { type: 'felt', id: 'stikkord', label: 'Stikkord: noe jeg ble nysgjerrig på', hint: 'Valgfritt.', rader: 3 }
    ] },

    { tittel: 'Portfoliogjennomgang', tid: '20 min', blokker: [
      { type: 'instruks', tekst: 'Bla gjennom portfolioen din fra hele høsten (yrkeskort, refleksjoner og oppgaver) og velg ut tre ting.' },
      { type: 'felt', id: 'p1', label: '1. Det jeg er mest stolt av fra portfolioen', hint: 'Hvorfor akkurat dette? Hva sier det om deg at du er stolt av det?', rader: 3 },
      { type: 'felt', id: 'p2', label: '2. Det jeg synes er mest interessant', hint: 'Et yrke, et fagfelt eller noe du oppdaget om deg selv underveis.', rader: 3 },
      { type: 'felt', id: 'p3', label: '3. Noe jeg vil jobbe mer med', hint: 'Noe uavklart, noe du vil undersøke mer, eller en ferdighet du vil utvikle.', rader: 3 },
      { type: 'tekst', tittel: 'Min midtårsrefleksjon', avsnitt: ['Skriv en kort tekst på 10–15 setninger om hva du har lært så langt i år. Bruk gjerne de tre valgene over som utgangspunkt.'] },
      { type: 'ord', tittel: 'Du kan starte med en av disse setningene, eller skrive fritt', ord: ['Noe jeg har lært om meg selv i år er …', 'Det som har overrasket meg mest så langt er …', 'Når jeg tenker på utdanningsvalg nå, kjenner jeg …'] },
      { type: 'felt', id: 'refl', label: 'Min midtårsrefleksjon', hint: '10–15 setninger.', rader: 12 }
    ] },

    { tittel: 'Refleksjonsspørsmål', tid: '5 min', blokker: [
      { type: 'felt', id: 'r1', label: '1. Hva visste du ikke om deg selv i august?', hint: 'Hva har du lært om egne interesser eller styrker siden skolestart?', rader: 3 },
      { type: 'felt', id: 'r2', label: '2. Har du blitt mer eller mindre usikker, og er det OK?', hint: 'Begge svar er like gyldige. Mer usikkerhet kan bety at du har oppdaget flere muligheter.', rader: 3 }
    ] },

    { tittel: 'Exit-ticket', tid: '5 min', blokker: [
      { type: 'felt', id: 'mal', label: 'Mitt mål for resten av Utdanningsvalg er …', rader: 3 },
      { type: 'poeng', tekst: 'Legg midtårsrefleksjonen inn som et eget seksjonsskille i portfolioen din. Den markerer overgangen mellom første og andre halvår.' }
    ] }
  ]
};
