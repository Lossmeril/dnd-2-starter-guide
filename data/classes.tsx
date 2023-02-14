import { Body, Charisma, Soul } from "@/components/styled/charLimits";
import { Badge } from "@chakra-ui/react";

export const basicClasses = [
  {
    name: "Fighter",
    colorScheme: "red",
  },
  {
    name: "Hunter",
    colorScheme: "green",
  },
  {
    name: "Juggler",
    colorScheme: "yellow",
  },
  {
    name: "Medic",
    colorScheme: "purple",
  },
  {
    name: "Incantor",
    colorScheme: "blue",
  },
];

export const classes = [
  {
    name: "Warrior",
    classA: basicClasses[0],
    classB: basicClasses[2],
    magic: 0,
    skills: [
      <span key={0}>
        Close combat from a horseback (<Body>Body</Body>)
      </span>,
      <span key={1}>
        Smithing (<Body>Body</Body>)
      </span>,
      <span key={2}>
        Strategy, war, heraldry, ethics and politics knowledge (
        <Soul>Soul</Soul>)
      </span>,
      <span key={3}>
        Influence in higher society (<Charisma>Charisma</Charisma>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={4}>
        Leadership in combat (<Charisma>Charisma</Charisma>)
      </span>,
    ],
  },
  {
    name: "Ranger",

    classA: basicClasses[0],
    classB: basicClasses[1],
    magic: 0,

    skills: [
      <span key={0}>
        Close combat and ranged combat against beasts (<Body>Body</Body>)
      </span>,
      <span key={1}>
        Taking trophies, knowledge of ingredients (<Soul>Soul</Soul>)
      </span>,
      <span key={2}>
        Woodworking and carpentry (<Soul>Soul</Soul>)
      </span>,
      <span key={3}>
        Intimidation of beasts (<Charisma>Charisma</Charisma>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={4}>
        Taming primitive beasts (<Charisma>Charisma</Charisma>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
    ],
  },

  {
    name: "Witcher",

    classA: basicClasses[0],
    classB: basicClasses[3],
    magic: 2,
    desc: "In order to hunt monsters, you have to become one. Witchers are supernatural warriors designed to track down and kill creatures not from this world. In their fight, they rely on a twisted version of their own magic - signs, through which they can cause burning pain to every ghost, demon or vampire.",
    skills: [
      <span key={0}>
        Close combat againts undead, constructs and demons (<Body>Body</Body>)
      </span>,
      <span key={1}>
        Taking trophies, knowledge of ingredients (<Soul>Soul</Soul>)
      </span>,
      <span key={2}>
        Signs (<Soul>Soul</Soul>) <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={3}>
        Intimidation of undead, constructs and demons (
        <Charisma>Charisma</Charisma>) <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={4}>
        Knowledge of undead, construct and demons (<Charisma>Charisma</Charisma>
        ) <Badge colorScheme="blue">Unique</Badge>
      </span>,
    ],
  },

  {
    name: "Scout",
    classA: basicClasses[1],
    classB: basicClasses[2],
    magic: 0,
    desc: "Men and women skilled in intrigues and intel gathering become scouts. Scouts' goal is to know as much as they can while being least noticable. To achieve their goals they utilise their contacts and improvisation skills. They are always on the move, both figuratively and literally, and two steps ahead of their enemies.",

    skills: [
      <span key={0}>
        Ranged combat from a horseback (<Body>Body</Body>)
      </span>,
      <span key={1}>
        Ciphering and deciphering, codes (<Soul>Soul</Soul>)
      </span>,
      <span key={2}>
        Underworld influence (<Charisma>Charisma</Charisma>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={3}>
        Human leadership outside of a fight (<Charisma>Charisma</Charisma>){" "}
      </span>,
      <span key={4}>
        Repairing of human influence (healing <Charisma>Charisma</Charisma>{" "}
        scars) (<Charisma>Charisma</Charisma>){" "}
      </span>,
    ],
  },
  {
    name: "Shaman",
    classA: basicClasses[1],
    classB: basicClasses[3],
    magic: 2,
    desc: "For many people animals are companions at best, slaves at the worst, for shaman, every animal is a wise soul worth listening to. And that is just a tip of the iceberg. Nature has granted them a gift of talking to animals, possessing them and even transforming into them. And by twisting the natural magic, they can prepare narcotic substances which allow them to talk to ancestors and even traverse a surreal landscapes of the dream world.",
    skills: [
      <span key={0}>
        Narcotic substances (<Soul>Soul</Soul>)
      </span>,
      <span key={1}>
        Fortune telling, entering a dream world (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={2}>
        Animal magic / Animancy (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={3}>
        Animal healing (<Soul>Soul</Soul>)
      </span>,
    ],
  },
  {
    name: "Druid",
    classA: basicClasses[1],
    classB: basicClasses[4],
    magic: 1,
    skills: [
      <span key={0}>
        Rock and ground magic (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={1}>
        Water magic (<Soul>Soul</Soul>) <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={2}>
        Wood and plant magic (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
    ],
  },
  {
    name: "Rogue",
    classA: basicClasses[2],
    classB: basicClasses[3],
    magic: 0,
    skills: [
      <span key={0}>
        Extreme acrobacy (<Body>Body</Body>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={1}>
        Knowledge of mechanisms and overcoming them (<Soul>Soul</Soul>)
      </span>,
      <span key={2}>
        Forgery (<Soul>Soul</Soul>)
      </span>,
      <span key={3}>
        Contact poison crafting (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={4}>
        Contact poison usage (<Soul>Soul</Soul>)
      </span>,
    ],
  },

  {
    name: "Alchemist",
    classA: basicClasses[3],
    classB: basicClasses[4],
    magic: 1,
    skills: [
      <span key={0}>
        Alchemy knowledge, magic identification, (<Soul>Soul</Soul>){" "}
      </span>,
      <span key={1}>
        Explosives, corrosives and gases crafting (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={2}>
        Using of xplosives, corrosives and gases (<Soul>Soul</Soul>){" "}
      </span>,
      <span key={3}>
        Elixir crafting (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={4}>
        Artificial life, animating, golem crafting (<Soul>Charisma</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
    ],
  },
  {
    name: "Warlock",
    classA: basicClasses[0],
    classB: basicClasses[4],
    magic: 1,
    skills: [
      <span key={0}>
        Fire magic / Pyromancy (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={0}>
        Wind magic / Aeromancy (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
    ],
  },
  {
    name: "Mage",
    classA: basicClasses[2],
    classB: basicClasses[4],
    magic: 1,
    skills: [
      <span key={0}>
        Illusion magic (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={0}>
        Mind magic, telepathy, possession (<Soul>Soul</Soul>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
      <span key={0}>
        Influence in clergy and magic societies (<Charisma>Charisma</Charisma>){" "}
        <Badge colorScheme="blue">Unique</Badge>
      </span>,
    ],
  },
];
