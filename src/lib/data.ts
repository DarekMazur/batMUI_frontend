import { faker } from '@faker-js/faker/locale/ar';

export const db = [
  {
    id: faker.string.uuid(),
    question: 'Kto jest Batmanem',
    ans1: 'Clark Kent',
    ans2: 'Hall Jordan',
    ans3: 'Bruce Wayne',
    ans4: 'Barry Allen',
    check: 'Bruce Wayne',
    isBonus: false,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515413/1_rk9jfu.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Z jakiego miasta pochodzi Batman',
    ans1: 'Gotham City',
    ans2: 'Star City',
    ans3: 'Metropolis',
    ans4: 'Central City',
    check: 'Gotham City',
    isBonus: false,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515414/2_azpjdb.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Jeden z przeciwników Batmana jest znany z zagadek. Kto',
    ans1: 'Joker',
    ans2: 'Killer Crock',
    ans3: 'Riddler',
    ans4: 'Poison Ivy',
    check: 'Riddler',
    isBonus: false,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515414/3_ck6dku.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Kogo nazywano "Cudownym Chłopcem"',
    ans1: 'Młodego Bruce&#39;a Wayne&#39;a',
    ans2: 'Robina',
    ans3: 'Jima Gordona',
    ans4: 'Komisarza Loeba',
    check: 'Robina',
    isBonus: false,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515411/4_afiitw.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Zanim Dick Greyson został Robinem był',
    ans1: 'Kucharzem w Big Belly Burger',
    ans2: 'Genialnym hakerem',
    ans3: 'Zwykłym nastolatkiem',
    ans4: 'Cyrkowcem',
    check: 'Cyrkowcem',
    isBonus: false,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515412/5_infwle.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Jak miała na imię matka Bruce&#39;a',
    ans1: 'Marie',
    ans2: 'Martha',
    ans3: 'Monica',
    ans4: 'Margaret',
    check: 'Martha',
    isBonus: false,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515412/6_fd9qjb.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Kim był z zawodu Thomas Wayne',
    ans1: 'Lekarzem',
    ans2: 'Prawnikiem',
    ans3: 'Inżynierem',
    ans4: 'Chemikiem',
    check: 'Lekarzem',
    isBonus: false,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515412/7_unpvrc.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Jak zginęli rodzice Bruce&#39;a Wayne&#39;a',
    ans1: 'W wypadku samochodowym',
    ans2: 'Byli w budynku, gdzie mafia podłożyła bombę',
    ans3: 'Zastrzelił ich złodziej',
    ans4: 'W wypadku lotniczym',
    check: 'Zastrzelił ich złodziej',
    isBonus: false,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515412/8_dhqvjt.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Jak Bruce poznał Alfreda',
    ans1: 'Podczas zagranicznej podróży.',
    ans2: 'Znał go od urodzenia.',
    ans3: 'Bruce uratował Alfreda przed bandytami.',
    ans4: 'W restauracji.',
    check: 'Znał go od urodzenia.',
    isBonus: false,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515413/9_vrrdwm.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Jak nazywano Batmana i Robina',
    ans1: 'Rycerze Nocy',
    ans2: 'Skrzydlaci Obrońcy',
    ans3: 'Liga Sprawiedliwości',
    ans4: 'Dynamiczny Duet',
    check: 'Dynamiczny Duet',
    isBonus: false,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515413/10_xzm97u.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Jakie jest prawdziwe imię Catwoman',
    ans1: 'Pamela Isley',
    ans2: 'Selina Kyle',
    ans3: 'Harleen Quinzel',
    ans4: 'Vicky Vale',
    check: 'Selina Kyle',
    isBonus: false,
    level: 'Normal',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515492/1_kmldxl.jpg'
  },
  {
    id: faker.string.uuid(),
    question:
      'Która z wymienionych postaci nigdy nie zastępowała Bruce&#39;a Wayne&#39;a w roli Batmana',
    ans1: 'Jim Gordon',
    ans2: 'Dick Greyson',
    ans3: 'Jean Paul Valley',
    ans4: 'Harvey Bullock',
    check: 'Harvey Bullock',
    isBonus: false,
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515490/2_ks6cq4.jpg'
  },
  {
    id: faker.string.uuid(),
    question:
      'Batman po raz pierwszy pojawił się w numerze Detective Comics vol. 1 #27 z maja 1939 roku. Kiedy numer trafił do sprzedarzy',
    ans1: '17 marca &#39;39',
    ans2: '18 kwietnia &#39;39',
    ans3: '7 maja &#39;39',
    ans4: '1 czerwca &#39;39',
    check: '18 kwietnia &#39;39',
    isBonus: false,
    level: 'Normal',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515490/3_vwmtkp.jpg'
  },
  {
    id: faker.string.uuid(),
    question:
      'Zanim Joker stał się znany pod obecną postacią, także był przestępcą. Jaki nosił przydomek',
    ans1: 'Bad Clown',
    ans2: 'Red Hood',
    ans3: 'Verdigo',
    ans4: 'Venom',
    check: 'Red Hood',
    isBonus: false,
    level: 'Normal',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515490/4_notahi.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Alfred Pennyworth, zanim został kamerdynerem rodziny Wayne&#39;ów był m. in.',
    ans1: 'aktorem',
    ans2: 'kucharzem',
    ans3: 'muzykiem',
    ans4: 'kelnerem',
    check: 'aktorem',
    isBonus: false,
    level: 'Normal',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515413/9_etk3lr.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Damian Wayne był synemm Bruce&#39;a oraz',
    ans1: 'Seliny Kyle',
    ans2: 'Barbary Gordon',
    ans3: 'Talii al-Ghul',
    ans4: 'Jezebel Jet',
    check: 'Talii al-Ghul',
    isBonus: false,
    level: 'Normal',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515491/6_rohrd9.jpg'
  },
  {
    id: faker.string.uuid(),
    question:
      'Dick Greyson, kiedy odłożył kostium Robina i został Nightwingiem, przeniósł się do innego miasta. Jakiego',
    ans1: 'Star City',
    ans2: 'Blüdheaven',
    ans3: 'Coast City',
    ans4: 'Żadnego, został w Gotham',
    check: 'Blüdheaven',
    isBonus: false,
    level: 'Normal',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515491/7_lz8pty.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Jedną z dwóch osób, które stworzyły postać Batmana był Bob Kane. Wspólnie z kim',
    ans1: 'Bill Finger',
    ans2: 'Stan Lee',
    ans3: 'Mort Weisinger',
    ans4: 'Joe Shuster',
    check: 'Bill Finger',
    isBonus: false,
    level: 'Normal',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515492/8_ffjtcb.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Jason Todd, drugi z Robinów, został zabity przez',
    ans1: 'Bane&#39;a',
    ans2: 'Jockera',
    ans3: 'Riddlera',
    ans4: 'Pingwina',
    check: 'Jockera',
    isBonus: false,
    level: 'Normal',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515491/9_c3grvr.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Zanim Hervey Dent został Two Face&#39;em, pełnił funkcję',
    ans1: 'Komisarza Policji Gotham',
    ans2: 'Kongresmana',
    ans3: 'Burmistrza Gotham',
    ans4: 'Prokuratora Generalnego Gotham',
    check: 'Prokuratora Generalnego Gotham',
    isBonus: false,
    level: 'Normal',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515492/10_m7nqy4.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Kiedy ukazał się komiks Batman #1',
    ans1: 'maj &#39;39',
    ans2: 'kwiecień &#39;40',
    ans3: 'lipiec &#39;41',
    ans4: 'kwiecień &#39;43',
    check: 'kwiecień &#39;40',
    isBonus: false,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515463/1_lef7vj.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'W którym numerze po raz pierwszy pojawiła się postać Alfreda',
    ans1: 'maj &#39;39',
    ans2: 'kwiecień &#39;40',
    ans3: 'lipiec &#39;41',
    ans4: 'kwiecień &#39;43',
    check: 'kwiecień &#39;43',
    isBonus: false,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515463/1_lef7vj.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Ile lat miał Bruce Wayne w pierwszym tomie "Powrotu Mrocznego Rycerza"',
    ans1: '29',
    ans2: '35',
    ans3: '50',
    ans4: '61',
    check: '50',
    isBonus: false,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515463/3_bplpg1.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Kto w "Kryzysie Torzsamości" zabił ojca Tima Drake&#39;a',
    ans1: 'Captain Cold',
    ans2: 'Mirror Master',
    ans3: 'Captain Boomerang',
    ans4: 'Grodd',
    check: 'Captain Boomerang',
    isBonus: false,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515464/4_wodzrn.jpg'
  },
  {
    id: faker.string.uuid(),
    question:
      'W "Wieży Babel" Ra&#39;s Al-Ghoul wykradł plany Batmana i użył do pokonania Ligi Sprawiedliwości. Co zrobił, żeby zając w tym czasie Bruce&#39;a',
    ans1: 'Rozpylił radioaktywny gaz w Jaskini Nietoperza',
    ans2: 'Porwał Alfreda',
    ans3: 'Podłożył bombę atomową w Gotham',
    ans4: 'Ukradł trumny z ciałami jego rodziców',
    check: 'Ukradł trumny z ciałami jego rodziców',
    isBonus: false,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515464/5_lq12tx.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Jak w historii "Zagłada Gotham" miał na nazwisko ekscentryczny badacz nietoperzy',
    ans1: 'Manfurd',
    ans2: 'Prinn',
    ans3: 'Langstrom',
    ans4: 'Queen',
    check: 'Langstrom',
    isBonus: false,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515464/6_nd4kux.jpg'
  },
  {
    id: faker.string.uuid(),
    question:
      'Jak nazywał się przedsiębiorca, który w komiksie Detective Comics #27 z maja 1939 roku próbował zamordować swoich wspólników',
    ans1: 'Alfred Stryker',
    ans2: 'Paul Rotgers',
    ans3: 'Steven Crane',
    ans4: 'James Lambert',
    check: 'Alfred Stryker',
    isBonus: false,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515464/7_tetpvl.jpg'
  },
  {
    id: faker.string.uuid(),
    question:
      'Jak miała na imię pielęgniarką, którą w komiksie "Azyl Arkham" Joker wykorzystał do sprowadzenia Batmana',
    ans1: 'Martha',
    ans2: 'Pearl',
    ans3: 'Jenny',
    ans4: 'Daisy',
    check: 'Pearl',
    isBonus: false,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515464/8_r7mjeo.jpg'
  },
  {
    id: faker.string.uuid(),
    question:
      'W komiksie Batman #20 z serii New52 pojawia się prototyp charakterystycznego stroju Batmana. Z jakiej serii pochodzi',
    ans1: 'Powrót Mrocznego Rycerza',
    ans2: 'Batman Beyond',
    ans3: 'Batman Incorporated',
    ans4: 'Flashpoint Paradox',
    check: 'Batman Beyond',
    isBonus: false,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515464/9_iiopvz.jpg'
  },
  {
    id: faker.string.uuid(),
    question:
      'W komiksie Batman #2 z serii New52 Mroczny Rycerz znajduje trop ukryty w zębie ofiary zabójstwa. Który to był ząb',
    ans1: 'Lewa czwórka',
    ans2: 'Prawa górna jedynka',
    ans3: 'Trzeci ząb trzonowy',
    ans4: 'Lewy ząb mądrości',
    check: 'Trzeci ząb trzonowy',
    isBonus: false,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515464/10_cwzn6f.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Kto podkładał głos Jokera w serii animowanej o Batmanie',
    ans1: 'Mark Hamil',
    ans2: 'Heath Ledger',
    ans3: 'Kevin Conroy',
    ans4: 'Jack Nicholson',
    check: 'Mark Hamil',
    isBonus: true,
    level: 'Easy',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515413/bonus_nglsyf.jpg'
  },
  {
    id: faker.string.uuid(),
    question: 'Jakie koty w komiskie Batman: Rok Pierwszy miała Selina Kyle',
    ans1: 'dachowce',
    ans2: 'persy',
    ans3: 'syjamy',
    ans4: 'nie miała kotów',
    check: 'syjamy',
    isBonus: true,
    level: 'Normal',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515492/bonus_slk1ea.jpg'
  },
  {
    id: faker.string.uuid(),
    question:
      'W serii "Śmierć w rodzinie" o losach Robina zadecydowani czytelnicy w głosowaniu telefonicznym. Dzwoniąc pod numer 1-(900) 720 2660 głosowało się za ocaleniem Jaysona Todda. Pod jaki numer trzeba było zadzwonić, aby zagłosować przeciwko Robinowi',
    ans1: '1-(900) 720 2664',
    ans2: '1-(900) 720 2666',
    ans3: '1-(900) 720 2668',
    ans4: '1-(900) 720 2670',
    check: '1-(900) 720 2666',
    isBonus: true,
    level: 'Hard',
    img: 'https://res.cloudinary.com/ddyqnp7pp/image/upload/v1726515465/bonus_up8ivf.jpg'
  }
];
