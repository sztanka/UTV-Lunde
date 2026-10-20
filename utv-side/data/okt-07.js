window.UTV_OKT = {
  nr: 7, gruppe: 'arbeid', tittel: 'Arbeidslivet',
  ingress: 'Hvor jobber folk, og hvordan kan arbeidslivet se ut i fremtiden?',
  mal: [
    'forklare forskjellen på offentlig, privat og frivillig sektor',
    'kjenne igjen ulike bransjer og arbeidsområder',
    'se sammenhengen mellom bransjer, virksomheter og yrker',
    'kjenne til noen utviklingstrekk som kan påvirke fremtidens arbeidsliv',
    'undersøke en bransje og reflektere over hvilke behov den kan ha i fremtiden'],
  steg: [
    { tittel: 'Hvem jobber hvor?', blokker: [
      { type: 'instruks', avsnitt: ['Gå sammen i grupper på 3–4. Lag en liste med steder i nærmiljøet der folk jobber.', 'Del arbeidsplassene inn i tre kategorier. Hva skal inn hvor, og hva betyr kategoriene?'] },
      { type: 'sorter', id: 'sektor', label: 'Offentlig, privat eller frivillig?', kategorier: ['Offentlig', 'Privat', 'Frivillig'], elementer: [
        'skoler', 'barnehager', 'butikker', 'sykehjem', 'sykehus', 'håndverksbedrifter', 'restauranter', 'gårder', 'treningssentre', 'banker', 'transportfirma', 'hoteller', 'teknologibedrifter', 'kommunen', 'politi', 'frivillige organisasjoner', 'idrettslag'] }
    ] },

    { tittel: 'Hvordan er arbeidslivet organisert?', blokker: [
      { type: 'kort', kort: [
        { tittel: 'Offentlig sektor', tekst: 'Arbeidsplasser som drives av stat, fylkeskommune eller kommune.', punkter: ['skole', 'sykehus', 'politi', 'barnevern', 'NAV', 'kommuneadministrasjon', 'kollektivtransport i enkelte sammenhenger'] },
        { tittel: 'Privat sektor', tekst: 'Bedrifter og virksomheter som eies av private aktører.', punkter: ['butikker', 'restauranter', 'håndverksbedrifter', 'teknologibedrifter', 'industribedrifter', 'banker', 'transportbedrifter', 'konsulentselskaper'] },
        { tittel: 'Frivillig sektor', tekst: 'Organisasjoner og aktiviteter som i stor grad bygger på frivillig innsats.', punkter: ['idrettslag', 'korps', 'kulturforeninger', 'hjelpeorganisasjoner', 'ulike interesseorganisasjoner'] }] },
      { type: 'poeng', tekst: 'Én arbeidsplass kan ha mange forskjellige yrker.' }
    ] },

    { tittel: 'Bransje: hva betyr det?', blokker: [
      { type: 'snakk', intro: 'Hva tror du? Snakk med partneren din.', sporsmal: [] },
      { type: 'avslor', sporsmal: 'Vis forklaringen', svar: ['En bransje er en gruppe virksomheter som arbeider innenfor et bestemt område. Eksempel: restaurantbransjen.'] },
      { type: 'ord', tittel: 'Andre eksempler', ord: ['helse og omsorg', 'bygg og anlegg', 'teknologi og IT', 'transport', 'reiseliv', 'restaurant og mat', 'energi', 'industri', 'handel', 'undervisning', 'kultur og medier'] },
      { type: 'flyt', trinn: ['Bransje', 'virksomheter', 'yrker'] }
    ] },

    { tittel: 'Fremtidens arbeidsliv', blokker: [
      { type: 'poeng', tekst: 'Vi vet ikke nøyaktig hvilke jobber som finnes om 10–20 år. Men vi kan se noen utviklingstrekk som sannsynligvis vil påvirke arbeidslivet.' },
      { type: 'kort', kort: [
        { tittel: 'Teknologi og kunstig intelligens', tekst: 'Teknologi og automatisering kan overta eller endre enkelte arbeidsoppgaver. Men teknologi kan også:', punkter: ['skape nye arbeidsoppgaver', 'skape nye yrker', 'gjøre eksisterende yrker annerledes', 'gjøre at mennesker trenger nye ferdigheter', 'Hva tror du en lærer gjør annerledes om 10 år på grunn av teknologi?'] },
        { tittel: 'Klima og grønn omstilling', tekst: 'Overgangen til et mer bærekraftig samfunn påvirker blant annet energi, transport, bygg, industri, produksjon og teknologi.', punkter: ['Hvilke yrker kan bli viktige hvis vi skal bruke mindre energi og ressurser?'] },
        { tittel: 'Helse og omsorg', tekst: 'Et samfunn med flere eldre kan gi behov for mange typer kompetanse innen helse og omsorg.', punkter: ['Hvorfor trenger vi ikke bare leger og sykepleiere i helsevesenet?'] },
        { tittel: 'Kompetanse i endring', tekst: 'Det er ikke bare yrkene som endrer seg. Kravene og arbeidsoppgavene i mange yrker kan også endre seg. Derfor blir det viktig å kunne:', punkter: ['lære nye ting', 'samarbeide', 'løse problemer', 'bruke teknologi', 'kommunisere', 'tilpasse seg endringer'] }] }
    ] },

    { tittel: 'Oppgave: Fremtidsbransjen', blokker: [
      { type: 'instruks', avsnitt: ['Jobb i par. Begge undersøker, diskuterer og skriver. Skriv med egne ord, og bruk Utdanning.no som hovedkilde.', 'Det finnes ikke ett riktig svar på hva som skjer i fremtiden. Dere skal begrunne tankene deres. Til slutt presenterer dere på maks 2 minutter, uten PowerPoint.'] },
      { type: 'lenke', tekst: 'Åpne utdanning.no', url: 'https://utdanning.no/' },
      { type: 'lenke', tekst: 'Yrkesfaghåndboka', url: 'https://utdanning.no/yrkesfag', merknad: 'På Utdanning.no' },
      { type: 'felt', id: 'par', label: 'Navn på dere som jobber sammen', rader: 1 },
      { type: 'valg', id: 'bransje', maks: 1, label: '1. Velg en bransje', hint: 'Du trenger ikke velge en bransje du allerede kjenner.', valg: ['Helse og omsorg', 'Teknologi og IT', 'Bygg og anlegg', 'Energi', 'Transport', 'Reiseliv', 'Restaurant og mat', 'Handel', 'Industri', 'Media og kommunikasjon', 'Naturbruk', 'Kultur', 'Undervisning', 'Økonomi og administrasjon'] },
      { type: 'felt', id: 'annen', label: 'Eller en annen bransje dere er nysgjerrige på', hint: 'Valgfritt.', rader: 1 },
      { type: 'liste-felt', id: 'yrker', label: '2. Finn minst fem yrker i bransjen', hint: 'Tenk bredt.', antall: 5, plassholder: 'Yrke' },
      { type: 'tekst', tittel: '3. Undersøk to av yrkene', avsnitt: ['Velg to av yrkene over og finn ut hva de innebærer. Søk etter yrket på Utdanning.no, og se etter arbeidsoppgaver, arbeidssteder og utdanningsvei.'] },
      { type: 'gjenta', id: 'y', tittel: 'Yrke', antall: 2, felt: [
        { type: 'felt', id: 'navn', label: 'Hvilket yrke?', tittel: true, rader: 1 },
        { type: 'felt', id: 'gjor', label: 'Hva gjør man?', hint: 'Skriv 2–3 arbeidsoppgaver.', rader: 2 },
        { type: 'felt', id: 'hvor', label: 'Hvor kan man jobbe?', rader: 2 },
        { type: 'felt', id: 'utd', label: 'Hvilken utdanning kan være aktuell?', rader: 2 }] },
      { type: 'tekst', tittel: '4. Hva tror dere skjer i fremtiden?', avsnitt: ['Tenk dere at dere ser på bransjen om omtrent 10 år. Hva kan bransjen trenge mer av? Finn minst to forslag og begrunn dem. Hvordan kan teknologi og AI, klima og miljø, helse og demografi eller andre samfunnsendringer påvirke bransjen?'] },
      { type: 'gjenta', id: 'f', tittel: 'Forslag', antall: 2, felt: [
        { type: 'felt', id: 'forslag', label: 'Forslaget', tittel: true, rader: 1 },
        { type: 'felt', id: 'hvorfor', label: 'Hvorfor tror dere dette?', rader: 3 }] },
      { type: 'valg', id: 'egenskaper', maks: 3, label: '5. Hvilke egenskaper kan bli viktige?', hint: 'Velg tre egenskaper dere tror kan være spesielt nyttige i bransjen.', valg: ['kreativitet', 'samarbeid', 'problemløsning', 'praktiske ferdigheter', 'teknologiforståelse', 'omsorg', 'nøyaktighet', 'kommunikasjon', 'ledelse', 'selvstendighet', 'utholdenhet', 'læringsvilje'] },
      { type: 'felt', id: 'egenskap-hvorfor', label: 'Hvorfor tror dere disse egenskapene kan bli viktige?', rader: 3 },
      { type: 'felt', id: 'l1', label: '6. Én ting vi ikke visste fra før', rader: 2 },
      { type: 'felt', id: 'l2', label: 'Det mest overraskende vi fant ut', rader: 2 },
      { type: 'felt', id: 'l3', label: 'Et yrke vi ble mer nysgjerrige på', rader: 2 }
    ] },

    { tittel: 'Presentasjon: 2 minutter per par', blokker: [
      { type: 'instruks', tekst: 'Begge skal si noe. Bruk svarene dine over som notater. Du trenger ikke lage PowerPoint.' },
      { type: 'liste', nummerert: true, tittel: 'Dette skal presentasjonen inneholde', punkter: ['Vår fremtidsbransje', 'Tre til fem yrker i bransjen', 'Noe vi lærte', 'Dette tror vi bransjen trenger i fremtiden', 'En egenskap som kan bli viktig'] },
      { type: 'tekst', avsnitt: ['Før dere presenterer: sjekk at dere har svart på alle delene, og at dere kan forklare hvorfor dere tror det dere tror. Dere skal ikke spå fremtiden perfekt. Dere skal øve på å undersøke, tenke og begrunne.'] }
    ] },

    { tittel: 'Refleksjon', blokker: [
      { type: 'snakk', sporsmal: ['Er det bransjer du aldri hadde tenkt på som et mulig arbeidssted?', 'Hvilke bransjer tror dere kommer til å endre seg mest?', 'Er det noen yrker som kan forsvinne eller bli veldig annerledes?', 'Kan teknologi gjøre noen jobber bedre uten å fjerne dem?', 'Hva tror dere mennesker fortsatt kommer til å være bedre på enn maskiner?'] },
      { type: 'felt', id: 'refl', label: 'Min viktigste tanke fra samtalen', hint: 'Valgfritt.', rader: 3 }
    ] }
  ]
};
