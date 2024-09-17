import "./App.css";
import "react-tabs/style/react-tabs.css";

type renderable = string;

const WIZARDS: pactPosition[] = [
  "Necromancer",
  "Hierophant",
  "Warlock",
  "Mariner",
  "Faustian",
  "Sorcerer",
  "Anchorite",
];

type pactPosition =
  | "Necromancer"
  | "Hierophant"
  | "Warlock"
  | "Mariner"
  | "Faustian"
  | "Sorcerer"
  | "Anchorite";

type wizardCircle = {
  circle: "Fire" | "Air" | "Water" | "Earth";
  value: number;
  companion: renderable;
};

type wizardHistory = {
  oldMaster: { known: renderable; unknown: renderable };
  age: renderable;
  changes: renderable[];
  manhood: renderable;
  appearance: renderable;
};

type powers = { fragment: renderable[]; humble: renderable[] };

type wizard = {
  position: pactPosition;
  name: renderable;
  titles: renderable;
  fragment: renderable;
  familiar: renderable;
  fire: wizardCircle;
  air: wizardCircle;
  water: wizardCircle;
  earth: wizardCircle;
  treasures: renderable[];
  possessions: renderable[];
  history: wizardHistory;
  powers: powers;
};

const TABS = ["Summary", "Board", "Codex"];

function WizardIcon({ title }: { title: string }) {
  return (
    <li>
      <a href={`/${title}`}>{title}</a>
    </li>
  );
}

function WizardList() {
  const wizardIcons = WIZARDS.map((wizard) => WizardIcon({ title: wizard }));

  return (
    <div className="header-container">
      <ul>
        <li>
          <a href="/Orrery">Orrery</a>
        </li>
        {wizardIcons}
        <li>
          <a href="/Grimoire">Grimoire</a>
        </li>
        <li>
          <a href="/Rulebook">Rulebook</a>
        </li>
      </ul>
    </div>
  );
}

function Tab({ name }: { name: string }) {
  //TODO: refactor for react-router
  return (
    <li>
      <a href={`/${name}`}>{name}</a>
    </li>
  );
}

function TabList({ wizard }: { wizard: pactPosition }) {
  return (
    <div className="header-container">
      <ul>
        {TABS.map((str) => (
          <Tab name={str} />
        ))}
      </ul>
    </div>
  );
}

//TODO: make companion link to the codex
function CharacterSheetCircle({ circle, value, companion }: wizardCircle) {
  return (
    <div className={`outlined ${circle.toLowerCase()}`}>
      <h2>{circle}</h2>
      <p>{value}</p>
      <p>
        Ward: <i>{value + 1}</i>
      </p>
      <p>
        Companion: <i>{companion}</i>
      </p>
    </div>
  );
}

//TODO: these could probably be the same component

function SummaryList({
  heading,
  items,
}: {
  heading: renderable;
  items: renderable[];
}) {
  const listItems = items.map((element) => <li>{element}</li>);
  return (
    <div className="outlined">
      <h2>{heading}</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

function History({
  oldMaster,
  age,
  changes,
  manhood,
  appearance,
}: wizardHistory) {
  return (
    <div className="history outlined">
      <h2>History</h2>
      <section>
        <h3>Old Master</h3>
        <ul>
          <li>{oldMaster.known}</li>
          <li>{oldMaster.unknown}</li>
        </ul>
      </section>
      <section>
        <h3 className="inline">Age:</h3>
        <p>{age}</p>
      </section>
      <section>
        <h3>Changes of Magic</h3>
        <ul>
          {changes.map((change) => (
            <li>{change}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Manhood:</h3>
        <p>{manhood}</p>
      </section>
      <section>
        <h3>Appearance:</h3>
        <p>{appearance}</p>
      </section>
    </div>
  );
}

function Powers({ fragment, humble }: powers) {
  return (
    <div className="powers outlined">
      <aside>
        <section>
          <h3>Pact Fragment:</h3>
          <ul>
            {fragment.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Humble Magics:</h3>
          <ul>
            {humble.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}

function CharacterSheet(props: wizard) {
  return (
    <div className="summary">
      <div className="symbol">♂</div>
      <header className="name">
        <h1>
          The {props.position}, {props.name}
        </h1>
        <p>{props.titles}</p>
      </header>
      <div className="pronouns">
        <h3>Pronouns:</h3>
        <p>
          <i>he/him</i>
        </p>
      </div>
      <div className="fragment">
        <h3>Fragment:</h3>
        <p>
          <i>{props.fragment}</i>
        </p>
      </div>
      <div className="familiar">
        <h3>Familiar:</h3>
        <p>
          <i>{props.familiar}</i>
        </p>
      </div>
      <CharacterSheetCircle {...props.fire} />
      <CharacterSheetCircle {...props.air} />
      <CharacterSheetCircle {...props.water} />
      <CharacterSheetCircle {...props.earth} />
      <SummaryList heading="Treasures" items={props.treasures} />
      <SummaryList heading="Possessions" items={props.possessions} />
      <History {...props.history} />
      <Powers {...props.powers} />
    </div>
  );
}

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
        <WizardList />
        <TabList wizard="Warlock" />
        <CharacterSheet {...WARLOCK_PROPS} />
      </div>
    </>
  );
}

export default App;
