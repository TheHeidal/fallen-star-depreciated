import { wizard } from "../misc";

export const WARLOCK_PROPS: wizard = {
  position: "Warlock",
  name: "Aristotle",
  titles:
    "Keeper of the Throne, Blade-Bearer, the Furious Lord of Lords, Archmagus, Fairy-Friend, Oathbreaker, Butcher of Ishana",
  fragment: "Battleaxe +E",
  familiar: "Hound +E",
  fire: { circle: "Fire", value: 2, companion: "Wife" },
  air: { circle: "Air", value: 2, companion: "Ancestor" },
  water: { circle: "Water", value: 1, companion: "Wife" },
  earth: { circle: "Earth", value: 3, companion: "Soldiers" },
  treasures: [
    {
      key: 0,
      content:
        "A full set of chess pieces, who when commanded, will transform into soldiers and fight at your side until sunrise. (King)",
    },
    {
      key: 1,
      content:
        "An iron ring used in ancient days by torturers and soldiers amidst the Tragedies. Whoever wears it cannot die from any wound. (Master)",
    },
    {
      key: 2,
      content:
        "One of the last dragon&aposs eggs, rare beyond measure and warm to the touch. (Combat)",
    },
  ],
  possessions: [
    {
      key: 0,
      content: "A red silk robe, with iron clasps bearing the symbol of Mars.",
    },
    {
      key: 1,
      content:
        "Three sets of clothes, at least: suitable for a wealthy nobleman, a general commanding an army, or a simple servant incognito amongst the court.",
    },
    {
      key: 2,
      content:
        "Any materials necessary for the casting of magic, such as: arrowheads, golden coins, flowers, etc.",
    },
    {
      key: 3,
      content:
        "Any accessibility aids or mobility tools, such as: glasses, a cane, painkillers, etc.",
    },
    {
      key: 4,
      content: "This very Codex, filled with the notes of Warlocks past.",
    },
  ],
  history: {
    oldMaster: {
      known: "Good guy",
      unknown: "Bad guy",
    },
    age: "37 score",
    changes: [{ key: 0, content: "Yes" }],
    manhood:
      "No one dares speculate on your manhood. You would kill the next person to make such a claim in front of you.",
    appearance:
      "A dragon with scales the color of dried blood. A single sigil burns in the center of each one.",
  },
  powers: {
    fragment: [
      {
        key: 0,
        content:
          "When casting a spell directly against an unwilling foe, or when casting any spell during Combat (as discussed during Part IV), consult an additional die.",
      },
      {
        key: 1,
        content:
          "Interpret the presence of &ldquot⊖&rdquot (Salt) as &ldquot♂&rdquot (Mars).",
      },
      {
        key: 2,
        content:
          "Murder any mortal who stands before you with a single strike of your Pact-Fragment, faster than they can react and with such certainty that none may dispute their death.",
      },
    ],
    humble: [
      {
        key: 0,
        content:
          "Perform a daring feat of physical athleticism which dazzles others' senses, leap into the air, or lift heavy stones which no one else could lift.",
      },
      {
        key: 1,
        content:
          "Roar with a thunderous voice, or carry your voice across a battlefield, or act with the sounds of drums and horns at your steps, to motivate your troops or dismay others.",
      },
      {
        key: 2,
        content:
          "Place both hands upon someone's shoulders, and in an instant divine whether they are an eligible heir for the bloodline of Isha's royalty.",
      },
    ],
  },
};
