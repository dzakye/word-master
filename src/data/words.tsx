const words: { [key: string]: boolean } = {
  abele: true,
  abéra: true,
  abile: true,
  abima: true,
  abita: true,
  abôna: true,
  abóou: true,
  abóra: true,
  abòra: true,
  abówa: true,
  abyéi: true,
  achon: true,
  achye: true,
  acoja: true,
  acoli: true,
  acóou: true,
  acrou: true,
  adjya: true,
  adjyo: true,
  âdjyó: true,
  adoba: true,
  adóra: true,
  adóta: true,
  adrwé: true,
  afana: true,
  afena: true,
  afére: true,
  afewa: true,
  afida: true,
  afówa: true,
  afron: true,
  afrou: true,
  agóta: true,
  akipa: true,
  akita: true,
  amina: true,
  amódó: true,
  amoja: true,
  amòra: true,
  antan: true,
  antou: true,
  antse: true,
  aoule: true,
  apéja: true,
  apele: true,
  apeti: true,
  apéwa: true,
  apèwe: true,
  aplan: true,
  apléé: true,
  aplin: true,
  aplon: true,
  apréi: true,
  apwéé: true,
  arabe: true,
  arapa: true,
  arari: true,
  arche: true,
  aréna: true,
  aréta: true,
  arója: true,
  arówa: true,
  arpâé: true,
  arpyó: true,
  ârtse: true,
  artsé: true,
  aryin: true,
  aryon: true,
  aryou: true,
  aseou: true,
  aseta: true,
  aséta: true,
  astou: true,
  asyon: true,
  ataca: true,
  atèlè: true,
  ateni: true,
  atepi: true,
  atópa: true,
  atori: true,
  atóta: true,
  avâra: true,
  aveja: true,
  avowa: true,
  avwêe: true,
  avwéi: true,
  awéea: true,
  âwéta: true,
  bâcha: true,
  baché: true,
  bâché: true,
  bâcla: true,
  bacon: true,
  bafra: true,
  banca: true,
  bandi: true,
  banye: true,
  bârba: true,
  barbé: true,
  bârca: true,
  barma: true,
  bârma: true,
  batâa: true,
  batan: true,
  batéé: true,
  batin: true,
  bâton: true,
  batré: true,
  batse: true,
  bâtsó: true,
  bayâa: true,
  béchó: true,
  bechi: true,
  beeon: true,
  béida: true,
  béite: true,
  bèkye: true,
  belon: true,
  bemon: true,
  bënfé: true,
  berdé: true,
  bèrjé: true,
  berni: true,
  béton: true,
  betse: true,
  bewën: true,
  bibla: true,
  bidon: true,
  bièta: true,
  bijye: true,
  binda: true,
  blaga: true,
  blâga: true,
  blâma: true,
  bléca: true,
  bléta: true,
  blóca: true,
  bloji: true,
  bóche: true,
  bóché: true,
  bócla: true,
  bócon: true,
  bofon: true,
  bogan: true,
  bójae: true,
  bójéi: true,
  bókye: true,
  bòkye: true,
  bókyé: true,
  bonan: true,
  bonba: true,
  bónda: true,
  bonōo: true,
  bonta: true,
  bonye: true,
  bonyé: true,
  bòrda: true,
  bòrdé: true,
  bòrdó: true,
  borën: true,
  borgó: true,
  borla: true,
  bòrló: true,
  borne: true,
  bôrne: true,
  bosou: true,
  boton: true,
  bóton: true,
  bótsa: true,
  botse: true,
  botsé: true,
  bouja: true,
  bouló: true,
  bousa: true,
  bouwa: true,
  bowîa: true,
  brâja: true,
  braji: true,
  brasa: true,
  bravó: true,
  breca: true,
  bréca: true,
  briló: true,
  brisa: true,
  brivó: true,
  bróca: true,
  broné: true,
  bròon: true,
  brota: true,
  bróta: true,
  broun: true,
  bwata: true,
  bwati: true,
  bwita: true,
  bwite: true,
  bwóna: true,
  byowi: true,
  caâda: true,
  cabri: true,
  cacae: true,
  cacha: true,
  cadre: true,
  câdre: true,
  caeon: true,
  cafâa: true,
  caféi: true,
  cajën: true,
  câkyé: true,
  calon: true,
  candi: true,
  canéé: true,
  canon: true,
  canpa: true,
  canpó: true,
  canye: true,
  capon: true,
  carae: true,
  caréi: true,
  carié: true,
  carma: true,
  carmó: true,
  carné: true,
  caron: true,
  carpa: true,
  cârpé: true,
  cârta: true,
  carte: true,
  carti: true,
  catâa: true,
  catêe: true,
  catró: true,
  cátse: true,
  catsé: true,
  cavwa: true,
  cawën: true,
  chaba: true,
  chacó: true,
  chadó: true,
  chaea: true,
  chain: true,
  chapa: true,
  chápa: true,
  chara: true,
  châra: true,
  chata: true,
  châta: true,
  chate: true,
  chava: true,
  châva: true,
  chavó: true,
  chawa: true,
  chawe: true,
  chéae: true,
  checa: true,
  chela: true,
  chéna: true,
  chenó: true,
  chêra: true,
  chêre: true,
  cheto: true,
  chéwa: true,
  chiba: true,
  chitó: true,
  chiwa: true,
  chîwa: true,
  chobe: true,
  chócò: true,
  chóma: true,
  chóna: true,
  chónó: true,
  choōo: true,
  chóou: true,
  chopa: true,
  chópa: true,
  chópé: true,
  chópò: true,
  chóra: true,
  chóta: true,
  chóte: true,
  choun: true,
  chowe: true,
  chowa: true,
  chówa: true,
  chowé: true,
  chwin: true,
  chyin: true,
  clara: true,
  clian: true,
  clóca: true,
  clóou: true,
  clópa: true,
  clópé: true,
  close: true,
  clòte: true,
  cóbla: true,
  cócha: true,
  cochi: true,
  cócon: true,
  cojën: true,
  côlon: true,
  colôo: true,
  coman: true,
  coméi: true,
  cómin: true,
  conba: true,
  conta: true,
  contó: true,
  contò: true,
  cóóna: true,
  cópâe: true,
  copie: true,
  copié: true,
  coplé: true,
  copōo: true,
  córâe: true,
  côrba: true,
  cōrba: true,
  còrbé: true,
  còrbó: true,
  cōrda: true,
  cordi: true,
  corin: true,
  cōrna: true,
  còrné: true,
  corta: true,
  corti: true,
  corya: true,
  cóson: true,
  cotêe: true,
  cótéi: true,
  cotën: true,
  cóton: true,
  cótse: true,
  coudó: true,
  couse: true,
  cówâe: true,
  cowêe: true,
  cówéi: true,
  cowin: true,
  craea: true,
  cramò: true,
  crâné: true,
  crânó: true,
  crapa: true,
  crapó: true,
  crefa: true,
  crepi: true,
  crere: true,
  créta: true,
  creva: true,
  crîde: true,
  crója: true,
  crópa: true,
  cróta: true,
  crowi: true,
  crwéi: true,
  cwéna: true,
  cwete: true,
  cwife: true,
  cwire: true,
  cwite: true,
  dajon: true,
  dalōo: true,
  damou: true,
  danae: true,
  danse: true,
  danye: true,
  daoun: true,
  dapâa: true,
  davwé: true,
  debri: true,
  décló: true,
  deden: true,
  déean: true,
  dèjai: true,
  déjêe: true,
  dékye: true,
  demâa: true,
  déman: true,
  déméi: true,
  démon: true,
  demye: true,
  dëntò: true,
  déója: true,
  deoun: true,
  dépin: true,
  deplo: true,
  derâe: true,
  derdé: true,
  derën: true,
  dêrye: true,
  detri: true,
  detse: true,
  déwéi: true,
  dibló: true,
  dióra: true,
  ditéi: true,
  diton: true,
  dobën: true,
  dóbla: true,
  dobli: true,
  dóbló: true,
  dódze: true,
  dólon: true,
  donta: true,
  dorōo: true,
  dótâa: true,
  doura: true,
  douse: true,
  douwa: true,
  draga: true,
  dreti: true,
  drité: true,
  dróga: true,
  dromi: true,
  dzala: true,
  dzâna: true,
  dzâno: true,
  dzaou: true,
  dzapa: true,
  dzawa: true,
  dzefa: true,
  dzéró: true,
  dzeta: true,
  dzeti: true,
  dzoma: true,
  dzoné: true,
  dzora: true,
  dzóta: true,
  dzoué: true,
  dzoun: true,
  èbéne: true,
  echën: true,
  échôo: true,
  ecofi: true,
  écolè: true,
  ecore: true,
  écóta: true,
  écówa: true,
  écrou: true,
  éékye: true,
  ègawé: true,
  ègòta: true,
  éigro: true,
  éigró: true,
  éitró: true,
  éivwa: true,
  éivwe: true,
  èkyêe: true,
  élije: true,
  elite: true,
  èmapa: true,
  emena: true,
  ëncan: true,
  ëndri: true,
  ënfêe: true,
  ëngri: true,
  ënkye: true,
  enori: true,
  ënpli: true,
  ënréé: true,
  ënrwi: true,
  ënséi: true,
  ënsin: true,
  ëntin: true,
  ëntré: true,
  ënvai: true,
  ënvêe: true,
  èpana: true,
  épawa: true,
  epena: true,
  épéon: true,
  epeta: true,
  épóca: true,
  êrché: true,
  éréta: true,
  eriti: true,
  espêe: true,
  espie: true,
  éspré: true,
  espri: true,
  éstra: true,
  étapa: true,
  étawa: true,
  etiwa: true,
  étófa: true,
  étóna: true,
  étópa: true,
  étsêe: true,
  éwévé: true,
  ézósa: true,
  fache: true,
  fâche: true,
  faeâa: true,
  faéta: true,
  fanwé: true,
  fason: true,
  fâsōo: true,
  fatōo: true,
  favōo: true,
  favra: true,
  favre: true,
  féché: true,
  fédzó: true,
  fegyè: true,
  fejōo: true,
  féise: true,
  féita: true,
  fémâe: true,
  féméi: true,
  fèrma: true,
  fèrmó: true,
  fetou: true,
  fevri: true,
  fibló: true,
  fidéi: true,
  fideó: true,
  finta: true,
  firin: true,
  fivra: true,
  flama: true,
  flana: true,
  flapó: true,
  fléma: true,
  flócó: true,
  floné: true,
  flóré: true,
  flori: true,
  flota: true,
  flóta: true,
  fóbon: true,
  foche: true,
  fófré: true,
  folou: true,
  fomaé: true,
  foméi: true,
  fomōo: true,
  fonda: true,
  fonsa: true,
  fonta: true,
  forba: true,
  forbi: true,
  forda: true,
  fóréi: true,
  fôrje: true,
  fòrma: true,
  fôrna: true,
  forni: true,
  foryé: true,
  fótré: true,
  foura: true,
  fouró: true,
  fowia: true,
  fraca: true,
  frâné: true,
  frânó: true,
  frâre: true,
  frâte: true,
  fréja: true,
  frépa: true,
  frere: true,
  frija: true,
  friou: true,
  frite: true,
  fromi: true,
  fróta: true,
  fwata: true,
  fyèró: true,
  gâdzó: true,
  galâa: true,
  gamin: true,
  ganye: true,
  gaóna: true,
  gârbé: true,
  garda: true,
  garéé: true,
  garni: true,
  garse: true,
  gâtsó: true,
  gawan: true,
  gispi: true,
  gochó: true,
  goléi: true,
  gonsé: true,
  gorda: true,
  gordó: true,
  gótró: true,
  grâda: true,
  grané: true,
  grani: true,
  grâse: true,
  grata: true,
  grava: true,
  greni: true,
  grépa: true,
  grifa: true,
  grijé: true,
  grile: true,
  grilè: true,
  gripa: true,
  griva: true,
  griwé: true,
  gróbó: true,
  groma: true,
  gróou: true,
  gwâle: true,
  gwije: true,
  gyela: true,
  gyele: true,
  gyêra: true,
  gyéta: true,
  idran: true,
  inbra: true,
  infan: true,
  infya: true,
  insya: true,
  intéi: true,
  intsó: true,
  invwa: true,
  istré: true,
  jaméi: true,
  janpé: true,
  janpi: true,
  jaozi: true,
  jésté: true,
  jestó: true,
  jifla: true,
  jostó: true,
  joupa: true,
  joyou: true,
  kyeën: true,
  kyele: true,
  kyèle: true,
  kyepi: true,
  kyeri: true,
  kyesa: true,
  lâche: true,
  lache: true,
  lapën: true,
  liron: true,
  lizyè: true,
  lónye: true,
  lóton: true,
  maadi: true,
  maadó: true,
  màche: true,
  mâcló: true,
  mâcwè: true,
  mâfya: true,
  malon: true,
  mâmōo: true,
  manca: true,
  manda: true,
  manéé: true,
  manpa: true,
  manta: true,
  manti: true,
  mapâa: true,
  mâpri: true,
  marca: true,
  mârca: true,
  maron: true,
  marya: true,
  masca: true,
  matën: true,
  mâtin: true,
  matsó: true,
  mâvra: true,
  mawan: true,
  mawën: true,
  mâyou: true,
  mazîe: true,
  mécha: true,
  meche: true,
  mécla: true,
  mécló: true,
  médze: true,
  mégró: true,
  melâa: true,
  melon: true,
  mënma: true,
  mepri: true,
  mêrda: true,
  mergó: true,
  mèrla: true,
  métra: true,
  métre: true,
  métré: true,
  métró: true,
  metse: true,
  mewën: true,
  mijon: true,
  mijōo: true,
  minéi: true,
  minon: true,
  minōo: true,
  minsó: true,
  minta: true,
  mitin: true,
  mobla: true,
  mobló: true,
  moche: true,
  módze: true,
  mojou: true,
  móman: true,
  mómón: true,
  mòrga: true,
  mòrta: true,
  môrta: true,
  morti: true,
  mosca: true,
  mótéi: true,
  motën: true,
  mótra: true,
  motse: true,
  mótsé: true,
  motsó: true,
  mouwa: true,
  mowéi: true,
  mowën: true,
  mowin: true,
  mwénó: true,
  mwire: true,
  mwitó: true,
  myówa: true,
  nadze: true,
  naeta: true,
  nafla: true,
  nâréi: true,
  néawe: true,
  nenën: true,
  nétée: true,
  nijye: true,
  nirâa: true,
  nójwe: true,
  noole: true,
  norën: true,
  noura: true,
  nowéi: true,
  nyare: true,
  nyese: true,
  nyire: true,
  nyóca: true,
  nyócó: true,
  nyona: true,
  nyówa: true,
  obêje: true,
  ochya: true,
  óchya: true,
  ocopa: true,
  ódjya: true,
  ódjye: true,
  omele: true,
  onati: true,
  onbra: true,
  ondze: true,
  ondzé: true,
  onecó: true,
  onéta: true,
  ongan: true,
  onlâa: true,
  ónóra: true,
  ontou: true,
  onyon: true,
  óónye: true,
  óoula: true,
  óoule: true,
  óouló: true,
  óoura: true,
  óouta: true,
  óouwa: true,
  óouwe: true,
  ópèra: true,
  ópója: true,
  ordzò: true,
  orele: true,
  orena: true,
  òrgwé: true,
  ōrgwé: true,
  ôrgyé: true,
  orlâe: true,
  oscōo: true,
  ostîa: true,
  ótava: true,
  otele: true,
  ótèlè: true,
  oubën: true,
  oubla: true,
  oubli: true,
  ouncó: true,
  ouron: true,
  outon: true,
  outré: true,
  ouvêe: true,
  óvawó: true,
  owiva: true,
  pacha: true,
  pâcha: true,
  paché: true,
  pâdze: true,
  paeou: true,
  pâkye: true,
  pakyé: true,
  panté: true,
  panye: true,
  parco: true,
  paréé: true,
  parié: true,
  parin: true,
  parla: true,
  parlé: true,
  patën: true,
  paton: true,
  patse: true,
  patsó: true,
  patwé: true,
  pavya: true,
  pawâe: true,
  pawën: true,
  pebló: true,
  pêcha: true,
  pêche: true,
  pêché: true,
  pechó: true,
  péclé: true,
  pécló: true,
  pedou: true,
  pédre: true,
  pedri: true,
  péiné: true,
  péinó: true,
  péire: true,
  péiwa: true,
  péjan: true,
  péjéi: true,
  pekye: true,
  pekyé: true,
  peléi: true,
  penéi: true,
  pëngi: true,
  pënta: true,
  pënte: true,
  penye: true,
  penyó: true,
  peóta: true,
  peòta: true,
  peowa: true,
  peowe: true,
  pêrda: true,
  perou: true,
  pèrtó: true,
  pesta: true,
  pétâa: true,
  pétâé: true,
  petéi: true,
  pétéi: true,
  petró: true,
  petse: true,
  pétse: true,
  pewáa: true,
  pewën: true,
  piche: true,
  pidze: true,
  pijon: true,
  pinna: true,
  pinse: true,
  pinsó: true,
  pinta: true,
  pioné: true,
  pióta: true,
  piton: true,
  pivra: true,
  pivró: true,
  placa: true,
  plané: true,
  plânó: true,
  plate: true,
  pleji: true,
  plojo: true,
  ploma: true,
  pobló: true,
  pócra: true,
  pofaé: true,
  pólin: true,
  ponpa: true,
  ponta: true,
  ponté: true,
  ponya: true,
  popla: true,
  popló: true,
  porca: true,
  porga: true,
  pòrpa: true,
  pòrpé: true,
  porta: true,
  pòrta: true,
  porti: true,
  póson: true,
  pósta: true,
  potan: true,
  pouja: true,
  pousa: true,
  pouta: true,
  préfé: true,
  préta: true,
  prija: true,
  priōo: true,
  priou: true,
  prire: true,
  priwé: true,
  promi: true,
  prósé: true,
  prówa: true,
  pwéea: true,
  pwire: true,
  pyese: true,
  pyoca: true,
  racâa: true,
  râche: true,
  racla: true,
  râcló: true,
  racró: true,
  radze: true,
  râeon: true,
  rafla: true,
  rafya: true,
  ramâe: true,
  ranbo: true,
  ranma: true,
  ranpa: true,
  ransó: true,
  rapën: true,
  rapon: true,
  rapôo: true,
  ratéi: true,
  raton: true,
  râtse: true,
  râtsó: true,
  rècha: true,
  rêcha: true,
  rechi: true,
  redii: true,
  redui: true,
  redze: true,
  rédze: true,
  rééla: true,
  reele: true,
  réélé: true,
  rèélé: true,
  régla: true,
  regōo: true,
  réita: true,
  rejën: true,
  rémwa: true,
  rënga: true,
  rënma: true,
  repli: true,
  resca: true,
  réspé: true,
  rèsté: true,
  retsó: true,
  réwéi: true,
  rewia: true,
  riban: true,
  ridzó: true,
  rijin: true,
  rijon: true,
  ripâe: true,
  risin: true,
  rison: true,
  rlwin: true,
  rocan: true,
  rócha: true,
  róché: true,
  ródze: true,
  ródzé: true,
  ródzó: true,
  rójéi: true,
  ronca: true,
  ronda: true,
  rondò: true,
  ronye: true,
  ropyó: true,
  rósâe: true,
  rotse: true,
  roudó: true,
  roule: true,
  rouló: true,
  roupa: true,
  rousa: true,
  rouwa: true,
  rowéi: true,
  rwédó: true,
  rwena: true,
  rwidó: true,
  ryéba: true,
  ryeca: true,
  saete: true,
  sanló: true,
  sanpe: true,
  saowa: true,
  sebōo: true,
  secon: true,
  sepre: true,
  sêrté: true,
  seryé: true,
  sibōo: true,
  siéta: true,
  sigâa: true,
  siman: true,
  sinla: true,
  sinle: true,
  sinlo: true,
  sinye: true,
  sinyé: true,
  sinyó: true,
  sócâé: true,
  sonda: true,
  sowën: true,
  steca: true,
  stéca: true,
  stecó: true,
  swate: true,
  tabéé: true,
  tabla: true,
  tâbla: true,
  tabló: true,
  tâbló: true,
  tâcha: true,
  tacha: true,
  tacon: true,
  talin: true,
  talōo: true,
  tâmin: true,
  tanbo: true,
  tandi: true,
  tanéa: true,
  tanōo: true,
  tanpa: true,
  tanpi: true,
  tantó: true,
  taona: true,
  tapou: true,
  tardé: true,
  tardi: true,
  tarpa: true,
  târpa: true,
  tatse: true,
  tâtsó: true,
  tavwa: true,
  tawan: true,
  tchyé: true,
  tchyè: true,
  tebâe: true,
  techó: true,
  téita: true,
  temon: true,
  tëncó: true,
  ténéa: true,
  tënté: true,
  teran: true,
  terdó: true,
  tèrgó: true,
  terin: true,
  tèrin: true,
  tērla: true,
  terle: true,
  tèrmè: true,
  têrmó: true,
  têrna: true,
  terya: true,
  terye: true,
  testa: true,
  tétâa: true,
  tetou: true,
  tetse: true,
  tevâe: true,
  tezîe: true,
  tigre: true,
  tijye: true,
  tinte: true,
  tirōo: true,
  titre: true,
  tócâe: true,
  toche: true,
  todri: true,
  tókyé: true,
  tónâe: true,
  tonba: true,
  tonna: true,
  tópló: true,
  tópon: true,
  torbé: true,
  torco: true,
  torcó: true,
  tórin: true,
  tòrna: true,
  tòrné: true,
  torni: true,
  tōrta: true,
  tôrtò: true,
  tósin: true,
  tóson: true,
  traca: true,
  traça: true,
  trafè: true,
  trafi: true,
  trâle: true,
  trapa: true,
  trapó: true,
  trata: true,
  trati: true,
  trecó: true,
  trèêe: true,
  tréga: true,
  trepé: true,
  trepi: true,
  tréta: true,
  trétó: true,
  troca: true,
  tróca: true,
  trole: true,
  trólé: true,
  tróne: true,
  trópa: true,
  tróse: true,
  tróta: true,
  tsacrou: true,
  tsâda: true,
  tsamò: true,
  tsana: true,
  tsani: true,
  tsaōo: true,
  tsara: true,
  tsaré: true,
  tsarfi: true,
  tsase: true,
  tsàse: true,
  tsâsé: true,
  tsàta: true,
  tsàte: true,
  tsati: true,
  tsave: true,
  tsawé: true,
  tsawi: true,
  tsebó: true,
  tséja: true,
  tsena: true,
  tsêre: true,
  tsêré: true,
  tsoca: true,
  tsocó: true,
  tsóou: true,
  tsowa: true,
  tsówé: true,
  vaeon: true,
  vaéta: true,
  vagon: true,
  valin: true,
  vanae: true,
  vanōo: true,
  vaópa: true,
  vapōo: true,
  vârin: true,
  vawōo: true,
  vêcha: true,
  vêche: true,
  vejën: true,
  venye: true,
  vêrda: true,
  véréi: true,
  verën: true,
  verin: true,
  vêrna: true,
  verni: true,
  verte: true,
  verya: true,
  verye: true,
  vesta: true,
  vyèje: true,
  vinse: true,
  vioné: true,
  vipêe: true,
  visye: true,
  vitéé: true,
  vitre: true,
  vitri: true,
  vivin: true,
  vòrta: true,
  vwari: true,
  vwata: true,
  vwéea: true,
  vwepi: true,
  vwéró: true,
  vwesa: true,
  vwese: true,
  vwésó: true,
  vwete: true,
  vwida: true,
  vwidó: true,
  vyele: true,
  vyeró: true,
  vyôon: true,
  vyówé: true,
  wacôo: true,
  wafra: true,
  wâfra: true,
  wakye: true,
  wanda: true,
  wanpa: true,
  wanse: true,
  wanya: true,
  wanye: true,
  waona: true,
  waoun: true,
  wârje: true,
  waséi: true,
  watën: true,
  wâtse: true,
  wâtsi: true,
  weeon: true,
  wééta: true,
  wefra: true,
  wèkye: true,
  wënma: true,
  wenwé: true,
  wenya: true,
  wenye: true,
  wepra: true,
  weson: true,
  wéstó: true,
  wétra: true,
  wetse: true,
  wevré: true,
  wevyè: true,
  wibró: true,
  wijyé: true,
  winga: true,
  witre: true,
  wivra: true,
  wivró: true,
  youwa: true,
  zoupa: true,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}

export default words
