import "./App.css";
import "react-tabs/style/react-tabs.css";
import { wizard } from "./misc";
import MainNavigator from "./components/MainNavigator";
import TabList from "./components/TabList";
import CharacterSheet from "./components/CharacterSheet";
import { WARLOCK_PROPS } from "./assets/default_warlock";

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
