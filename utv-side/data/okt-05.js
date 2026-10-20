window.UTV_OKT = {
  nr: 5, gruppe: 'arbeid', tittel: 'Yrker rundt oss',
  ingress: 'Yrker finnes overalt, også der du minst tenker over det.',
  mal: [
    'oppdage og sette ord på ulike yrker i hverdagen',
    'forstå at mange yrker er «usynlige» fordi vi ikke møter dem direkte',
    'finne informasjon om yrker ved hjelp av en relevant kilde',
    'beskrive hovedoppgaver og utdanningsvei for noen yrker',
    'reflektere over egne førsteinntrykk av ulike yrker'],
  steg: [
    { tittel: 'Hvem jobbet for at du er her nå?', blokker: [
      { type: 'instruks', avsnitt: ['Gå i grupper på 3–5.', 'Start når du våkner. Følg dagen din fram til du setter deg i klasserommet. Skriv ned alle yrker dere tror har vært involvert.'] },
      { type: 'flyt', tittel: 'Eksempel', trinn: ['Våkner', 'elektriker', 'rørlegger', 'renholder', 'transportarbeider', 'butikkansatt', 'bonde', 'sjåfør', 'lærer', 'kantineansatt', 'IT-medarbeider …'] },
      { type: 'snakk', tittel: 'Ikke stopp ved de åpenbare yrkene', sporsmal: ['Hvem laget, reparerte, planla, transporterte, solgte eller organiserte det du bruker?'] }
    ] },

    { tittel: 'Brainstormingkonkurranse', tid: '3 min', blokker: [
      { type: 'instruks', tid: '3 min', avsnitt: ['Gå sammen med gruppa til hvert deres whiteboard.', 'Lag en liste over alle yrkene dere kommer på.'] },
      { type: 'felt', id: 'brain', label: 'Yrkene gruppa vår kom på', hint: 'Valgfritt. Skriv her hvis dere ikke bruker whiteboard.', rader: 5 },
      { type: 'snakk', tittel: 'Når tiden er ute', sporsmal: ['Hvem hadde flest?', 'Hvem hadde det mest spesielle?', 'Hvem hadde det mest overraskende?'] }
    ] },

    { tittel: 'De usynlige yrkene', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Hjemmet', tekst: 'Hvem har bidratt til at huset eller leiligheten fungerer?', punkter: ['elektriker', 'rørlegger', 'tømrer', 'maler', 'renholder', 'vaktmester', 'renovasjonsarbeider', 'energirådgiver'] },
        { tittel: 'Maten', tekst: 'Hvem har bidratt til at du får frokost og lunsj?', punkter: ['bonde', 'baker', 'kokk', 'matprodusent', 'sjåfør', 'lagerarbeider', 'butikkmedarbeider', 'logistikkmedarbeider'] },
        { tittel: 'Teknologien', tekst: 'Hvem gjør at mobilen, nettet og skolens digitale systemer fungerer?', punkter: ['programmerer', 'IT-tekniker', 'utvikler', 'nettverkstekniker', 'designer', 'ingeniør', 'supportmedarbeider'] },
        { tittel: 'Skolen', tekst: 'Hvem gjør at skolen fungerer?', punkter: ['lærere', 'skoleledelse', 'rådgiver', 'helsesykepleier', 'renholdere', 'vaktmester', 'bibliotekar', 'IKT-personell', 'administrasjon', 'kantinepersonell'] }
      ] },
      { type: 'ord', tittel: 'Yrker du nesten aldri møter, men som er viktige for at samfunnet skal fungere', ord: ['vann- og avløpstekniker', 'logistikkplanlegger', 'systemutvikler', 'laboratorietekniker', 'industrimekaniker', 'energitekniker', 'driftsoperatør', 'regnskapsmedarbeider', 'renovasjonsarbeider', 'meteorolog', 'geolog', 'kartograf'] },
      { type: 'poeng', tekst: 'Vi ser ofte resultatet av en jobb, uten å egentlig se personen som gjør jobben.' }
    ] },

    { tittel: 'Hovedoppgave: Yrkesjakten', blokker: [
      { type: 'instruks', avsnitt: ['Velg fem yrker fra brainstormingen. **Minst to av de fem skal være yrker du vet lite om fra før.**', 'Finn informasjonen på utdanning.no og fyll ut for hvert yrke.'] },
      { type: 'lenke', tekst: 'Åpne utdanning.no', url: 'https://utdanning.no/', merknad: 'Søk opp yrket og les om arbeidsoppgaver, arbeidssted og utdanning' },
      { type: 'gjenta', id: 'yrke', tittel: 'Yrke', antall: 5, felt: [
        { type: 'felt', id: 'navn', label: 'Hvilket yrke?', tittel: true, rader: 1 },
        { type: 'felt', id: 'gjor', label: 'Hva gjør personen?', hint: 'Skriv 2–3 konkrete arbeidsoppgaver.', rader: 2 },
        { type: 'felt', id: 'hvor', label: 'Hvor kan personen jobbe?', rader: 2 },
        { type: 'felt', id: 'utd', label: 'Hva slags utdanning trenger man?', rader: 2 },
        { type: 'felt', id: 'int', label: 'Hva synes jeg virker interessant?', rader: 2 },
        { type: 'felt', id: 'lite', label: 'Hva synes jeg virker lite interessant?', rader: 2 },
        { type: 'felt', id: 'person', label: 'Hva slags person kan trives i denne jobben?', hint: 'Styrker, personlighet og så videre.', rader: 2 }
      ] }
    ] },

    { tittel: 'Utfordring: Yrket du ikke hadde tenkt på', blokker: [
      { type: 'instruks', tekst: 'Velg ett av de fem yrkene som du ikke kunne sett for deg at du skulle undersøke før i dag. Svar på spørsmålene.' },
      { type: 'felt', id: 'ut-yrke', label: 'Hvilket yrke valgte du?', rader: 1 },
      { type: 'felt', id: 'ut1', label: 'Hvorfor hadde du ikke tenkt på dette yrket?', rader: 3 },
      { type: 'felt', id: 'ut2', label: 'Hva overrasket deg?', rader: 3 },
      { type: 'felt', id: 'ut3', label: 'Kunne noe ved jobben faktisk passet deg?', rader: 3 }
    ] },

    { tittel: 'Refleksjon', tid: '5 min', blokker: [
      { type: 'snakk', tittel: 'Snakk med personen eller personene rundt deg', sporsmal: [
        'Har dere undersøkt noen av de samme yrkene?',
        'Hva var forskjellig?',
        'Var det et yrke partneren din undersøkte som du ble nysgjerrig på?',
        'Hvorfor tror du vi ofte kjenner til noen yrker, men nesten aldri hører om andre?'] },
      { type: 'kort', kort: [
        { tittel: 'Yrker vi kjenner', punkter: ['Hvilke yrker snakker vi mye om?', 'Hvorfor tror dere akkurat disse yrkene er kjente?'] },
        { tittel: 'Yrker vi ikke kjenner', punkter: ['Hvorfor kjenner vi ikke flere yrker?', 'Kan et yrke være viktig selv om få har hørt om det?'] },
        { tittel: 'Forventninger', punkter: ['Var noen yrker annerledes enn du trodde?', 'Var det noen yrker som virket mer interessante etter at du leste om dem?'] },
        { tittel: 'Fremtid', punkter: ['Hvilke yrker tror dere kommer til å være viktige om 20 år?', 'Finnes det yrker som kanskje ikke finnes på samme måte i framtiden?'] }
      ] },
      { type: 'felt', id: 'refl', label: 'Min viktigste tanke fra samtalen', hint: 'Valgfritt.', rader: 3 }
    ] }
  ]
};
