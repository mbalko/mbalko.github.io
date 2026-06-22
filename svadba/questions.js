/**
 * Rozlučková — Databáze otázek
 *
 * Téma: svatby, láska, české tradice, pop-kultura
 *
 * Formát otázky:
 *   q         – text otázky
 *   a         – pole čtyř odpovědí [A, B, C, D]
 *   correct   – index správné odpovědi (0 = A, 1 = B, 2 = C, 3 = D)
 *   difficulty – obtížnost 1–5 (hra vybere 3 náhodné z každé úrovně → 15 otázek)
 *
 * TIP: Přidejte vlastní otázky o nevěstě — jméno partnera, kde se poznali,
 *      oblíbená písnička, první dovolená apod.
 */

const QUESTIONS_DB = [
  {
    "q": "Co je to \"pytlačení\"?",
    "a": [
      "Ženich krade nevěstu z domu",
      "Ženicha zabalí do pytle",
      "Ženich tajně žádá otce o ruku",
      "Kamarádi ženicha kradou nevěstu během hostiny"
    ],
    "correct": 3,
    "difficulty": 1
  },
  {
    "q": "Jak se pozná, že je vejce čerstvé, bez rozbití?",
    "a": [
      "Ponoříš do vody — čerstvé klesne ke dnu",
      "Zatřepeš — čerstvé nedělá zvuk",
      "Podíváš se proti světlu",
      "Všechny tři fungují"
    ],
    "correct": 3,
    "difficulty": 1
  },
  {
    "q": "Co NESMÍ do mikrovlnky?",
    "a": [
      "Alobalová krabička",
      "Porcelánový talíř",
      "Skleněná mísa",
      "Ženichovy ponožky"
    ],
    "correct": 0,
    "difficulty": 1
  },
  {
    "q": "Co je \"helikoptérový rodič\"?",
    "a": [
      "Rodič, který neustále krouží a kontroluje",
      "Rodič, který dítě vozí všude autem",
      "Rodič, který dítě učí létat",
      "Rodič, který pracuje u letectva"
    ],
    "correct": 0,
    "difficulty": 1
  },
  {
    "q": "Jaký je správný poměr rýže a vody při vaření?",
    "a": [
      "1:1",
      "1:1,5",
      "1:2",
      "Na oko a doufat"
    ],
    "correct": 2,
    "difficulty": 1
  },
  {
    "q": "Proč ženich tradičně přenáší nevěstu přes práh?",
    "a": [
      "Aby nezakopla — smůla",
      "Aby duchové předků nepoznali cizí osobu",
      "Ukazuje, že ji uživí",
      "Aby si neušpinila šaty"
    ],
    "correct": 1,
    "difficulty": 2
  },
  {
    "q": "Proč v Rusku nikdy nedáváš sudý počet květin?",
    "a": [
      "Sudý počet patří mrtvým — na pohřby",
      "Sudý je neslušný",
      "Přináší smůlu",
      "Lichý je symbol lásky"
    ],
    "correct": 0,
    "difficulty": 2
  },
  {
    "q": "Co se stane, když přesolíš polévku? (Babiččin trik)",
    "a": [
      "Přidáš syrovou bramboru — nasaje sůl",
      "Přidáš cukr — vyváží chuť",
      "Přileješ vodu",
      "A funguje, B je mýtus"
    ],
    "correct": 3,
    "difficulty": 2
  },
  {
    "q": "Na formální večeři máš tři vidličky. Kterou bereš první?",
    "a": [
      "Tu nejblíž k talíři",
      "Tu nejdál od talíře",
      "Prostřední",
      "Počkáš, co udělají ostatní"
    ],
    "correct": 1,
    "difficulty": 2
  },
  {
    "q": "Jaký hormon se uvolňuje při orgasmu — \"hormon lásky\"?",
    "a": [
      "Adrenalin",
      "Oxytocin",
      "Serotonin",
      "Testosteron"
    ],
    "correct": 1,
    "difficulty": 2
  },
  {
    "q": "Co znamenalo, když nevěstě spadl při obřadu věneček z hlavy?",
    "a": [
      "Není panna",
      "Manželství nebude trvat",
      "Bude mít hodně dětí",
      "Špatně připnutý — nic to neznamená"
    ],
    "correct": 0,
    "difficulty": 3
  },
  {
    "q": "Proč v Číně nikdy nedáváš hodinky jako dárek?",
    "a": [
      "Jsou příliš osobní",
      "\"Darovat hodiny\" zní jako \"doprovázet na pohřeb\"",
      "Znamená to, že čas vypršel",
      "B i C — symbolizují smrt a konec"
    ],
    "correct": 3,
    "difficulty": 3
  },
  {
    "q": "Polévku dojídáš. Kam nakláníš talíř?",
    "a": [
      "K sobě — aby ses nepolil/a",
      "Od sebe — ke středu stolu",
      "Nenakláníš",
      "Záleží na typu polévky"
    ],
    "correct": 1,
    "difficulty": 3
  },
  {
    "q": "Jaká je průměrná délka sexuálního aktu bez předehry?",
    "a": [
      "2–3 minuty",
      "5–7 minut",
      "15–20 minut",
      "Hodina, jak tvrdí všichni chlapi"
    ],
    "correct": 1,
    "difficulty": 3
  },
  {
    "q": "Kolik procent párů uvádí pokles spokojenosti po prvním dítěti?",
    "a": [
      "Asi 30 %",
      "Asi 50 %",
      "Asi 67 %",
      "90 %, ale nikdo to nepřizná"
    ],
    "correct": 2,
    "difficulty": 3
  },
  {
    "q": "Na recepci v Buckinghamském paláci — kdy smíš jíst?",
    "a": [
      "Když dostaneš talíř",
      "Když začne král/královna",
      "Když všichni mají jídlo",
      "Když začne král — a když přestane, přestaneš taky"
    ],
    "correct": 3,
    "difficulty": 4
  },
  {
    "q": "Kolik procent žen dosáhne orgasmu čistě penetrací?",
    "a": [
      "Většina — 70 %",
      "Asi polovina — 50 %",
      "Asi čtvrtina — 25 %",
      "Asi 18 %"
    ],
    "correct": 3,
    "difficulty": 4
  },
  {
    "q": "Jaký je rozdíl mezi SJM a předmanželskou smlouvou?",
    "a": [
      "SJM je automatické, smlouva ho mění",
      "SJM je dobrovolné",
      "Smlouva ruší SJM úplně",
      "Totéž, jiný název"
    ],
    "correct": 0,
    "difficulty": 4
  },
  {
    "q": "Studená sprcha snižuje libido?",
    "a": [
      "Pravda — šok tělo vypne",
      "Blbost — zvyšuje prokrvení",
      "Krátkodobě ano, dlouhodobě ne",
      "Funguje jen na muže"
    ],
    "correct": 2,
    "difficulty": 4
  },
  {
    "q": "Jak dlouho trvá průměrný ženský orgasmus?",
    "a": [
      "5–8 sekund",
      "10–20 sekund",
      "20–35 sekund",
      "Záleží na partnerovi"
    ],
    "correct": 2,
    "difficulty": 4
  },
  {
    "q": "Čaj u královny — jak mícháš lžičkou?",
    "a": [
      "Dokola — jako vždy",
      "Dopředu a dozadu, nikdy dokola",
      "Nezáleží",
      "B — kroužení cinkne o porcelán, což je faux pas"
    ],
    "correct": 3,
    "difficulty": 5
  },
  {
    "q": "Na pozvánce na svatbu je \"M_______\". Co to znamená?",
    "a": [
      "Menu — vybereš si jídlo",
      "Předtištěný začátek pro Mr./Mrs./Ms. — doplníš jméno",
      "Místo — napíšeš, kde sedíš",
      "Zpráva pro novomanžele"
    ],
    "correct": 1,
    "difficulty": 5
  },
  {
    "q": "Kolik je roční daňové zvýhodnění na první dítě?",
    "a": [
      "12 000 Kč",
      "15 204 Kč",
      "19 404 Kč",
      "Záleží na příjmu"
    ],
    "correct": 1,
    "difficulty": 5
  },
  {
    "q": "Kolik svalů se zapojí při vášnivém polibku?",
    "a": [
      "2",
      "12",
      "34",
      "146"
    ],
    "correct": 2,
    "difficulty": 5
  },
  {
    "q": "Průměrný člověk stráví sexem za život asi kolik?",
    "a": [
      "2 dny",
      "2 týdny",
      "2 měsíce",
      "2 roky"
    ],
    "correct": 1,
    "difficulty": 5
  }
];
