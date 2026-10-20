window.UTV_OKT = {
  nr: 6, gruppe: 'arbeid', tittel: 'Hva er et yrke?',
  ingress: 'Jobb, yrke og karriere: hva er egentlig forskjellen?',
  mal: [
    'forklare med egne ord forskjellen på jobb, yrke og karriere',
    'forstå at et yrke vanligvis innebærer kompetanse og kunnskap som utvikles gjennom utdanning og/eller erfaring',
    'undersøke et yrke og finne informasjon om arbeidsoppgaver og utdanningsvei',
    'reflektere over hva som kan gjøre at et yrke passer eller ikke passer for deg',
    'forstå at yrkesvalg ikke nødvendigvis er et valg for resten av livet'],
  steg: [
    { tittel: 'Jobb, yrke eller noe annet?', blokker: [
      { type: 'instruks', tekst: 'Sett hver situasjon i en kategori. Det kan være flere riktige svar, så du kan velge mer enn én. Snakk med partneren din om hva som er forskjellen på jobb, yrke og karriere.' },
      { type: 'sorter', id: 'sort', flere: true, label: 'Hvilken kategori passer?', kategorier: ['Jobb', 'Yrke', 'Karriere'], elementer: [
        'En 15-åring passer naboens barn og får 150 kroner.',
        'En person jobber på en kafé etter skoletid.',
        'En elektriker arbeider med installasjoner i hus.',
        'En person har vært lærer i 15 år, men begynner å utdanne seg til psykolog.',
        'En ungdom trener et fotballag frivillig.',
        'En person jobber som butikkmedarbeider i sommerferien.',
        'En sykepleier arbeider på sykehus.',
        'En person starter sin egen bedrift.',
        'En person har hatt fem forskjellige jobber siden han var 20 år.'] },
      { type: 'poeng', tekst: 'En jobb kan være noe du gjør akkurat nå for å tjene penger. Et yrke sier mer om kompetansen og arbeidsområdet ditt. En karriere handler om utviklingen over tid.' }
    ] },

    { tittel: 'Hva er egentlig forskjellen?', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Jobb', tekst: 'Arbeid du gjør, ofte mot betaling. Du trenger ikke nødvendigvis ha utdanning.', punkter: ['midlertidig', 'deltid', 'sommerjobb', 'ekstrajobb', 'fast jobb', 'Eksempel: «Jeg har jobb på en kafé.»'] },
        { tittel: 'Yrke', tekst: 'Et arbeidsområde eller en faglig rolle som ofte krever bestemte kunnskaper og ferdigheter. Det kan kreve utdanning, praksis, kurs eller sertifiseringer.', punkter: ['elektriker', 'frisør', 'sykepleier', 'lærer', 'tømrer', 'kokk', 'ingeniør', 'helsefagarbeider', 'programmerer'] },
        { tittel: 'Karriere', tekst: 'Utviklingen gjennom arbeidslivet. Den trenger ikke være en rett linje.', punkter: ['utdanning, første jobb, mer erfaring, ny jobb, mer utdanning, nytt arbeidsområde'] }] },
      { type: 'flyt', tittel: 'Eksempel på en karriere', trinn: ['Lærling', 'Fagarbeider', 'Arbeidsleder', 'Mer utdanning', 'En annen type jobb'] },
      { type: 'poeng', tekst: 'Du trenger ikke vite hva du skal jobbe med resten av livet. Utdanningsvalg handler ikke om å bestemme hele karrieren din. Det handler om å bli kjent med mulighetene dine.' }
    ] },

    { tittel: 'Yrkesvideoer', blokker: [
      { type: 'liste', tittel: 'Se etter:', punkter: ['Hva gjør personen i løpet av en vanlig arbeidsdag?', 'Hvilken kompetanse trenger personen?', 'Hva virker interessant eller overraskende?'] },
      { type: 'lenke', tekst: 'Sivilingeniør', url: 'https://vimeo.com/1119354916', merknad: 'Video på Vimeo' },
      { type: 'lenke', tekst: 'Rørlegger', url: 'https://vimeo.com/1176141868', merknad: 'Video på Vimeo' },
      { type: 'lenke', tekst: 'Automatiker', url: 'https://vimeo.com/1119220575', merknad: 'Video på Vimeo' },
      { type: 'lenke', tekst: 'Jordmor', url: 'https://vimeo.com/1112309207', merknad: 'Video på Vimeo' },
      { type: 'lenke', tekst: 'Intervju: flygeleder', url: 'https://utdanning.no/tema/yrkesintervju/flygeleder', merknad: 'Utdanning.no' },
      { type: 'felt', id: 'video', label: 'Hva lærte jeg om yrket som jeg ikke visste fra før?', rader: 3 }
    ] },

    { tittel: 'Yrkesportrett', blokker: [
      { type: 'instruks', avsnitt: ['Undersøk et yrke du er nysgjerrig på.', 'Bruk Utdanning.no. Hvis du undersøker et yrkesfaglig yrke, kan du bruke Yrkesfaghåndboka.'] },
      { type: 'lenke', tekst: 'Åpne utdanning.no', url: 'https://utdanning.no/' },
      { type: 'lenke', tekst: 'Yrkesfaghåndboka', url: 'https://utdanning.no/yrkesfag', merknad: 'På Utdanning.no' },
      { type: 'felt', id: 'yrke', label: 'Yrke', rader: 1 },
      { type: 'felt', id: 'gjor', label: '1. Hva gjør man i dette yrket?', hint: 'Skriv med dine egne ord. Hvilke arbeidsoppgaver har man? Hvor kan man jobbe?', rader: 4 },
      { type: 'ord', tittel: 'Eksempler på hva man må kunne', ord: ['være nøyaktig', 'kunne samarbeide', 'løse problemer', 'være kreativ', 'kunne bruke verktøy', 'være god med mennesker', 'kunne planlegge', 'tåle stress'] },
      { type: 'liste-felt', id: 'kunne', label: '2. Hva må man kunne?', hint: 'Finn minst tre ting som kan være viktige i yrket.', antall: 3, plassholder: 'I dette yrket er det viktig å kunne …' },
      { type: 'felt', id: 'vei', label: '3. Hvordan kommer man dit?', hint: 'Hvilken utdanning eller utdanningsvei kan føre til yrket? Du trenger ikke skrive alle detaljer.', rader: 3 },
      { type: 'flyt', trinn: ['Ungdomsskole', 'Videregående', 'Videre utdanning eller læretid', 'Yrke'] },
      { type: 'felt', id: 'overrasket', label: '4. Hva overrasket meg?', hint: 'Jeg ble overrasket over at …', rader: 2 },
      { type: 'valg', id: 'passer', label: '5. Passer dette litt til meg?', hint: 'Velg ett eller flere.', valg: ['Dette virker interessant', 'Jeg liker arbeidsoppgavene', 'Jeg tror jeg kunne vært god på noe av dette', 'Jeg liker arbeidsmiljøet', 'Utdanningsveien virker interessant', 'Jeg er fortsatt usikker', 'Dette passer egentlig ikke meg'] },
      { type: 'felt', id: 'hvorfor', label: 'Hvorfor?', rader: 2 }
    ] },

    { tittel: 'Ikke bare velg drømmeyrket …', blokker: [
      { type: 'instruks', tekst: 'Finn et yrke du ikke tror passer deg, og undersøk de samme tingene som i yrkesportrettet.' },
      { type: 'felt', id: 'ikke-yrke', label: 'Yrket jeg undersøkte', rader: 1 },
      { type: 'felt', id: 'ikke1', label: 'Var yrket slik du trodde?', rader: 2 },
      { type: 'felt', id: 'ikke2', label: 'Var det noe som overrasket deg?', rader: 2 },
      { type: 'felt', id: 'ikke3', label: 'Var det noe du faktisk kunne likt?', rader: 2 },
      { type: 'felt', id: 'ikke4', label: 'Hvorfor hadde du først tenkt at det ikke passet deg?', rader: 2 }
    ] },

    { tittel: 'Refleksjon: Hva gjør et yrke til «mitt»?', blokker: [
      { type: 'snakk', sporsmal: ['Hva gjør at et yrke kan passe for en person?', 'Kan du bli god til noe uten å like det?', 'Kan et yrke passe deg nå, men ikke passe deg senere?'] },
      { type: 'felt', id: 'refl', label: 'Mine stikkord', rader: 4 }
    ] }
  ]
};
