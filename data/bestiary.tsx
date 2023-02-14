export const subcats = [
  { name: "Trolls", desc: "", examples: ["Trolls", "Giants"] },
  {
    name: "Cursed",
    desc: "When a soul of a human and a demon merge, you get a cursed one. These monsters keep a portion of their humanity and control, however they gain needs and abilities of their demon part.",
    examples: ["Vampires", "Werewolves"],
  },
  {
    name: "Relicts",
    desc: "Deadly to those who oppose, benevolant to those who bow. Relicts are a type of demon that take a special physical form by creating a physical body. They usually occupy one place where they serve as a guardian.",
    examples: ["Leshies", "Noonwraiths", "Rusalkas"],
  },
  {
    name: "Traumas",
    desc: "A human pain is a mighty force. When a large quantity of it gathers, it can spawn a trauma - a collective ghost of melted agony with one goal to search for a mean to the final rest.",
    examples: ["Draugs"],
  },
  {
    name: "Spectres",
    desc: "",
    examples: ["Wraiths", "Plague Maidens"],
  },
  {
    name: "Awoken",
    desc: "",
    examples: ["Liches", "Fexts"],
  },
  {
    name: "Risen",
    desc: "Empty husks completely bound to their puppeteer master. Dead bodies disturbed by dark magic from their slumber and forced to walk a cruel march.",
    examples: ["Vights", "Ghouls", "Skeletons", "Mummies"],
  },
  {
    name: "Constructs",
    desc: "If you want something done right, you do it yourself. Constructs are a form of artificial life constructed and revived by a magic user to a various degree of abilities and stability.",
    examples: ["Golems", "Live statues", "Hommunculi"],
  },
  {
    name: "Summons",
    desc: "We call them to this world to serve us, yet most of the time they bring only destruction. Be it immortaility, fortune or loyalty, it is never a good idea to trust a demon.",
    examples: ["Coldlings", "Djinnis"],
  },
  {
    name: "Dracoids",
    desc: "",
    examples: ["Dragons", "Wyvern"],
  },
  {
    name: "Hybrids",
    desc: "",
    examples: ["Gryphons", "Manticorae", "Basilisk"],
  },
  {
    name: "Higher demons",
    desc: "Have you ever met a person whose look made your skin crawl? There is a good chance it was a higher demon. Ancient and powerful beings from outer planes that stop at nothing to achieve their mysterious goals.",
    examples: ["Demon lords", "Wandering demons", "Demon spawn"],
  },
  {
    name: "Possessers",
    desc: "Extremely weak by themselves so in order to gain strength, they search for a host to control and drain off their life power. With good timing they can go unnoticed until they have multiple victims in their control and before first people start dying.",
    examples: ["Nightmare Moths", "Duskwreath"],
  },
];

export const categories = [
  {
    name: "Humaniods",
    tagline: "",
    subcats: [subcats[0]],
  },
  {
    name: "Animals",
    tagline: "",
  },
  {
    name: "Undead and constructs",
    tagline: "",
    subcats: [subcats[6], subcats[5], subcats[4], subcats[7], subcats[3]],
  },
  {
    name: "Demons",
    tagline: "",
    subcats: [subcats[1], subcats[2], subcats[8], subcats[12], subcats[11]],
  },
  {
    name: "Beasts",
    tagline: "",
    subcats: [subcats[9], subcats[10]],
  },
];
