window.UTV_OKT = {
  nr: 9, gruppe: 'veivalg', tittel: 'Studieforberedende',
  ingress: 'Flere veier til studiekompetanse: hva betyr «studieforberedende», og hvilke måter finnes det å gå denne veien på?',
  mal: [
    'forklare med egne ord hva «studieforberedende» betyr',
    'kjenne igjen de fem studieforberedende utdanningsprogrammene',
    'beskrive noen forskjeller mellom programmene',
    'vite at studieforberedende kan ha svært ulike fag, arbeidsmåter og interesser i sentrum',
    'kjenne til at studieforberedende kan gi grunnlag for videre utdanning, men at de ulike løpene kan ha forskjellige faglige profiler og krav',
    'begynne å vurdere hvilke programmer du er nysgjerrig på'],
  steg: [
    { tittel: 'Studieforberedende: hva betyr det?', blokker: [
      { type: 'snakk', intro: 'Hva tror du? Tenk 30 sekunder og snakk med partneren din.', sporsmal: [] },
      { type: 'ord', ord: ['universitet?', 'mye teori?', 'lese og skrive?', 'mange lekser?', 'høyere utdanning?', 'bestemte yrker?', 'vanlig skole?', 'idrett?', 'musikk?', 'medier?'] },
      { type: 'tekst', avsnitt: ['I dag skal vi undersøke om studieforberedende egentlig bare betyr én type skolehverdag.'] },
      { type: 'ord', tittel: 'De fem programmene', ord: ['Studiespesialisering', 'Idrettsfag', 'Kunst, design og arkitektur', 'Medier og kommunikasjon', 'Musikk, dans og drama'] },
      { type: 'felt', id: 'tror', label: 'Hva tror du er forskjellen på disse fem?', hint: 'Valgfritt.', rader: 3 }
    ] },

    { tittel: 'Så hva betyr egentlig studieforberedende?', blokker: [
      { type: 'tekst', avsnitt: ['Studieforberedende betyr først og fremst at opplæringen er lagt opp med sikte på studiekompetanse og videre utdanning. Men studieforberedende er ikke én bestemt type elev, og programmene har svært ulike faglige profiler.'] },
      { type: 'kort', kort: [
        { tittel: 'Studiespesialisering', tekst: 'Særlig fokus på teoretiske og akademiske fag.' },
        { tittel: 'Idrettsfag', tekst: 'Særlig fokus på idrett, trening, kropp og teori.' },
        { tittel: 'Kunst, design og arkitektur', tekst: 'Særlig fokus på kunst, design, arkitektur og kreative arbeidsmåter.' },
        { tittel: 'Medier og kommunikasjon', tekst: 'Særlig fokus på medier, kommunikasjon og kreative og digitale arbeidsprosesser.' },
        { tittel: 'Musikk, dans og drama', tekst: 'Særlig fokus på kunstneriske uttrykksformer, musikk, dans og drama.' }] },
      { type: 'avslor', sporsmal: 'Hvis to elever går studieforberedende, har de akkurat samme skolehverdag?', svar: ['**Nei!** Studieforberedende handler ikke bare om hva du skal gjøre etter videregående. Det handler også om hvordan du lærer og hva du arbeider med mens du går der.'] }
    ] },

    { tittel: 'Bli kjent med de fem programmene', blokker: [
      { type: 'snakk', intro: 'Snakk sammen om spørsmålene til hvert program.', sporsmal: [] },
      { type: 'kort', kort: [
        { tittel: 'Studiespesialisering', punkter: ['Hvilke typer fag forbinder dere med dette?', 'Hvem kan trives med mye teoretisk arbeid?', 'Hvorfor kan det være nyttig hvis man er usikker på videre utdanning?'] },
        { tittel: 'Idrettsfag', tekst: 'Idrettsfag handler ikke bare om «å være flink i idrett». Det er gjerne en kombinasjon av idrett, teori, trening og læring.', punkter: ['Hva tror dere elevene lærer om i tillegg til å drive med idrett?'] },
        { tittel: 'Kunst, design og arkitektur', punkter: ['Hva kan være forskjellen på å bare like å tegne og å arbeide med kunst, design og arkitektur som fag?', 'kreativ problemløsning', 'visuelle uttrykk', 'design', 'idéutvikling', 'praktisk og teoretisk arbeid'] },
        { tittel: 'Medier og kommunikasjon', punkter: ['Hva tror dere egentlig man gjør her?', 'film', 'foto', 'sosiale medier', 'grafisk design', 'kommunikasjon', 'digitale medier', 'lyd', 'historiefortelling'] },
        { tittel: 'Musikk, dans og drama (MDD)', tekst: 'Et studieforberedende løp med en tydelig kunstnerisk og praktisk profil. Du velger en stil eller vei å fordype deg i.', punkter: ['Hva tror dere man lærer utover å synge, danse eller spille teater?'] }] }
    ] },

    { tittel: 'Hvilket program passer?', blokker: [
      { type: 'instruks', tekst: 'Velg programmet du tror passer best for hver person.' },
      { type: 'sitat', tekst: '«Jeg liker foto, film, digitale uttrykk, kommunikasjon og kreativt arbeid.»', kilde: 'Person A' },
      { type: 'felt', id: 'pA', label: 'Person A passer til …', rader: 1 },
      { type: 'sitat', tekst: '«Jeg er veldig interessert i trening, idrett og kropp, men liker også skolefag.»', kilde: 'Person B' },
      { type: 'felt', id: 'pB', label: 'Person B passer til …', rader: 1 },
      { type: 'sitat', tekst: '«Jeg liker å spille musikk, synge, danse eller spille teater og ønsker å utvikle meg kunstnerisk.»', kilde: 'Person C' },
      { type: 'felt', id: 'pC', label: 'Person C passer til …', rader: 1 },
      { type: 'sitat', tekst: '«Jeg liker mange forskjellige skolefag og vil gjerne holde mange muligheter åpne. Jeg liker å lese, diskutere og jobbe med teori.»', kilde: 'Person D' },
      { type: 'felt', id: 'pD', label: 'Person D passer til …', rader: 1 },
      { type: 'sitat', tekst: '«Jeg liker å tegne, utvikle ideer, lage ting og tenke visuelt.»', kilde: 'Person E' },
      { type: 'felt', id: 'pE', label: 'Person E passer til …', rader: 1 }
    ] },

    { tittel: 'Hovedoppgave: Mitt studieforberedende prospekt', blokker: [
      { type: 'instruks', avsnitt: ['Oppdraget: velg et studieforberedende utdanningsprogram. Undersøk programmet, og lag et kort prospekt som en ungdom på din alder kan forstå.', 'Skriv med egne ord. Målet er å forstå, ikke å kopiere.'] },
      { type: 'lenke', tekst: 'Utforsk utdanningsprogrammene', url: 'https://utdanning.no/utdanningsvalg_artikkel_utforsk_utdanningsprogrammene', merknad: 'Utdanning.no' },
      { type: 'valg', id: 'program', maks: 1, label: '1. Hvilket program har du valgt?', valg: ['Studiespesialisering', 'Idrettsfag', 'Kunst, design og arkitektur', 'Medier og kommunikasjon', 'Musikk, dans og drama'] },
      { type: 'liste-felt', id: 'lerer', label: '2. Hva lærer man?', hint: 'Finn ut hva elevene arbeider med. Tenk på fag, temaer og hva elevene får øve på. Skriv minst tre ting.', antall: 3, plassholder: 'Noe elevene lærer' },
      { type: 'valg', id: 'hverdag', label: '3. Hvordan kan skolehverdagen være?', hint: 'Kryss av det du tror passer.', valg: ['Mye teori', 'Praktisk arbeid', 'Kreativt arbeid', 'Individuelt arbeid', 'Samarbeid', 'Aktivitet', 'Fordypning', 'Kommunikasjon'] },
      { type: 'felt', id: 'beskr', label: 'Min beskrivelse', rader: 4 },
      { type: 'liste-felt', id: 'etterpa', label: '4. Hva kan man gjøre etterpå?', hint: 'Finn minst tre muligheter, for eksempel videre utdanning, fagområder, studieretninger eller yrker.', antall: 4, plassholder: 'Mulighet' },
      { type: 'valg', id: 'trives', maks: 3, label: '5. Hvem kan trives her?', hint: 'Velg tre egenskaper eller interesser som kan være nyttige på programmet.', valg: ['kreativ', 'nysgjerrig', 'praktisk', 'teoretisk interessert', 'sosial', 'selvstendig', 'strukturert', 'fysisk aktiv', 'glad i teknologi', 'glad i kunst og kultur', 'glad i kommunikasjon', 'liker å fordype seg'] },
      { type: 'felt', id: 'trives-hv', label: 'Hvorfor valgte jeg disse?', rader: 3 },
      { type: 'felt', id: 'overr', label: '6. Én overraskelse', hint: 'Noe jeg ikke visste om dette programmet var …', rader: 3 },
      { type: 'tekst', tittel: '7. Reklame for programmet', avsnitt: ['Du skal reklamere for programmet til en medelev. Du får ca. 30 sekunder. Bruk setningen som hjelp, men si det med dine egne ord:', '«Hvis du liker …, kan … være et program det er verdt å undersøke fordi …»'] },
      { type: 'felt', id: 'rek1', label: 'Hvis du liker …', rader: 1 },
      { type: 'felt', id: 'rek2', label: 'Programmet kan være verdt å undersøke fordi …', rader: 2 },
      { type: 'tekst', tittel: '8. Etter reklamen: hva tenker du nå?', avsnitt: ['Lytt til en medelev som presenterer et annet program.'] },
      { type: 'felt', id: 'etter1', label: 'Et program jeg ble litt mer nysgjerrig på', rader: 1 },
      { type: 'felt', id: 'etter2', label: 'Fordi …', rader: 2 },
      { type: 'valg', id: 'sjekk', label: 'Før du leverer', hint: 'Kryss av for det du har gjort.', valg: ['Jeg har skrevet med egne ord', 'Jeg har undersøkt programmet', 'Jeg har funnet minst tre muligheter etter programmet', 'Jeg har valgt tre egenskaper eller interesser', 'Jeg har skrevet én overraskelse', 'Jeg er klar til å presentere på ca. 30 sekunder'] },
      { type: 'tekst', avsnitt: ['Husk: dette er utforsking, ikke et endelig valg.'] }
    ] },

    { tittel: 'Viktig poeng', blokker: [
      { type: 'avslor', sporsmal: 'Må en person som passer til ett program, velge akkurat det programmet?', svar: ['**Nei!** Det er et utgangspunkt for å utforske, ikke et valg.'] }
    ] },

    { tittel: 'Refleksjon', blokker: [
      { type: 'felt', id: 'r1', label: '1. Hvilket av de fem programmene er jeg mest nysgjerrig på?', rader: 1 },
      { type: 'felt', id: 'r2', label: '2. Hvorfor?', rader: 2 },
      { type: 'felt', id: 'r3', label: '3. Hva kunne gjort at jeg ikke trivdes der?', rader: 2 },
      { type: 'felt', id: 'r4', label: '4. Er det et studieforberedende program jeg nesten ikke visste noe om fra før?', rader: 2 },
      { type: 'valg', id: 'r5', maks: 1, label: '5. Har oppfatningen min av studieforberedende endret seg?', valg: ['Ja', 'Litt', 'Nei'] },
      { type: 'felt', id: 'r5b', label: 'Hvorfor?', rader: 2 }
    ] }
  ]
};
