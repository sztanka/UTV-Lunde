window.UTV_OKT = {
  nr: 12, gruppe: 'veivalg', tittel: 'Yrkesfag er ikke en blindvei',
  ingress: 'Yrkesfag kan være en vei til fagbrev, arbeid, videre utdanning, spesialisering og egen virksomhet.',
  mal: [
    'kjenne igjen noen vanlige fordommer om yrkesfag',
    'forklare hvorfor slike fordommer kan være misvisende',
    'beskrive minst én alternativ vei videre etter yrkesfag',
    'se sammenhengen mellom yrkesfag, kompetanse og arbeidsliv',
    'reflektere over egne forestillinger om fagarbeidere',
    'bruke en konkret historie til å undersøke en utdannings- eller karrierevei'],
  steg: [
    { tittel: 'Hvem tror du er fagarbeider?', blokker: [
      { type: 'snakk', sporsmal: ['Hvilken utdanningsvei tror du de ulike personene har?', 'Hvem har gått yrkesfag, og hvem har tatt høyere utdanning?'] },
      { type: 'tekst', avsnitt: ['Du skal ha nok kunnskap til å kunne vurdere yrkesfag på et ordentlig grunnlag.'] }
    ] },

    { tittel: 'Hva er egentlig en fordom?', blokker: [
      { type: 'poeng', tekst: 'En fordom er en forestilling vi har om en person eller gruppe, uten at vi nødvendigvis har nok kunnskap til å vite om den stemmer.' },
      { type: 'snakk', sporsmal: ['Kan en fordom være både positiv og negativ?'] },
      { type: 'liste', tittel: 'To eksempler på fordommer', punkter: ['«Alle som jobber på kontor har det behagelig.»', '«Alle håndverkere er flinke til å reparere ting hjemme.»'] },
      { type: 'tekst', avsnitt: ['I dag skal vi undersøke noen av fordommene som finnes om yrkesfag.'] }
    ] },

    { tittel: 'Myter rundt yrkesfag', blokker: [
      { type: 'valg', id: 'myte', maks: 1, label: 'Velg én påstand du har hørt', valg: [
        'A. «Yrkesfag er for dem som ikke klarer skolen.»',
        'B. «Hvis du tar yrkesfag, ender du bare opp med én type jobb.»',
        'C. «Fagarbeidere har få muligheter til å utdanne seg videre.»',
        'D. «Yrkesfag er mest praktisk og krever lite kunnskap.»',
        'E. «Det er vanskelig å starte egen bedrift med yrkesfaglig bakgrunn.»'] },
      { type: 'snakk', sporsmal: ['Hvilken av disse tror dere er den vanligste fordommen?'] },
      { type: 'felt', id: 'vanligst', label: 'Jeg tror den vanligste fordommen er … fordi …', hint: 'Valgfritt.', rader: 2 }
    ] },

    { tittel: 'Én utdanning, mange muligheter', blokker: [
      { type: 'flyt', trinn: ['Yrkesfag', 'Fagbrev'] },
      { type: 'kort', kort: [
        { tittel: 'Fagbrev kan føre til', punkter: ['arbeid', 'videre utvikling', 'fagskole', 'egen bedrift'] },
        { tittel: 'Yrkesfag kan også føre til', punkter: ['påbygg', 'studiekompetanse', 'høyere utdanning (Y-veien)'] }] }
    ] },

    { tittel: 'Hovedoppgave: Historien som utfordrer en fordom', blokker: [
      { type: 'instruks', avsnitt: ['Jobb sammen i grupper på 3–4. Undersøk en person med yrkesfaglig bakgrunn og let etter konkrete bevis i historien: hva har personen gjort, hvilken kompetanse har personen, og hvilken fordom utfordrer historien?', 'Finn konkrete opplysninger, ikke bare det dere tror. Skriv stikkord. Hvis dere ikke finner informasjon om et spørsmål, skriver dere «ikke oppgitt».'] },
      { type: 'lenke', tekst: 'Yrkesfaghåndboka på Utdanning.no', url: 'https://utdanning.no/yrkesfag', merknad: 'Gå inn på et yrke og les eller se intervju med personen' },
      { type: 'felt', id: 'navn', label: 'Navn på dere i gruppa', rader: 1 },
      { type: 'felt', id: 'person', label: 'Person og historie vi undersøker', rader: 1 },
      { type: 'felt', id: 'kilde', label: 'Kilde', rader: 1 },
      { type: 'tekst', tittel: 'Finn bevis i historien', avsnitt: ['Svar med konkrete opplysninger fra historien.'] },
      { type: 'felt', id: 'b1', label: '1. Hva slags yrkesfaglig bakgrunn har personen?', rader: 2 },
      { type: 'felt', id: 'b2', label: '2. Hva slags arbeid gjør personen?', rader: 2 },
      { type: 'felt', id: 'b3', label: '3. Hvilken kompetanse har personen?', rader: 2 },
      { type: 'felt', id: 'b4', label: '4. Hva har personen gjort etter fagbrev eller yrkesutdanning?', rader: 2 },
      { type: 'felt', id: 'b5', label: '5. Har personen tatt mer utdanning eller spesialisert seg?', rader: 2 },
      { type: 'felt', id: 'b6', label: '6. Har personen startet eller driver egen virksomhet?', rader: 2 },
      { type: 'felt', id: 'b7', label: '7. Hvilken fordom utfordrer historien?', rader: 3 },
      { type: 'tekst', tittel: 'Hva er det sterkeste beviset?', avsnitt: ['Finn den opplysningen i historien som dere mener tydeligst viser at fordommen ikke stemmer.'] },
      { type: 'felt', id: 'sterkest', label: 'Det sterkeste beviset er …', rader: 3 }
    ] },

    { tittel: 'Fordommen møter virkeligheten', tid: 'Ca. 45 sek', blokker: [
      { type: 'instruks', tekst: 'Forbered gruppens presentasjon. Dere har omtrent 45 sekunder.' },
      { type: 'felt', id: 'p1', label: 'Vi undersøkte …', rader: 1 },
      { type: 'felt', id: 'p2', label: 'Personen har …', rader: 2 },
      { type: 'felt', id: 'p3', label: 'Historien utfordrer fordommen om at …', rader: 2 },
      { type: 'felt', id: 'p4', label: 'Vi fant særlig ut at …', rader: 2 },
      { type: 'felt', id: 'p5', label: 'Fordommen vi vil utfordre', rader: 1 },
      { type: 'felt', id: 'p6', label: 'Det viktigste vi vil fortelle klassen', rader: 3 }
    ] },

    { tittel: 'Individuell refleksjon', blokker: [
      { type: 'instruks', tekst: 'Nå går du fra det gruppen fant ut, til dine egne tanker. Det finnes ikke et riktig svar. Skriv det du faktisk tenker etter arbeidet.' },
      { type: 'felt', id: 'r1', label: 'Før timen tenkte jeg …', rader: 3 },
      { type: 'felt', id: 'r2', label: 'En forestilling om yrkesfag jeg har hørt er …', rader: 3 },
      { type: 'felt', id: 'r3', label: 'Nå vet jeg at …', rader: 3 },
      { type: 'felt', id: 'r4', label: 'En misforståelse om yrkesfag som jeg nå vet er feil, er …', rader: 3 },
      { type: 'felt', id: 'r5', label: 'Noe ved yrkesfag jeg er blitt mer nysgjerrig på er …', rader: 3 }
    ] },

    { tittel: 'Del én tanke med en medelev', blokker: [
      { type: 'instruks', tekst: 'Velg én refleksjon og les den for en medelev. Lytt til hva den andre tenker.' },
      { type: 'felt', id: 'tanke', label: 'En tanke fra samtalen som jeg vil ta med meg', rader: 3 },
      { type: 'snakk', tittel: 'Hvorfor får noen et negativt bilde av yrkesfag?', sporsmal: ['det man hører hjemme', 'venner', 'sosiale medier', 'skolekultur', 'gamle forestillinger', 'lite kunnskap om arbeidslivet', 'forskjellen mellom praktisk og teoretisk arbeid'] },
      { type: 'poeng', tekst: 'Derfor har vi brukt tid på å faktisk undersøke yrker og utdanninger, i stedet for å basere oss på forestillinger.' }
    ] },

    { tittel: 'Klar for portfolio?', blokker: [
      { type: 'valg', id: 'sjekk', label: 'Kryss av for det du har gjort', valg: ['Vi har skrevet hvilken historie eller person vi undersøkte', 'Vi har funnet konkrete opplysninger fra historien', 'Vi har funnet en fordom historien utfordrer', 'Vi har forberedt en kort presentasjon', 'Jeg har skrevet min egen refleksjon', 'Jeg har skrevet noe jeg er blitt mer nysgjerrig på'] },
      { type: 'tekst', avsnitt: ['Husk: målet er ikke å bevise at yrkesfag passer for alle. Målet er å undersøke om forestillingene våre faktisk stemmer.'] }
    ] }
  ]
};
