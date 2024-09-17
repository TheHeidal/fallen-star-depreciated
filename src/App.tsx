import "./App.css";
import "react-tabs/style/react-tabs.css";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import WizardList from "./components/WizardList";
// import WarlockSummary from "./components/WarlockSummary";

const WIZARDS = [
  "Necromancer",
  "Hierophant",
  "Warlock",
  "Mariner",
  "Faustian",
  "Sorcerer",
  "Anchorite",
];

function WizardIcon({ title }: { title: string }) {
  return <li>{title}</li>; //TODO: convert to a link that can work with react-router
}

function WizardList() {
  const wizardIcons = WIZARDS.map((wizard) => WizardIcon({ title: wizard }));

  return (
    <div className="header-container">
      <ul>
        <li>Orrery</li>
        {wizardIcons}
      </ul>
    </div>
  );
}

function TabList() {
  return (
    <div className="header-container">
      <ul>
        <li>Summary</li>
        <li>Board</li>
        <li>Codex</li>
      </ul>
    </div>
  );
}

//TODO: this can be componentized and use props for all the data.
function CharacterSheet() {
  return (
    <div className="summary">
      <div className="symbol">♂</div>
      <header className="name">
        <h1>The Warlock, Aristotle</h1>
        <p>
          Keeper of the Throne, Blade-Bearer, the Furious Lord of Lords,
          Archmagus, Fairy-Friend, Oathbreaker, Butcher of Ishana
        </p>
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
          <i>Battleaxe +E</i>
        </p>
      </div>
      <div className="familiar">
        <h3>Familiar:</h3>
        <p>
          <i>Hound +E</i>
        </p>
      </div>
      <div className="fire">
        <h2>Fire</h2>
        <p>2</p>
        <p>
          {" "}
          Ward: <i>3</i>{" "}
        </p>
        <p>
          {" "}
          Companion: <i>Wife</i>{" "}
        </p>
      </div>
      <div className="air">
        <h2>Air</h2>
        <p>2</p>
        <p>
          {" "}
          Ward: <i>3</i>{" "}
        </p>
        <p>
          {" "}
          Companion: <i>Ancestor</i>{" "}
        </p>
      </div>
      <div className="water">
        <h2>Water</h2>
        <p>1</p>
        <p>
          {" "}
          Ward: <i>2</i>{" "}
        </p>
        <p>
          {" "}
          Companion: <i>Wife</i>{" "}
        </p>
      </div>
      <div className="earth">
        <h2>Earth</h2>
        <p>3</p>
        <p>
          {" "}
          Ward: <i>4</i>{" "}
        </p>
        <p>
          {" "}
          Companion: <i>Soldiers</i>{" "}
        </p>
      </div>
      <div className="treasures outlined">
        <h2>Treasures</h2>
        <ul>
          <li>
            A full set of chess pieces, who when commanded, will transform into
            soldiers and fight at your side until sunrise. (King)
          </li>
          <li>
            An iron ring used in ancient days by torturers and soldiers amidst
            the Tragedies. Whoever wears it cannot die from any wound. (Master)
          </li>
          <li>
            One of the last dragon&aposs eggs, rare beyond measure and warm to
            the touch. (Combat)
          </li>
        </ul>
      </div>
      <div className="possessions outlined">
        <h2>Possessions</h2>
        <ul>
          <li>
            {" "}
            A red silk robe, with iron clasps bearing the symbol of Mars.
          </li>
          <li>
            {" "}
            Three sets of clothes, at least: suitable for a wealthy nobleman, a
            general commanding an army, or a simple servant incognito amongst
            the court.
          </li>
          <li>
            {" "}
            Any materials necessary for the casting of magic, such as:
            arrowheads, golden coins, flowers, etc.
          </li>
          <li>
            {" "}
            Any accessibility aids or mobility tools, such as: glasses, a cane,
            painkillers, etc.
          </li>
          <li> This very Codex, filled with the notes of Warlocks past.</li>
        </ul>
      </div>
      <div className="history outlined">
        <h2>History</h2>
      </div>
      <div className="powers outlined">
        <aside>
          <section>
            <h3>Pact Fragment:</h3>
            <ul>
              <li>
                When casting a spell directly against an unwilling foe, or when
                casting any spell during Combat (as discussed during Part IV),
                consult an additional die.
              </li>
              <li>
                Interpret the presence of &ldquot⊖&rdquot (Salt) as
                &ldquot♂&rdquot (Mars).
              </li>
              <li>
                Murder any mortal who stands before you with a single strike of
                your Pact-Fragment, faster than they can react and with such
                certainty that none may dispute their death.
              </li>
            </ul>
          </section>
          <section>
            <h3>Humble Magics:</h3>
            <ul>
              <li>
                Perform a daring feat of physical athleticism which dazzles
                others&apos senses, leap into the air, or lift heavy stones
                which no one else could lift.
              </li>
              <li>
                Roar with a thunderous voice, or carry your voice across a
                battlefield, or act with the sounds of drums and horns at your
                steps, to motivate your troops or dismay others.
              </li>
              <li>
                Place both hands upon someone&aposs shoulders, and in an instant
                divine whether they are an eligible heir for the bloodline of
                Isha&aposs royalty.
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="wrapper">
        <WizardList />
        <TabList />
        <CharacterSheet />
      </div>
    </>
  );
}

export default App;
