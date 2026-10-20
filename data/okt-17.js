window.UTV_OKT = {
  nr: 17, gruppe: 'fagfelt', tittel: 'Service, salg, reiseliv, økonomi og samfunn',
  ingress: 'Bak en god opplevelse finnes det mange mennesker, ulike oppgaver og kompetanse vi ikke alltid legger merke til.',
  mal: [
    'nevne flere yrker innen service, salg, reiseliv og økonomi',
    'forklare hvordan ulike yrker samarbeider for å løse en oppgave eller skape en opplevelse',
    'finne informasjon om ett yrke ved hjelp av Utdanning.no',
    'beskrive en mulig arbeidsdag i yrket med konkrete arbeidsoppgaver',
    'reflektere over hva du selv synes virker interessant eller utfordrende'],
  steg: [
    { tittel: 'Start: Drømmeferien', blokker: [
      { type: 'snakk', tittel: 'Hvem gjorde den mulig?', intro: 'Lukk øynene et øyeblikk og forestill deg en drømmeferie:', sporsmal: ['Hvor reiser du?', 'Hvordan kommer du dit?', 'Hvor bor du?', 'Hva gjør du?'] },
      { type: 'instruks', tid: '2 min', tekst: 'Individuelt: skriv ned så mange yrker som mulig som bidrar til ferien din.' },
      { type: 'ord', tittel: 'Hjelp til å tenke', ord: ['Hvem hjelper deg med å bestille reisen?', 'Hvem sørger for at du kommer deg fram?', 'Hvem lager maten og rengjør hotellet?', 'Hvem planlegger aktiviteter og viser deg rundt?', 'Hvem sørger for betaling, markedsføring og drift?'] },
      { type: 'felt', id: 'ferie', label: 'Yrkene som bidrar til drømmeferien min', rader: 5 },
      { type: 'instruks', tid: '2 min', tekst: 'Sammen to og to: sammenlign listene og finn minst tre yrker den andre ikke har skrevet, to yrker dere begge har, og et yrke dere klarer å komme på sammen som dere ikke tenkte på først. Etterpå deler vi i plenum.' },
      { type: 'felt', id: 'par', label: 'Yrker vi fant sammen', hint: 'Valgfritt.', rader: 3 }
    ] },

    { tittel: 'Yrkesområdene', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Reise og transport', punkter: ['pilot', 'bussjåfør', 'taxisjåfør', 'reiseplanlegger'] },
        { tittel: 'Mat og servering', punkter: ['kokk', 'servitør', 'kjøkkenmedarbeider'] },
        { tittel: 'Overnatting', punkter: ['resepsjonist', 'renholder', 'hotellleder'] },
        { tittel: 'Opplevelser', punkter: ['guide', 'aktivitetsleder', 'museumsvert'] },
        { tittel: 'Salg og økonomi', punkter: ['butikkmedarbeider', 'økonom', 'markedsfører'] },
        { tittel: 'Drift og teknologi', punkter: ['IT-medarbeider', 'logistikkmedarbeider', 'tekniker'] }] }
    ] },

    { tittel: 'Faglig input: Service er mer enn å være hyggelig', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Salg og service', tekst: 'Kundekontakt, problemløsing, produktkunnskap, kommunikasjon og samarbeid.', punkter: ['butikkmedarbeider', 'salgsmedarbeider', 'kundebehandler'] },
        { tittel: 'Reiseliv og opplevelser', tekst: 'Planlegging, vertskap, informasjon, organisering og tilrettelegging.', punkter: ['resepsjonist', 'reiseplanlegger', 'guide'] },
        { tittel: 'Økonomi og virksomhetsdrift', tekst: 'Budsjett, regnskap, markedsføring, personalarbeid og planlegging.', punkter: ['økonomimedarbeider', 'regnskapsfører', 'HR-konsulent', 'markedsansvarlig'] }] },
      { type: 'avslor', sporsmal: 'Må man være utadvendt for å jobbe med service?', svar: ['**Nei, ikke nødvendigvis.** Service handler også om å lytte, være pålitelig, løse problemer og gi tydelig informasjon. Ulike roller krever ulike egenskaper.'] }
    ] },

    { tittel: 'Oppgave: Velg et yrke', tid: '3 min', blokker: [
      { type: 'instruks', tekst: 'Velg ett yrke fra listen, eller skriv et annet som passer til temaet.' },
      { type: 'valg', id: 'valg', maks: 1, label: 'Forslag', valg: ['Kokk', 'Servitør', 'Reiseplanlegger', 'Resepsjonist', 'Butikkmedarbeider', 'Kundebehandler', 'Markedsfører', 'Økonomimedarbeider', 'HR-konsulent', 'Guide'] },
      { type: 'felt', id: 'yrke', label: 'Mitt yrke', hint: 'Skriv det her, også hvis du har valgt et av forslagene.', rader: 1 }
    ] },

    { tittel: 'Undersøk yrket', tid: '7 min', blokker: [
      { type: 'instruks', tekst: 'Søk opp yrket på Utdanning.no og les om arbeidsoppgaver, arbeidssted og kompetanse. Skriv stikkord. Hele setninger kommer i neste steg.' },
      { type: 'lenke', tekst: 'Åpne utdanning.no', url: 'https://utdanning.no/', merknad: 'Finner du ikke en egen yrkesbeskrivelse? Velg et annet yrke, eller bruk en relevant utdanningsside.' },
      { type: 'felt', id: 'u1', label: '1. Hva gjør personen på jobb?', hint: 'Hvilke arbeidsoppgaver går igjen? Skriv 2–3 stikkord.', rader: 2 },
      { type: 'felt', id: 'u2', label: '2. Hvor kan personen arbeide?', hint: 'Hotell, butikk, kontor, offentlig sektor, hjemmefra? Her hos oss, eller andre steder?', rader: 2 },
      { type: 'felt', id: 'u3', label: '3. Hvem samarbeider personen med?', hint: 'Kunder, gjester, kolleger, ledere, leverandører?', rader: 2 },
      { type: 'felt', id: 'u4', label: '4. Hvilke ferdigheter eller hvilken kunnskap er viktig?', hint: 'Tenk både på det man lærer (fag, systemer) og personlige egenskaper.', rader: 2 },
      { type: 'felt', id: 'u5', label: '5. Hva virker interessant eller krevende?', hint: 'Én ting du ble nysgjerrig på, og én ting som kan være tøft.', rader: 2 },
      { type: 'felt', id: 'kilde', label: 'Kilde: siden eller teksten jeg brukte', rader: 1 }
    ] },

    { tittel: 'Skriv «En dag som …»', tid: '10 min', blokker: [
      { type: 'instruks', avsnitt: ['Skriv 100–150 ord, omtrent 8–12 setninger. Skriv som om du følger personen gjennom dagen, og bruk konkrete arbeidsoppgaver.', 'Bruk fakta fra kilden, ikke bare gjett. Du trenger ikke vite hva som skjer hver time, så lenge beskrivelsen er realistisk.'] },
      { type: 'tekst', avsnitt: ['**Tips:** sett en stjerne ★ ved ting du fant i kilden. Det som ikke har stjerne er det du har forestilt deg. Det er helt greit, så lenge du vet forskjellen.'] },
      { type: 'felt', id: 'tittel', label: 'En dag som …', rader: 1 },
      { type: 'felt', id: 'morgen', label: 'Morgen', hint: 'Hva starter arbeidsdagen med?', rader: 3 },
      { type: 'felt', id: 'midt', label: 'Midt på dagen', hint: 'Hvilke oppgaver gjør personen? Hvem møter eller samarbeider hen med?', rader: 4 },
      { type: 'felt', id: 'utfordring', label: 'En utfordring', hint: 'Hva kan gå galt, eller hva kan være krevende?', rader: 3 },
      { type: 'felt', id: 'avslutning', label: 'Avslutning', hint: 'Hva kan være givende eller interessant med jobben?', rader: 3 },
      { type: 'felt', id: 'passer', label: 'Passer for deg?', hint: 'Én setning: hvem kan kanskje trives i dette yrket? Begynn gjerne med «Dette yrket passer for deg som …»', rader: 2 }
    ] },

    { tittel: 'Deling og refleksjon', tid: '7 min', blokker: [
      { type: 'instruks', tekst: 'Del teksten med en medelev. Dere får ca. 2 minutter hver til å fortelle om yrket, og så sammenligner dere. Skriv ned dine egne svar.' },
      { type: 'felt', id: 'd1', label: '1. Hva var mer interessant enn du trodde?', hint: 'Tenk på yrket ditt, og på yrket til medeleven din.', rader: 2 },
      { type: 'felt', id: 'd2', label: '2. Hvilke arbeidsoppgaver virker spennende eller utfordrende?', hint: 'Nevn minst én av hver.', rader: 2 },
      { type: 'felt', id: 'd3', label: '3. Hvilke ferdigheter er viktige i yrket?', hint: 'Hva er det samme i begge yrkene dere snakket om?', rader: 2 },
      { type: 'felt', id: 'd4', label: '4. Hva er forskjellen på å yte god service og bare å være hyggelig?', hint: 'Tenk på en gang du fikk god (eller dårlig) service.', rader: 3 },
      { type: 'poeng', tekst: 'Service er ikke bare et yrke. Det er også en ferdighet som brukes i mange yrker. En elektriker, sykepleier, IT-medarbeider og økonom kan alle måtte kommunisere godt med kunder eller kolleger.' }
    ] },

    { tittel: 'Exit-ticket', tid: '5 min', blokker: [
      { type: 'instruks', tekst: 'Fullfør setningene alene.' },
      { type: 'felt', id: 'e1', label: 'En dag som … kan innebære …', rader: 2 },
      { type: 'felt', id: 'e2', label: 'Det mest overraskende jeg lærte, var …', rader: 2 },
      { type: 'felt', id: 'e3', label: 'Dette yrket virker interessant / mindre interessant for meg fordi …', rader: 2 },
      { type: 'poeng', tekst: 'Legg teksten «En dag som …» og refleksjonen (deling og exit-ticket) i portfolioen din.' }
    ] }
  ]
};
