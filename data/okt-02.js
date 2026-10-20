window.UTV_OKT = {
  nr: 2, gruppe: 'meg', tittel: 'Hva er din personlighet?',
  ingress: 'Hva liker du å gjøre, og hvilke arbeidsmiljøer kan passe deg? Ta en interessetest, se profilen din og bruk den som utgangspunkt for å undersøke utdanninger og yrker.',
  mal: ['Forklare hva RIASEC er: seks måter å like å jobbe på', 'Finne dine sterkeste interesseområder', 'Koble profilen din til utdanningsprogram og yrker du kan undersøke'],
  riasec: {
    testSteg: 3,
    typer: {
      R: { navn: 'Praktisk', sitat: '«Jeg liker å gjøre, bygge og fikse.»', yrker: 'Elektriker, mekaniker, tømrer, rørlegger, anleggsmaskinfører, industrimekaniker, bonde', programmer: 'Elektro og datateknologi, Bygg- og anleggsteknikk, Teknologi- og industrifag, Naturbruk' },
      I: { navn: 'Undersøkende', sitat: '«Jeg liker å finne ut av ting.»', yrker: 'Ingeniør, lege, forsker, biolog, kjemiker, programmerer, psykolog, veterinær', programmer: 'Studiespesialisering (realfag), Teknologi- og industrifag, Helse- og oppvekstfag' },
      A: { navn: 'Kreativ', sitat: '«Jeg liker å skape og uttrykke meg.»', yrker: 'Grafisk designer, fotograf, arkitekt, musiker, skuespiller, journalist, illustratør, interiørdesigner', programmer: 'Kunst, design og arkitektur, Musikk, dans og drama, Medier og kommunikasjon, Håndverks-, design- og produktutvikling' },
      S: { navn: 'Sosial', sitat: '«Jeg liker å hjelpe, samarbeide og jobbe med mennesker.»', yrker: 'Lærer, sykepleier, barnehagelærer, fysioterapeut, helsefagarbeider, rådgiver, sosionom, politi', programmer: 'Helse- og oppvekstfag, Studiespesialisering (språk, samfunnsfag), Idrettsfag' },
      E: { navn: 'Påvirkende', sitat: '«Jeg liker å ta initiativ og få ting til å skje.»', yrker: 'Leder, entreprenør, prosjektleder, selger, markedsfører, eiendomsmegler', programmer: 'Studiespesialisering (økonomi og samfunnsfag), Service og samferdsel, Medier og kommunikasjon' },
      C: { navn: 'Strukturert', sitat: '«Jeg liker orden, system og oversikt.»', yrker: 'Regnskapsfører, økonomimedarbeider, logistikkmedarbeider, administrasjonsmedarbeider, bankmedarbeider, lønnskonsulent', programmer: 'Service og samferdsel, Studiespesialisering (økonomi), Teknologi- og industrifag' }
    },
    spm: {
      R: ['Jeg liker å bruke hendene når jeg jobber.', 'Jeg liker å reparere, bygge eller montere ting.', 'Jeg liker verktøy, maskiner og praktiske oppgaver.', 'Jeg liker å se et konkret resultat av det jeg gjør.', 'Jeg trives best når jeg er ute eller er i bevegelse.', 'Jeg vil heller prøve å få noe til å fungere enn å lese om hvordan det fungerer.', 'Jeg liker å jobbe med dyr, planter eller natur.', 'Jeg synes det er gøy å finne praktiske løsninger på problemer.'],
      I: ['Jeg liker å stille spørsmål og undersøke ting.', 'Jeg liker å løse vanskelige problemer.', 'Jeg blir nysgjerrig på hvorfor ting fungerer som de gjør.', 'Jeg liker logikk, analyse og å finne svar.', 'Jeg blir ekstra interessert når jeg møter et problem jeg ikke vet svaret på.', 'Jeg liker matematikk eller naturfag.', 'Jeg liker å lese eller se videoer for å forstå noe skikkelig.', 'Jeg liker å teste ut ideer og se om de stemmer.'],
      A: ['Jeg liker å tegne, designe, skrive, spille musikk eller lage noe.', 'Jeg liker å komme på nye ideer.', 'Jeg liker oppgaver der det finnes flere gode svar.', 'Jeg liker å gjøre ting på min egen måte.', 'Jeg liker å fotografere, filme eller redigere.', 'Jeg legger merke til farger, former, lyd eller stil.', 'Jeg liker å uttrykke følelser eller meninger gjennom noe jeg lager.', 'Jeg liker å tenke annerledes enn de fleste.'],
      S: ['Jeg liker å hjelpe andre.', 'Jeg liker å forklare, lytte eller veilede.', 'Jeg trives godt med samarbeid.', 'Jeg liker å jobbe med mennesker.', 'Jeg får energi av å være sammen med andre.', 'Folk forteller ofte hva de tenker eller føler til meg.', 'Jeg liker å ta vare på yngre eller svakere.', 'Jeg synes det er viktig at jobben min betyr noe for andre.'],
      E: ['Jeg liker å ta ansvar eller lede.', 'Jeg liker å presentere og argumentere for synspunktene mine.', 'Jeg liker å organisere prosjekter, arrangementer eller aktiviteter.', 'Jeg liker å få andre med på ideene mine.', 'Jeg liker å være den som tar initiativ når noe skal settes i gang.', 'Jeg liker konkurranse og å nå mål.', 'Jeg har lyst til å starte noe eget, som en bedrift eller et prosjekt.', 'Jeg liker å selge eller overbevise.'],
      C: ['Jeg liker å planlegge og organisere.', 'Jeg liker nøyaktighet og detaljer.', 'Jeg liker tall, informasjon og systemer.', 'Jeg liker å ha oversikt og kontroll.', 'Jeg liker å følge klare regler og rutiner.', 'Jeg liker å holde orden, for eksempel i mapper, rom eller regneark.', 'Jeg blir irritert når noe er slurvete eller ufullstendig.', 'Jeg liker å bli ferdig med oppgaver på en ryddig måte.']
    }
  },
  steg: [
    { tittel: 'Start her', blokker: [
      { type: 'tekst', avsnitt: [
        'Noen liker best å bygge og fikse. Andre liker å finne ut av ting, skape noe nytt, hjelpe folk eller ha oversikt. **Det er interessene dine som viser retningen.**',
        'RIASEC er en kjent modell for interesser og arbeidsmiljøer. Den deler interesser inn i seks områder. Modellen er laget av den amerikanske psykologen John Holland og brukes over hele verden i karriereveiledning.'] },
      { type: 'poeng', tekst: 'Det finnes ingen riktige eller gale svar. Testen sier ikke hvem du er, bare hva du liker å gjøre akkurat nå.' },
      { type: 'snakk', tittel: 'Snakk med sidemannen', sporsmal: ['Hvilke aktiviteter får deg til å glemme tiden?', 'Hva liker du best på skolen: å gjøre noe, finne ut av noe, lage noe eller jobbe sammen med andre?'] }
    ] },

    { tittel: 'De seks typene', tid: '10 min', blokker: [
      { type: 'tekst', avsnitt: ['Les om de seks typene. Legg merke til hvilke du kjenner deg igjen i. Du trenger ikke velge noen ennå.'] },
      { type: 'kort', kort: [
        { tittel: '🔧 R: Praktisk', tekst: '«Jeg liker å gjøre, bygge og fikse.»', punkter: ['bruke hendene', 'bygge, reparere eller montere', 'verktøy og maskiner', 'jobbe ute eller fysisk', 'se konkrete resultater', 'Passer i: verksted, byggeplass, industri, gård og natur', 'Yrker: elektriker, mekaniker, tømrer, rørlegger, anleggsmaskinfører'] },
        { tittel: '🔬 I: Undersøkende', tekst: '«Jeg liker å finne ut av ting.»', punkter: ['stille spørsmål', 'undersøke og utforske', 'løse problemer', 'analysere informasjon', 'finne ut hvorfor ting skjer', 'Passer i: laboratorium, forskning, helse, IT', 'Yrker: ingeniør, lege, forsker, biolog, programmerer, psykolog'] },
        { tittel: '🎨 A: Kreativ', tekst: '«Jeg liker å skape og uttrykke meg.»', punkter: ['tegne og designe', 'skrive', 'lage musikk', 'fotografere eller filme', 'utvikle ideer og tenke annerledes', 'Passer i: studio, scene, medier, design, kultur, reklame', 'Yrker: grafisk designer, fotograf, arkitekt, musiker, journalist'] },
        { tittel: '🤝 S: Sosial', tekst: '«Jeg liker å hjelpe, samarbeide og jobbe med mennesker.»', punkter: ['hjelpe andre', 'lytte og forklare', 'samarbeide', 'undervise og motivere', 'Passer i: skole, helse, barnehage, omsorg, veiledning', 'Yrker: lærer, sykepleier, barnehagelærer, fysioterapeut, helsefagarbeider, politi'] },
        { tittel: '💼 E: Påvirkende', tekst: '«Jeg liker å ta initiativ og få ting til å skje.»', punkter: ['ta ledelsen', 'organisere', 'påvirke andre', 'presentere ideer og argumentere', 'selge eller markedsføre', 'Passer i: bedrifter, salg, ledelse, entreprenørskap', 'Yrker: leder, entreprenør, prosjektleder, selger, eiendomsmegler'] },
        { tittel: '📋 C: Strukturert', tekst: '«Jeg liker orden, system og oversikt.»', punkter: ['planlegge', 'holde orden', 'arbeide nøyaktig', 'bruke tall og informasjon', 'følge systemer', 'Passer i: kontor, økonomi, administrasjon, bank, logistikk', 'Yrker: regnskapsfører, økonomimedarbeider, logistikkmedarbeider, bankmedarbeider'] }
      ] },
      { type: 'felt', id: 'forste', label: 'Hvilke to typer kjenner jeg meg mest igjen i, bare ut fra beskrivelsene?', rader: 2 }
    ] },

    { tittel: 'Interessetesten', tid: '10–15 min', blokker: [
      { type: 'instruks', avsnitt: ['Du får 48 utsagn. For hvert utsagn velger du hvor godt det passer med deg, fra 1 til 5.', 'Svar ut fra hva du **liker**, ikke ut fra hva du er flink til. Svar raskt og ærlig. Første følelse er som regel best.'] },
      { type: 'riasec-test' }
    ] },

    { tittel: 'Din profil', blokker: [
      { type: 'riasec-resultat' },
      { type: 'felt', id: 'gjenkjenning', label: 'Kjenner jeg meg igjen i de tre sterkeste områdene mine? Hvorfor eller hvorfor ikke?', rader: 3 }
    ] },

    { tittel: 'Du er nok ikke bare én type', blokker: [
      { type: 'tekst', avsnitt: ['De fleste kjenner seg igjen i flere av typene. Tre bokstaver sammen er en **kode**, og kombinasjonen sier mer enn én enkelt bokstav.'] },
      { type: 'liste', tittel: 'Eksempler på kombinasjoner', punkter: [
        '**R + I** (praktisk + undersøkende): liker å forstå hvordan ting fungerer og å gjøre noe med det.',
        '**A + S** (kreativ + sosial): liker å skape og å jobbe med mennesker.',
        '**S + E** (sosial + påvirkende): liker mennesker, samarbeid og å ta initiativ.',
        '**I + C** (undersøkende + strukturert): liker problemløsing, analyse og system.'] },
      { type: 'poeng', tekst: 'Det viktigste spørsmålet er ikke «Hvilken type er jeg?». Det er «Hva liker jeg å gjøre, og hvilke utdanninger og yrker gir meg mulighet til å gjøre mer av det?»' }
    ] },

    { tittel: 'Hva betyr profilen min?', blokker: [
      { type: 'tekst', avsnitt: ['RIASEC er ikke en fasit, og resultatet bestemmer ikke hvilket yrke du skal velge. Profilen kan hjelpe deg å se hva du liker å gjøre, og hva du kan undersøke videre.'] },
      { type: 'liste', tittel: 'Hvorfor kan resultatet bli annerledes enn forventet?', punkter: [
        'Du svarte kanskje ut fra hva du *er flink til*, ikke hva du *liker*.',
        'Du har kanskje ikke prøvd mange av aktivitetene ennå.',
        'Interessene dine endrer seg. En test viser bare hvordan du har det nå.',
        'En test med 48 utsagn er grov. Den gir en pekepinn, ikke et svar.'] },
      { type: 'tekst', avsnitt: ['Vil du ta en lengre test? Du kan prøve den engelske versjonen fra Open Psychometrics. Den er gratis, men på engelsk, og du bør ikke skrive inn navn eller annen personlig informasjon.'] },
      { type: 'lenke', tekst: 'RIASEC-test på Open Psychometrics (engelsk)', url: 'https://openpsychometrics.org/tests/RIASEC/', merknad: 'Valgfritt. Åpnes i ny fane.' },
      { type: 'felt', id: 'lengre', label: 'Hvis jeg tok den lengre testen, fikk jeg denne koden', hint: 'Valgfritt.', rader: 1 }
    ] },

    { tittel: 'Min refleksjon', blokker: [
      { type: 'felt', id: 'ref-aktiviteter', label: 'Hvilke aktiviteter på skolen eller fritiden passer med profilen min?', rader: 3 },
      { type: 'felt', id: 'ref-program', label: 'Hvilke utdanningsprogram kunne jeg tenke meg å undersøke nærmere?', rader: 3 },
      { type: 'felt', id: 'ref-yrke', label: 'Finn ett yrke du er nysgjerrig på. Hva gjør man i dette yrket?', rader: 3 },
      { type: 'felt', id: 'ref-finne-ut', label: 'Hva trenger jeg å finne ut før jeg kan vite om yrket passer meg?', rader: 3 }
    ] },

    { tittel: 'Mitt neste steg', blokker: [
      { type: 'felt', id: 'neste-hva', label: 'Jeg vil undersøke dette utdanningsprogrammet eller yrket', rader: 1 },
      { type: 'felt', id: 'neste-finne', label: 'Dette vil jeg finne ut', rader: 2 },
      { type: 'felt', id: 'neste-kilde', label: 'En kilde jeg kan bruke', hint: 'For eksempel utdanning.no', rader: 1 },
      { type: 'poeng', tekst: 'Husk: Du kan være en blanding av flere typer, og interessene dine kan endre seg. Målet er ikke å finne «riktig type», men å bli bedre kjent med mulighetene.' }
    ] }
  ]
};
