export const subcats = [
  { name: "Trolls", desc: "", examples: ["Trolls", "Giants"] },
  {
    name: "Cursed",
    desc: "When a soul of a human and a demon merge, you get a cursed one. These monsters keep a portion of their humanity and control, however they gain needs and abilities of their demon part.",
    examples: ["Vampires", "Werewolves"],
  },
  {
    name: "Relicts",
    desc: "Relicts are a type of demon that take a special physical form by creating a physical body. They usually occupy one space to which they serve as a guardian of sorts.",
    examples: ["Leshen", "Noonwraith"],
  },
  {
    name: "Traumas",
    desc: "A human pain is a mighty force. When a large quantity of it gathers, it can spawn a trauma - a collective ghost of melted agony with one goal to search for a mean to the final rest.",
    examples: ["Draugs"],
  },
  {
    name: "Spectres",
    desc: "",
    examples: ["Wraiths"],
  },
  {
    name: "Awoken",
    desc: "",
    examples: ["Liches"],
  },
  {
    name: "Risen",
    desc: "",
    examples: ["Zombies", "Skeletons", "Mummies", "Ghouls"],
  },
  {
    name: "Constructs",
    desc: "",
    examples: ["Golems", "Live statues"],
  },
  {
    name: "Summons",
    desc: "",
    examples: ["Coldlings", "Hommunculi"],
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
    subcats: [subcats[1], subcats[2], subcats[8]],
  },
  {
    name: "Beasts",
    tagline: "",
    subcats: [subcats[9], subcats[10]],
  },
];
