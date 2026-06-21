/* ============================================================
   ARTISAN RESERVE — Curated data layer
   Working-title demo content. Imagery: art-directed placeholders.
   ============================================================ */

export function img(id: string, w = 1600, q = 80): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export type Artisan = {
  slug: string;
  name: string;
  craft: string;
  location: string;
  region: string;
  tradition: string;
  experienceYears: number;
  generation: string;
  portrait: string;
  workshop: string[];
  intro: string;
  story: string[];
  signature: string;
};

export type ProcessStep = {
  title: string;
  body: string;
  image: string;
};

export type Auction = {
  startingBid: number;
  currentBid: number;
  bids: number;
  endsAt: string; // ISO
};

export type Piece = {
  slug: string;
  title: string;
  artisan: string; // artisan slug
  category: string;
  blurb: string;
  hero: string;
  gallery: string[];
  price: number; // USD; for auction pieces this is the estimate low
  currency: string;
  edition: string; // "One of one" | "Edition of 12" | "Small batch"
  editionAvailable: number;
  artisanShare: number; // percent
  materials: string;
  dimensions: string;
  weight: string;
  year: number;
  origin: string;
  craftAge: string;
  story: string[];
  process: ProcessStep[];
  auction?: Auction;
  featured?: boolean;
};

/* ---------------------------------- ARTISANS ---------------------------------- */

export const artisans: Artisan[] = [
  {
    slug: "radha-devi-pal",
    name: "Radha Devi Pal",
    craft: "Clay & terracotta deities",
    location: "Krishnanagar, West Bengal",
    region: "West Bengal",
    tradition: "Ghurni clay modelling",
    experienceYears: 41,
    generation: "Fifth generation",
    portrait: "1598972676363-683a7b5845a5",
    workshop: ["1595351298020-038700609878", "1622691078858-58f9eb8825e0", "1607556671927-78a6605e290b"],
    intro:
      "In the Ghurni quarter of Krishnanagar, Radha Devi shapes river clay into deities so lifelike that collectors say they seem to breathe.",
    story: [
      "Radha Devi Pal was born into the Ghurni colony of Krishnanagar, where clay modelling has been the family trade since the courts of the Nadia kings commissioned likenesses of their own. Her grandmother taught her to read the moods of the local Jalangi river clay — when it was willing, when it would crack, when to let it rest.",
      "For four decades she has worked almost entirely by hand and thumb, using a small set of bamboo tools worn smooth by use. She is known for a restraint unusual in devotional work: her figures are quiet, interior, caught in a held breath rather than a grand gesture.",
      "She now trains seven women from her neighbourhood, paying them through the season so the craft does not vanish with her generation. Every piece she releases to Artisan Reserve is one she would have been willing to keep.",
    ],
    signature: "A thumbprint pressed into the unglazed base of every work.",
  },
  {
    slug: "anil-kumbhar",
    name: "Anil Kumbhar",
    craft: "Festival clay idols",
    location: "Pen, Maharashtra",
    region: "Maharashtra",
    tradition: "Shadu clay idol making",
    experienceYears: 28,
    generation: "Third generation",
    portrait: "1647598378229-a0ec16456b1d",
    workshop: ["1607556671927-78a6605e290b", "1590422886897-7dd50e58577e", "1595351298020-038700609878"],
    intro:
      "From the idol town of Pen, Anil Kumbhar makes Ganpati figures in natural shadu clay — the kind that returns cleanly to the water it came from.",
    story: [
      "Pen has supplied Maharashtra with its festival idols for over a century. Anil grew up among drying racks of half-finished gods, learning to mould before he learned to write. He broke from the workshop tradition of plaster in his twenties, returning to shadu — a soft, pale clay that dissolves without harming the rivers it is immersed in.",
      "His insistence on natural clay and mineral pigment made his work slower and more expensive, and for years it cost him buyers. Today it is exactly why collectors seek him out: an idol that is devotional, beautiful, and gentle on the earth.",
      "He works to a strict seasonal rhythm, releasing only a small number of collector pieces each year outside the festival rush.",
    ],
    signature: "Mineral pigments mixed by hand; no synthetic colour ever used.",
  },
  {
    slug: "mohan-lal-prajapati",
    name: "Mohan Lal Prajapati",
    craft: "Terracotta relief plaques",
    location: "Molela, Rajasthan",
    region: "Rajasthan",
    tradition: "Molela votive plaque making",
    experienceYears: 35,
    generation: "Fourth generation",
    portrait: "1713593673489-3abf4784345a",
    workshop: ["1622691078858-58f9eb8825e0", "1508269151431-a34449ca161d", "1590422886897-7dd50e58577e"],
    intro:
      "In the village of Molela, Mohan Lal raises figures out of flat clay — hollow-backed votive plaques carried to shrines across the Aravalli hills.",
    story: [
      "Molela's potters are the keepers of a rare relief tradition recognised across India: deities and folk heroes pulled forward out of a single sheet of clay, hollow behind, fired to a warm terracotta orange. Pastoral communities have collected these plaques for their shrines for generations.",
      "Mohan Lal learned the craft at his father's side, pressing coils of clay into raised limbs and crowns. His larger panels can take three weeks of building, drying, and open-kiln firing fed with cow-dung cakes and wood.",
      "He is among a handful of master plaque-makers still working at this scale, and the only one in his family's line releasing work to collectors abroad.",
    ],
    signature: "Hollow-backed relief, fired in a traditional open kiln.",
  },
  {
    slug: "sita-mahato",
    name: "Sita Mahato",
    craft: "Folk terracotta",
    location: "Panchmura, West Bengal",
    region: "West Bengal",
    tradition: "Bankura terracotta",
    experienceYears: 23,
    generation: "Second generation",
    portrait: "1645597454479-14cb0e8bcabe",
    workshop: ["1508269151431-a34449ca161d", "1595351298020-038700609878", "1622691078858-58f9eb8825e0"],
    intro:
      "Sita Mahato carries the elongated, elegant line of the Bankura terracotta horse into a new generation of folk figures.",
    story: [
      "The village of Panchmura gave India one of its most recognised craft forms — the long-necked Bankura horse, now a national emblem of Indian handicraft. Sita learned the form from her mother, one of the few women to throw and build at the wheel in a male-dominated potters' lane.",
      "Her work keeps the austere, geometric grace of the tradition while introducing her own folk figures: village mothers, musicians, paired animals. Each is burnished by hand before firing to bring up that distinctive deep terracotta sheen.",
      "She splits her year between her own collector work and teaching the form to girls in the village school.",
    ],
    signature: "Hand-burnished surface; the elongated Panchmura silhouette.",
  },
];

