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
    "q": "Co symbolizuje tradice, kdy slovenská nevěsta hází za sebe hrst ovsa?",
    "a": [
      "Hojnost a plodnost rodiny",
      "Krmení ptáků — přivolání štěstí",
      "Rozloučení s dívčím životem",
      "Aby se za ní nikdo nehonil"
    ],
    "correct": 0,
    "difficulty": 1
  },
  {
    "q": "Kdo tradičně vedl nevěstu k oltáři v české tradici?",
    "a": [
      "Otec nevěsty",
      "Oba rodiče nevěsty společně",
      "Starejší nebo družba",
      "Nevěsta šla sama"
    ],
    "correct": 2,
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
    "q": "Co je princip \"2-2-2\" v manželství?",
    "a": [
      "2 děti, 2 auta, 2 domácí mazlíčky ",
      "Každé 2 týdny rande, každé 2 měsíce víkend ve dvou, každých 2 roky společná dovolená bez dětí",
      "2 hodiny volna denně pro každého plus dvě hodiny spolu",
      "3 komplimenty denně"
    ],
    "correct": 1,
    "difficulty": 2
  },
  {
    "q": "Přesolíš polévku. Co funguje jako babiččin trik?",
    "a": [
      "Přidáš syrovou bramboru — nasaje sůl",
      "Přidáš cukr — vyváží chuť",
      "Přidáš mléko — neutralizuje sůl",
      "Přidáš vejce — váže minerály"
    ],
    "correct": 0,
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
    "q": "Co je nejčastější sexuální fantazie mužů v dlouhodobém vztahu?",
    "a": [
      "Sex se slavnou osobou",
      "Trojka",
      "Sex s vlastní partnerkou v novém prostředí",
      "Dominance"
    ],
    "correct": 2,
    "difficulty": 2
  },
  {
    "q": "Co je \"Kama Sutra\" ve skutečnosti?",
    "a": [
      "Sbírka sexuálních pozic",
      "Starověký indický text o umění života, lásce, manželství a sexualitě — pozice tvoří jen malou část",
      "Náboženský hinduistický text",
      "Příručka pro chrámové tanečnice"
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
    "q": "Kolik procent párů přiznává, že sledují porno společně?",
    "a": [
      "Asi 5 %",
      "Asi 15 %",
      "Asi 25–30 %",
      "Asi 60 %"
    ],
    "correct": 2,
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
    "q": "Jaký je statisticky nejlepší den v týdnu pro sex podle průzkumů?",
    "a": [
      "Pátek večer",
      "Sobota ráno",
      "Neděle ráno",
      "Středa večer"
    ],
    "correct": 1,
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
