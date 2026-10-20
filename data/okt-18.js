window.UTV_OKT = {
  nr: 18, gruppe: 'fagfelt', tittel: 'Natur, dyr og miljø',
  ingress: 'Ett dyr, et helt arbeidsliv. Å jobbe med natur, dyr og miljø handler ikke bare om å være bonde eller veterinær. Det finnes også yrker innen teknologi, helse, forskning, transport, matproduksjon og forvaltning.',
  mal: [
    'forklare hva utdanningsprogrammet Naturbruk handler om',
    'finne og beskrive minst fem yrker som er knyttet til et dyr',
    'se sammenhenger mellom natur, matproduksjon, teknologi og miljø',
    'reflektere over egne interesser og hva bærekraft kan bety i arbeidslivet'],
  steg: [
    { tittel: 'Start: sant eller usant', blokker: [
      { type: 'instruks', tekst: 'Du får høre noen utsagn. Mener du at utsagnet er sant, løfter du høyre hånd høyt.' },
      { type: 'liste', nummerert: true, punkter: [
        '«Hvis du vil jobbe med dyr, må du bli veterinær.»',
        '«Naturbruk handler bare om å jobbe på gård.»',
        '«Det finnes yrker der du jobber med natur uten å arbeide ute hver dag.»',
        '«Teknologi er viktig i moderne landbruk og fiskeoppdrett.»',
        '«Du kan jobbe med miljøvern i flere ulike yrker.»'] }
    ] },

    { tittel: 'Naturbruk er mer enn gårdsarbeid', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Dyr og mat', punkter: ['bonde', 'dyrepasser'] },
        { tittel: 'Skog og natur', punkter: ['skogbruksarbeider', 'naturforvalter', 'gartner'] },
        { tittel: 'Dyrehelse og fagkunnskap', punkter: ['veterinær', 'dyrehelsepersonell', 'forsker'] },
        { tittel: 'Fiskeri', punkter: ['fiskeoppdrettsarbeider'] }] }
    ] },

    { tittel: 'Hovedoppgave: Ett dyr, et helt arbeidsliv', tid: '20 min', blokker: [
      { type: 'poeng', tekst: 'I dag undersøker vi yrkene først. Vi trenger ikke finne ut av hele utdanningsløpet for hvert yrke ennå.' },
      { type: 'instruks', avsnitt: ['Du jobber sammen med en makker. Du leser på skjerm, men skriver og tegner på papir der oppgaven sier det.', 'Alt du finner skriver du her, så du har det klart når du skal vise det frem.'] },
      { type: 'felt', id: 'navn', label: 'Navn på makker', rader: 1 },
      { type: 'liste', nummerert: true, tittel: 'Oppdraget', punkter: [
        'Velg dyret dere vil undersøke.',
        'Finn minst fem yrker som har med dyret å gjøre. Søk opp hvert yrke på Utdanning.no og les beskrivelsen.',
        'Skriv én setning om hva yrkesutøveren gjør i arbeidshverdagen.',
        'Tegn dyret midt på yrkeskartet (papiret du får av læreren) og plasser yrkene rundt.',
        'Tegn streker mellom yrkene og dyret. Legg til piler der yrkene samarbeider.'] },
      { type: 'lenke', tekst: 'Åpne utdanning.no', url: 'https://utdanning.no/' },
      { type: 'tekst', avsnitt: ['**Eksempel med hest:** veterinær, hovslager, hestetrener, stallmedarbeider og fôrrådgiver. Det holder ikke å skrive yrkestitlene. Undersøk om beskrivelsene dine stemmer.'] },
      { type: 'valg', id: 'dyr', maks: 1, label: 'Velg ett dyr', valg: ['Ku', 'Laks', 'Hund', 'Hest'] },
      { type: 'felt', id: 'annetdyr', label: 'Eller et annet dyr', hint: 'Valgfritt.', rader: 1 }
    ] },

    { tittel: 'Yrkesfunn: skal vises frem', blokker: [
      { type: 'instruks', tekst: 'Fyll ut minst fem rader. Rad 6 er for deg som kommer lenger.' },
      { type: 'gjenta', id: 'y', tittel: 'Yrke', antall: 6, felt: [
        { type: 'felt', id: 'navn', label: 'Yrke', tittel: true, rader: 1 },
        { type: 'felt', id: 'gjor', label: 'Hva gjør yrkesutøveren? (én setning)', rader: 2 },
        { type: 'felt', id: 'kilde', label: 'Hvor fant jeg det?', rader: 1 }] }
    ] },

    { tittel: 'Gå litt dypere', blokker: [
      { type: 'instruks', tekst: 'Velg tre av yrkene fra yrkesfunnene.' },
      { type: 'felt', id: 'direkte', label: 'Yrke som jobber direkte med dyret', hint: 'Yrket jobber tett på dyret hver dag.', rader: 1 },
      { type: 'felt', id: 'direkte-hv', label: 'Hvorfor valgte jeg det?', rader: 2 },
      { type: 'felt', id: 'indirekte', label: 'Yrke som jobber indirekte med dyret', hint: 'Yrket har betydning for dyret uten å være tett på det.', rader: 1 },
      { type: 'felt', id: 'indirekte-hv', label: 'Hvorfor valgte jeg det?', rader: 2 },
      { type: 'felt', id: 'nytt', label: 'Et yrke jeg ikke hadde tenkt på', hint: 'Noe som ble nytt for deg underveis.', rader: 1 },
      { type: 'felt', id: 'nytt-hv', label: 'Hvorfor valgte jeg det?', rader: 2 }
    ] },

    { tittel: 'Yrkeskart: dyret i midten, yrkene rundt', blokker: [
      { type: 'instruks', avsnitt: ['Dette gjør du på papiret du får av læreren. Tegn dyret i midten av rammen. Skriv yrkene rundt, og tegn en strek fra hvert yrke til dyret. Bruk pil der to yrker samarbeider, og skriv gjerne et par ord på pilen som forklarer hvordan.', 'En linje betyr at yrket hører til dyret. En pil betyr at yrkene samarbeider.'] },
      { type: 'felt', id: 'kart-dyr', label: 'Mitt dyr', rader: 1 },
      { type: 'felt', id: 'kart', label: 'Hvem samarbeider med hvem, og hvordan?', hint: 'Valgfritt. Skriv noen eksempler fra kartet ditt.', rader: 3 }
    ] },

    { tittel: 'Ekstra utfordring', blokker: [
      { type: 'instruks', tekst: 'Valgfri. Hva kan skje hvis dyret ikke får god nok omsorg, fôr eller oppfølging? Hvilke yrker kan hjelpe til å løse problemet? Forklar sammenhengen med konkrete eksempler.' },
      { type: 'felt', id: 'ekstra1', label: 'Problemet som kan oppstå', rader: 3 },
      { type: 'felt', id: 'ekstra2', label: 'Yrkene som kan bidra, og hva de gjør', rader: 4 }
    ] },

    { tittel: 'Sjekk deg selv før du viser frem', blokker: [
      { type: 'valg', id: 'sjekk', label: 'Kryss av for det du har gjort', valg: ['Bredde: jeg har minst fem ulike yrker', 'Forståelse: jeg har forklart hva hvert yrke faktisk gjør', 'Sammenheng: jeg har minst én kobling mellom yrkene', 'Utforsking: jeg har minst ett yrke jeg ikke hadde tenkt på fra før', 'Kilde: jeg har undersøkt yrkene og ikke bare gjettet'] },
      { type: 'tekst', avsnitt: ['Du trenger ikke finne fem yrker med samme utdanningsvei. Poenget i dag er å se hvor bredt arbeidslivet er. Utdanningsveiene undersøker vi senere.'] },
      { type: 'kort', kort: [
        { tittel: 'Står du fast?', tekst: 'Be om en ferdig liste med yrker og velg fem. Start gjerne setningene med «En … jobber med …».' },
        { tittel: 'Ferdig tidlig?', tekst: 'Finn et yrke som jobber med dyret uten å være i kontakt med det, for eksempel innen fôr, forskning, transport eller forvaltning.' }] }
    ] },

    { tittel: 'Yrkesgalleri', tid: '7 min', blokker: [
      { type: 'instruks', avsnitt: ['Heng opp yrkeskartet, eller legg det på pulten. Gå rundt og les minst to andre kart. Skriv underveis.', 'Den eller de som sitter nærmest døren starter. De som sitter lengst vekk, kan bevege seg rundt. Etter 5 minutter bytter vi.'] },
      { type: 'felt', id: 'g-dyr', label: 'Kartets dyr', rader: 1 },
      { type: 'felt', id: 'g1', label: 'Et yrke jeg kjente fra før', rader: 1 },
      { type: 'felt', id: 'g2', label: 'Et yrke jeg ikke visste var knyttet til dyret', rader: 1 },
      { type: 'felt', id: 'g3', label: 'En likhet eller forskjell mellom to dyr', rader: 2 },
      { type: 'felt', id: 'g4', label: 'Funnet jeg kan dele med klassen (noe som overrasket meg)', rader: 2 },
      { type: 'snakk', tittel: 'Til samtalen i klassen', sporsmal: ['Hvilke yrker går igjen på tvers av dyrene?', 'Hvilke yrker krever mest direkte kontakt med dyr?', 'Hvilke yrker krever kunnskap om teknologi, økonomi eller miljø?'] }
    ] },

    { tittel: 'Refleksjon', tid: '5 min', blokker: [
      { type: 'instruks', tekst: 'Individuelt. Skriv før du går.' },
      { type: 'felt', id: 'r1', label: 'Natur og dyr som yrke er interessant fordi …', rader: 2 },
      { type: 'felt', id: 'r2', label: 'Et yrke jeg ble mer nysgjerrig på, er …', rader: 2 },
      { type: 'felt', id: 'r3', label: 'En ting jeg lærte om arbeidslivet i dag, er …', rader: 2 },
      { type: 'felt', id: 'r4', label: 'Jeg tror et bærekraftig yrke kan bidra ved å …', rader: 2 },
      { type: 'poeng', tekst: 'Legg yrkeskartet og refleksjonen i Utdanningsvalg-porteføljen din.' }
    ] }
  ]
};
