/* Økt 13–15 deler samme oppbygging, så de er lagt inn som tre fagfelt på én side. */
(function () {
  function fagfelt(k) {
    var p = k.pre;
    return [
      { tittel: k.navn + ': Start', tid: '5 min', blokker: [
        { type: 'instruks', tekst: 'Skriv stikkord. Det er lov å gjette, og det finnes ikke feil svar her.' },
        { type: 'tekst', avsnitt: [k.programmer] },
        { type: 'ord', tittel: 'Eksempler på yrker', ord: k.yrker },
        { type: 'felt', id: p + '-ass', label: k.startSporsmal, hint: k.startHint, rader: 3 },
        { type: 'felt', id: p + '-fordom', label: 'En forventning eller fordom jeg har om dette fagfeltet', rader: 2 }
      ] },
      { tittel: k.navn + ': Mitt mini-yrkeskort', tid: '20 min', blokker: [
        { type: 'instruks', tekst: 'Velg ett yrke fra listen over, eller et annet innen fagfeltet, og bruk lenken til å finne informasjon. Skriv i hele setninger. 1–2 setninger per spørsmål er nok.' },
        { type: 'lenke', tekst: k.lenkeTekst, url: k.lenke },
        { type: 'felt', id: p + '-yrke', label: 'Yrke jeg velger', rader: 1 },
        { type: 'felt', id: p + '-1', label: '1. Hva gjør man i dette yrket?', hint: k.h[0], rader: 3 },
        { type: 'felt', id: p + '-2', label: '2. Hvor kan man jobbe?', hint: k.h[1], rader: 2 },
        { type: 'felt', id: p + '-3', label: '3. Hvordan kan utdanningsveien se ut?', hint: k.h[2], rader: 3 },
        { type: 'felt', id: p + '-4', label: '4. Hvilken kompetanse eller hvilke ferdigheter er viktige?', hint: k.h[3], rader: 3 },
        { type: 'felt', id: p + '-5', label: '5. Finn én interessant eller overraskende fakta', hint: 'Bruk lenken over, eller spør en voksen som jobber i feltet.', rader: 2 },
        { type: 'felt', id: p + '-6', label: '6. Hva tror du kan være utfordrende med yrket?', hint: k.h[4], rader: 2 },
        { type: 'felt', id: p + '-7', label: '7. Passer for deg? Skriv én nyansert setning', hint: 'Det er helt greit å skrive «usikker, men …». Vær ærlig, ikke bastant.', rader: 2 }
      ] },
      { tittel: k.navn + ': Del og reflekter', tid: '12 min', blokker: [
        { type: 'instruks', tid: '5 min', tekst: 'Fortell kort til en medelev hvilket yrke du valgte, og hva som overrasket deg mest.' },
        { type: 'felt', id: p + '-tanke', label: 'En tanke fra samtalen', rader: 2 },
        { type: 'snakk', tittel: 'Tenk gjennom', tid: '7 min', sporsmal: k.refl },
        { type: 'felt', id: p + '-exit', label: 'Exit-ticket: «' + k.navn + ' er interessant / ikke interessant for meg fordi …»', rader: 3 }
      ] }
    ];
  }

  var tek = fagfelt({ pre: 't', navn: 'Teknologi',
    programmer: 'Fagfeltet omfatter Teknologi- og industrifag, Elektro og datateknologi, og Informasjonsteknologi og medieproduksjon.',
    yrker: ['industrimekaniker', 'elektriker', 'IT-tekniker', 'programmerer', 'produksjonstekniker'],
    startSporsmal: 'Hva forbinder du med teknologi?', startHint: 'Skriv stikkord. Du kan sortere dem i: maskiner, data, mennesker, produksjon, kreativitet og problemløsing.',
    lenkeTekst: 'Yrkesfaghåndboka på Utdanning.no', lenke: 'https://utdanning.no/yrkesfag',
    h: ['Tenk på en vanlig arbeidsdag. Hvilke oppgaver går igjen?', 'Bedrifter, offentlig sektor, egen virksomhet? Lokalt i Rogaland eller andre steder i landet?', 'Hvilket Vg1 og Vg2 leder dit? Er det læretid (lærling) i en bedrift etterpå?', 'Praktiske ferdigheter, tekniske kunnskaper, personlige egenskaper, eller alt sammen?', 'Fysisk krevende? Må man holde seg faglig oppdatert? Nøyaktighet og sikkerhet?'],
    refl: ['Hva overrasket deg?', 'Hvilken del av fagfeltet virker mest interessant?', 'Hvilke av dine egne styrker kan være relevante her?'] });
  var hel = fagfelt({ pre: 'h', navn: 'Helse og oppvekst',
    programmer: 'Fagfeltet er Helse- og oppvekstfag.',
    yrker: ['helsefagarbeider', 'ambulansearbeider', 'barne- og ungdomsarbeider', 'apotektekniker', 'tannhelsesekretær'],
    startSporsmal: 'Skriv tre ord du forbinder med «å jobbe med mennesker»', startHint: 'Diskuter deretter: handler helse- og oppvekstarbeid bare om å være omsorgsfull, eller krever det mer enn det?',
    lenkeTekst: 'Utforsk utdanningsprogrammene på Utdanning.no', lenke: 'https://utdanning.no/utdanningsvalg_artikkel_utforsk_utdanningsprogrammene',
    h: ['Tenk på en vanlig arbeidsdag. Hvem møter man, og hvilke oppgaver går igjen?', 'Sykehus, skole, barnehage, sykehjem, apotek? Offentlig eller privat?', 'Hvilket Vg1 og Vg2 leder dit? Er det læretid (lærling) etterpå, eller mer skole?', 'Faglige kunnskaper, men også personlige egenskaper som tålmodighet eller samarbeid?', 'Arbeidstider (skift og helg)? Følelsesmessig krevende situasjoner? Ansvar for andre?'],
    refl: ['Hva overrasket deg?', 'Hva tror du er viktigst i møte med mennesker?', 'Hva kan være krevende med denne typen arbeid?'] });
  var byg = fagfelt({ pre: 'b', navn: 'Bygg og anlegg',
    programmer: 'Fagfeltet er Bygg- og anleggsteknikk.',
    yrker: ['tømrer', 'rørlegger', 'maler', 'betongfagarbeider', 'vei- og anleggsmaskinarbeider'],
    startSporsmal: 'Skriv tre ting man må kunne for å bygge eller vedlikeholde hus, veier og andre byggverk', startHint: 'Tenk både på praktiske ferdigheter og det man må planlegge før man starter å bygge.',
    lenkeTekst: 'Yrkesfaghåndboka på Utdanning.no', lenke: 'https://utdanning.no/yrkesfag',
    h: ['Tenk på en vanlig arbeidsdag. Hvilke oppgaver går igjen, og hvor jobber man (inne eller ute)?', 'Byggefirma, egen virksomhet, kommune? Lokalt i Rogaland eller andre steder?', 'Hvilket Vg1 og Vg2 leder dit, og hvordan fungerer læretiden (lærling i en bedrift)?', 'Praktisk håndverk, nøyaktighet, fysisk styrke, samarbeid på byggeplass?', 'Fysisk krevende arbeid? Utendørs i all slags vær? Tunge tidsfrister?'],
    refl: ['Hva overrasket deg?', 'Hvilket yrke virker mest interessant?', 'Ville du likt å se et fysisk, synlig resultat av arbeidet ditt?'] });

  var sammenlign = { tittel: 'Sammenlign de tre fagfeltene', tid: 'Ca. 10 min', blokker: [
    { type: 'instruks', tekst: 'Se tilbake på de tre yrkeskortene dine fra økt 13–15 før du svarer.' },
    { type: 'felt', id: 's1', label: '1. Det fagfeltet som overrasket meg mest var … fordi …', hint: 'Hvilken økt var mest annerledes enn du trodde?', rader: 3 },
    { type: 'felt', id: 's2', label: '2. Det yrket jeg er mest nysgjerrig på nå er … fordi …', hint: 'Kan være et yrke fra et av yrkeskortene, eller et annet du tenkte på.', rader: 3 },
    { type: 'felt', id: 's3', label: '3. En ferdighet som går igjen i flere av fagfeltene er …', hint: 'For eksempel samarbeid, nøyaktighet eller problemløsing.', rader: 2 },
    { type: 'felt', id: 's4', label: '4. Noe jeg har lært om yrkesfag som jeg ikke visste fra før er …', hint: 'Kan være om utdanningsvei, arbeidsoppgaver eller noe annet som overrasket deg.', rader: 3 },
    { type: 'felt', id: 's5', label: '5. Dette vil jeg undersøke videre …', hint: 'Et yrke, en utdanning eller noe du vil spørre en rådgiver eller voksen om.', rader: 3 },
    { type: 'tekst', avsnitt: ['Ta vare på yrkeskortet fra hvert fagfelt. De skal brukes senere når du sammenligner utdanningsprogram og yrker videre i utdanningsvalg.'] }
  ] };

  window.UTV_OKT = {
    nr: 13, nrTekst: '13–15', gruppe: 'fagfelt', tittel: 'Fagfelt i fokus',
    ingress: 'Du utforsker tre fagfelt, ett per økt: teknologi, helse og oppvekst, og bygg og anlegg. Målet er å bli kjent med mulighetene, ikke å finne «det riktige» yrket med én gang.',
    steg: [].concat(
      [{ tittel: 'Slik bruker du denne siden', blokker: [
        { type: 'tekst', avsnitt: ['Hver økt følger de samme stegene:'] },
        { type: 'liste', nummerert: true, punkter: ['**Start:** skriv ned dine umiddelbare tanker og assosiasjoner (5 min).', '**Mitt mini-yrkeskort:** velg ett yrke, undersøk det og fyll ut kortet. Dette er hoveddelen av økta (20 min).', '**Del og reflekter:** snakk kort med en medelev om hva du fant, og avslutt med en exit-ticket (ca. 12 min).'] },
        { type: 'kort', kort: [
          { tittel: 'Økt 13', tekst: 'Teknologi' }, { tittel: 'Økt 14', tekst: 'Helse og oppvekst' }, { tittel: 'Økt 15', tekst: 'Bygg og anlegg' }] },
        { type: 'tekst', avsnitt: ['Du trenger vanligvis bare 1–2 setninger per felt.'] }
      ] }],
      tek, hel, byg, [sammenlign])
  };
})();
