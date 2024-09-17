import "./App.css";
import "react-tabs/style/react-tabs.css";
import { wizard } from "./misc";
import MainNavigator from "./components/MainNavigator";
import TabList from "./components/TabList";
import CharacterSheet from "./components/CharacterSheet";

const WARLOCK_PROPS: wizard = {
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
    "A full set of chess pieces, who when commanded, will transform into soldiers and fight at your side until sunrise. (King)",
    "An iron ring used in ancient days by torturers and soldiers amidst the Tragedies. Whoever wears it cannot die from any wound. (Master)",
    "One of the last dragon&aposs eggs, rare beyond measure and warm to the touch. (Combat)",
  ],
  possessions: [
    "A red silk robe, with iron clasps bearing the symbol of Mars.",
    "Three sets of clothes, at least: suitable for a wealthy nobleman, a general commanding an army, or a simple servant incognito amongst the court.",
    "Any materials necessary for the casting of magic, such as: arrowheads, golden coins, flowers, etc.",
    "Any accessibility aids or mobility tools, such as: glasses, a cane, painkillers, etc.",
    "This very Codex, filled with the notes of Warlocks past.",
  ],
  history: {
    oldMaster: {
      known: "Good guy",
      unknown: "Bad guy",
    },
    age: "37 score",
    changes: ["Yes"],
    manhood:
      "No one dares speculate on your manhood. You would kill the next person to make such a claim in front of you.",
    appearance:
      "A dragon with scales the color of dried blood. A single sigil burns in the center of each one.",
  },
  powers: {
    fragment: [
      "When casting a spell directly against an unwilling foe, or when casting any spell during Combat (as discussed during Part IV), consult an additional die.",
      "Interpret the presence of &ldquot⊖&rdquot (Salt) as &ldquot♂&rdquot (Mars).",
      "Murder any mortal who stands before you with a single strike of your Pact-Fragment, faster than they can react and with such certainty that none may dispute their death.",
    ],
    humble: [
      "Perform a daring feat of physical athleticism which dazzles others' senses, leap into the air, or lift heavy stones which no one else could lift.",
      "Roar with a thunderous voice, or carry your voice across a battlefield, or act with the sounds of drums and horns at your steps, to motivate your troops or dismay others.",
      "Place both hands upon someone's shoulders, and in an instant divine whether they are an eligible heir for the bloodline of Isha's royalty.",
    ],
  },
};

function App() {
  return (
    <>
      <div className="wrapper">
        <MainNavigator />
        <TabList />
        <CharacterSheet {...WARLOCK_PROPS} />
      </div>
    </>
  );
}

export default App;