export function getArtisan(slug: string): Artisan | undefined {
  return artisans.find((a) => a.slug === slug);
}

/* ---------------------------------- PIECES ---------------------------------- */

export const pieces: Piece[] = [
  {
    slug: "nataraja-in-repose",
    title: "Nataraja in Repose",
    artisan: "radha-devi-pal",
    category: "Clay Sculpture",
    blurb:
      "The cosmic dancer caught not mid-dance but in the breath before it — a study in restraint from a master of Ghurni clay.",
    hero: "1709985774319-bac2214db83b",
    gallery: ["1709985774319-bac2214db83b", "1631446416793-edfbeade1692", "1602305361928-dd4fbb524ed6"],
    price: 2400,
    currency: "USD",
    edition: "One of one",
    editionAvailable: 1,
    artisanShare: 78,
    materials: "Jalangi river clay, mineral wash, natural lacquer",
    dimensions: "46 × 22 × 18 cm",
    weight: "4.1 kg",
    year: 2026,
    origin: "Krishnanagar, West Bengal",
    craftAge: "Ghurni clay modelling · 250+ years",
    story: [
      "Most depictions of Nataraja freeze Shiva at the height of his cosmic dance, ringed in fire. Radha Devi chose the opposite moment — the stillness just before the first step, when the universe is held in suspense.",
      "It is a deeply personal interpretation, modelled entirely by thumb over eleven days from a single mass of river clay. The restraint is the point: power that has not yet been spent.",
      "This is a singular work. There is no edition, no second cast. What you acquire is the only one that will ever exist.",
    ],
    process: [
      {
        title: "Reading the clay",
        body: "Jalangi river clay is rested, kneaded, and tested by ear — a master can hear when the moisture is right for fine modelling.",
        image: "1590605095243-072811dbe64c",
      },
      {
        title: "Modelled by thumb",
        body: "No mould is used. The figure is raised entirely by hand and a worn set of bamboo tools over eleven days.",
        image: "1611013621103-91e10668a120",
      },
      {
        title: "Slow drying",
        body: "The piece is dried in shade for two weeks to prevent cracking, turned daily by hand.",
        image: "1620140036708-455ed5c0426a",
      },
      {
        title: "Mineral finish",
        body: "A thin mineral wash and natural lacquer bring up the depth of the clay without hiding its grain.",
        image: "1589051088132-06f36a22012a",
      },
    ],
    featured: true,
  },
  {
    slug: "bal-gopal",
    title: "Bal Gopal",
    artisan: "anil-kumbhar",
    category: "Clay Sculpture",
    blurb:
      "The infant Krishna, modelled in natural shadu clay that returns cleanly to water — devotion without a trace left behind.",
    hero: "1631446416793-edfbeade1692",
    gallery: ["1631446416793-edfbeade1692", "1622033483171-0554eebfc786", "1616908841648-a4bc4322d64e"],
    price: 1150,
    currency: "USD",
    edition: "Edition of 12",
    editionAvailable: 5,
    artisanShare: 80,
    materials: "Shadu clay, hand-mixed mineral pigment",
    dimensions: "30 × 18 × 16 cm",
    weight: "2.3 kg",
    year: 2026,
    origin: "Pen, Maharashtra",
    craftAge: "Shadu clay idol making · 120+ years",
    story: [
      "Bal Gopal — Krishna as a chubby, crawling child — is among the most beloved forms in Indian devotional art. Anil renders him in pale shadu clay, the natural material that dissolves without harming the rivers it returns to.",
      "Every figure in this edition is finished with pigment Anil grinds and mixes by hand. No synthetic colour is ever used, which is why the tones are soft and slightly different on each piece.",
      "Only twelve will be made. Each is numbered on the base.",
    ],
    process: [
      {
        title: "Natural shadu clay",
        body: "Sourced locally and purified by hand, shadu is soft, pale, and fully water-soluble — gentle on rivers at immersion.",
        image: "1609881583302-61548332039c",
      },
      {
        title: "Hand modelling",
        body: "The form is built and refined without plaster moulds, keeping the soft character of the natural clay.",
        image: "1590605095243-072811dbe64c",
      },
      {
        title: "Mineral pigment",
        body: "Colours are ground from minerals and mixed by hand in small batches, applied in thin devotional layers.",
        image: "1589051088132-06f36a22012a",
      },
    ],
    featured: true,
  },
  {
    slug: "molela-sun-panel",
    title: "Molela Sun Panel",
    artisan: "mohan-lal-prajapati",
    category: "Terracotta",
    blurb:
      "A hollow-backed votive plaque raised from a single sheet of clay and fired in an open kiln — a living relief tradition of the Aravalli hills.",
    hero: "1598201910107-775e9be8df22",
    gallery: ["1598201910107-775e9be8df22", "1618935320835-1318740d44b6", "1620745899139-041867b2a477"],
    price: 1680,
    currency: "USD",
    edition: "Small batch · 6",
    editionAvailable: 3,
    artisanShare: 76,
    materials: "Local terracotta, open-kiln fired",
    dimensions: "54 × 38 × 6 cm",
    weight: "5.6 kg",
    year: 2026,
    origin: "Molela, Rajasthan",
    craftAge: "Molela votive plaques · 800+ years",
    story: [
      "The Molela plaque is a rare relief form: figures are pulled forward out of a flat sheet of clay, hollow behind, then fired to a warm terracotta orange. Pastoral communities have carried these to their shrines for centuries.",
      "Mohan Lal's sun panel takes the radiant solar motif at the heart of the tradition and builds it up in coils and pressed clay over nearly three weeks.",
      "Fired in a traditional open kiln, no two pieces take the heat identically — the colour variation across the batch is a record of the fire itself.",
    ],
    process: [
      {
        title: "Flat sheet base",
        body: "A single even sheet of local clay is laid as the ground from which every figure will be raised.",
        image: "1620140036708-455ed5c0426a",
      },
      {
        title: "Raising the relief",
        body: "Coils and pressed clay build the figures forward, leaving the back hollow — the signature of a true Molela plaque.",
        image: "1611013621103-91e10668a120",
      },
      {
        title: "Open-kiln firing",
        body: "Fired in the open with wood and cow-dung cakes, each panel emerges with its own depth of terracotta colour.",
        image: "1529690840038-f38da8894ff6",
      },
    ],
    featured: true,
  },
  {
    slug: "bankura-horse-midnight",
    title: "Bankura Horse — Midnight Pair",
    artisan: "sita-mahato",
    category: "Folk Terracotta",
    blurb:
      "India's most iconic folk silhouette, hand-burnished to a deep terracotta sheen and offered as a matched pair.",
    hero: "1620745899139-041867b2a477",
    gallery: ["1620745899139-041867b2a477", "1672545262639-241df6a8bc9a", "1618935320835-1318740d44b6"],
    price: 940,
    currency: "USD",
    edition: "Matched pair",
    editionAvailable: 4,
    artisanShare: 79,
    materials: "Panchmura terracotta, hand-burnished",
    dimensions: "38 cm tall (each)",
    weight: "3.0 kg (pair)",
    year: 2026,
    origin: "Panchmura, West Bengal",
    craftAge: "Bankura terracotta · 300+ years",
    story: [
      "The long-necked Bankura horse is so emblematic of Indian craft that it serves as the logo of the country's handicraft board. Sita keeps its austere, elongated geometry exactly as the tradition demands.",
      "Offered here as a matched pair, hand-burnished before firing so the surface carries a soft, deep sheen rather than a glaze.",
      "A quiet, architectural object — equally at home on a console table or a gallery plinth.",
    ],
    process: [
      {
        title: "Thrown and built",
        body: "The body is thrown and the elongated neck built and joined by hand in the Panchmura manner.",
        image: "1609881583302-61548332039c",
      },
      {
        title: "Burnishing",
        body: "Before firing, the leather-hard surface is burnished by hand to coax out the deep terracotta sheen.",
        image: "1589051088132-06f36a22012a",
      },
      {
        title: "Firing",
        body: "A controlled firing sets the colour and the characteristic ring of well-made Panchmura ware.",
        image: "1529690840038-f38da8894ff6",
      },
    ],
  },
  {
    slug: "ganesha-seated",
    title: "Ganesha, Seated",
    artisan: "anil-kumbhar",
    category: "Clay Sculpture",
    blurb:
      "A master festival idol in natural shadu clay, released for auction — the remover of obstacles, modelled in full seated repose.",
    hero: "1622033483171-0554eebfc786",
    gallery: ["1622033483171-0554eebfc786", "1616908841648-a4bc4322d64e", "1590228948056-7c7ac99ab3e7"],
    price: 1900,
    currency: "USD",
    edition: "One of one · Master piece",
    editionAvailable: 1,
    artisanShare: 80,
    materials: "Shadu clay, hand-mixed mineral pigment, 22k gold-leaf detail",
    dimensions: "52 × 34 × 30 cm",
    weight: "6.8 kg",
    year: 2026,
    origin: "Pen, Maharashtra",
    craftAge: "Shadu clay idol making · 120+ years",
    story: [
      "Each year Anil sets aside a single idol he considers his finest work — the one piece he would carry himself to the immersion. This seated Ganesha is that piece for 2026.",
      "Modelled in natural shadu clay and finished with hand-ground mineral pigment, it carries fine 22k gold-leaf detailing on the crown and ornaments.",
      "It is offered through live auction. The maker has set the reserve; the collectors will set the rest.",
    ],
    process: [
      {
        title: "The year's finest clay",
        body: "Anil reserves his best-purified shadu for the single master idol he releases each year.",
        image: "1609881583302-61548332039c",
      },
      {
        title: "Modelling in repose",
        body: "The seated form is raised by hand over many days, balanced so the figure reads as calm and grounded.",
        image: "1590605095243-072811dbe64c",
      },
      {
        title: "Gold-leaf detail",
        body: "Crown and ornaments are finished with fine 22k gold leaf, the only non-clay material in the work.",
        image: "1589051088132-06f36a22012a",
      },
    ],
    auction: {
      startingBid: 1900,
      currentBid: 3250,
      bids: 14,
      endsAt: "2026-06-23T16:00:00.000Z",
    },
    featured: true,
  },
  {
    slug: "village-mother",
    title: "Village Mother",
    artisan: "sita-mahato",
    category: "Folk Terracotta",
    blurb:
      "A folk figure carrying the geometry of the Bankura tradition into something tender and entirely Sita's own.",
    hero: "1672545262639-241df6a8bc9a",
    gallery: ["1672545262639-241df6a8bc9a", "1620745899139-041867b2a477", "1598201910107-775e9be8df22"],
    price: 720,
    currency: "USD",
    edition: "One of one",
    editionAvailable: 1,
    artisanShare: 79,
    materials: "Panchmura terracotta, hand-burnished",
    dimensions: "34 × 16 × 14 cm",
    weight: "2.1 kg",
    year: 2026,
    origin: "Panchmura, West Bengal",
    craftAge: "Bankura terracotta · 300+ years",
    story: [
      "Where the Bankura horse is all austere line, Sita's Village Mother is warmth held in the same geometry — a figure carrying a child, abstracted to its essentials.",
      "It is a piece she returns to between commissions, refining the proportions a little each time. This one she felt was finally right.",
      "A singular work, hand-burnished and fired in the Panchmura manner.",
    ],
    process: [
      {
        title: "Building the figure",
        body: "The form is built by hand, holding the elongated Panchmura proportions while softening them into a maternal line.",
        image: "1611013621103-91e10668a120",
      },
      {
        title: "Burnishing",
        body: "Hand-burnished at the leather-hard stage for the deep matte sheen the tradition is known for.",
        image: "1589051088132-06f36a22012a",
      },
      {
        title: "Firing",
        body: "A single controlled firing fixes the colour and the resonant ring of the finished terracotta.",
        image: "1529690840038-f38da8894ff6",
      },
    ],
  },
  {
    slug: "durga-ten-arms",
    title: "Durga, Ten Arms",
    artisan: "radha-devi-pal",
    category: "Clay Sculpture",
    blurb:
      "A master work: the ten-armed goddess in mid-victory, modelled by hand over a month. Offered through live auction.",
    hero: "1590228948056-7c7ac99ab3e7",
    gallery: ["1590228948056-7c7ac99ab3e7", "1611555487053-d8f017b9fc94", "1599379126638-959ccad44eb1"],
    price: 4200,
    currency: "USD",
    edition: "One of one · Master piece",
    editionAvailable: 1,
    artisanShare: 78,
    materials: "Jalangi river clay, mineral pigment, natural lacquer",
    dimensions: "64 × 48 × 26 cm",
    weight: "9.4 kg",
    year: 2026,
    origin: "Krishnanagar, West Bengal",
    craftAge: "Ghurni clay modelling · 250+ years",
    story: [
      "The ten-armed Durga is the most demanding form in the Ghurni repertoire — every arm must read as part of a single, balanced gesture rather than ten separate limbs.",
      "Radha Devi modelled this over thirty-one days. It is the most ambitious work she has released to collectors and, she says, likely the last of this scale she will attempt.",
      "Offered through live auction. A piece for a serious collection.",
    ],
    process: [
      {
        title: "Armature in clay",
        body: "The ten arms are planned and balanced as a single composition before any detail is modelled.",
        image: "1611013621103-91e10668a120",
      },
      {
        title: "A month by hand",
        body: "Thirty-one days of modelling by thumb and bamboo tool, with no mould at any stage.",
        image: "1590605095243-072811dbe64c",
      },
      {
        title: "Drying and finish",
        body: "Slow shade-drying, then mineral pigment and natural lacquer to bring up the depth of the river clay.",
        image: "1620140036708-455ed5c0426a",
      },
    ],
    auction: {
      startingBid: 4200,
      currentBid: 6100,
      bids: 9,
      endsAt: "2026-06-24T15:00:00.000Z",
    },
    featured: true,
  },
  {
    slug: "lotus-offering-bowl",
    title: "Lotus Offering Bowl",
    artisan: "mohan-lal-prajapati",
    category: "Terracotta",
    blurb:
      "A shallow ritual bowl with a raised lotus relief — the everyday devotional object, made with a master's hand.",
    hero: "1618935320835-1318740d44b6",
    gallery: ["1618935320835-1318740d44b6", "1598201910107-775e9be8df22", "1620745899139-041867b2a477"],
    price: 480,
    currency: "USD",
    edition: "Small batch · 10",
    editionAvailable: 7,
    artisanShare: 77,
    materials: "Local terracotta, open-kiln fired",
    dimensions: "28 cm diameter × 7 cm",
    weight: "1.4 kg",
    year: 2026,
    origin: "Molela, Rajasthan",
    craftAge: "Molela terracotta · 800+ years",
    story: [
      "Not every collected piece needs to be monumental. This shallow offering bowl, with a lotus raised in low relief at its centre, is the kind of object Molela has always made for daily devotion.",
      "Mohan Lal makes them in small batches between his larger panels, each one finished and fired by hand.",
      "An accessible entry into a centuries-old tradition.",
    ],
    process: [
      {
        title: "Forming the bowl",
        body: "The shallow form is raised and trued by hand from local clay.",
        image: "1609881583302-61548332039c",
      },
      {
        title: "Lotus relief",
        body: "The central lotus is built up in low relief, the same technique used on the large votive panels.",
        image: "1611013621103-91e10668a120",
      },
      {
        title: "Open-kiln firing",
        body: "Fired in the open kiln, giving each bowl its own warmth of terracotta colour.",
        image: "1529690840038-f38da8894ff6",
      },
    ],
  },
];

export function getPiece(slug: string): Piece | undefined {
  return pieces.find((p) => p.slug === slug);
}

export function piecesByArtisan(slug: string): Piece[] {
  return pieces.filter((p) => p.artisan === slug);
}

export const auctionPieces = pieces.filter((p) => p.auction);

export const categories = [
  "All",
  ...Array.from(new Set(pieces.map((p) => p.category))),
];

export function formatPrice(n: number): string {
  return "$" + n.toLocaleString("en-US");
}
