import "./App.css";
import { useState } from "react";
import tabs
import WizardList from "./components/WizardList";
import TabList from "./components/TabList";
import WarlockSummary from "./components/WarlockSummary";

function App(props) {
  const [currentTab, setTab] = useState("summary");
  return (
    <>
      <div className="wrapper">
        <WizardList />
        <TabList currentTab={currentTab} />
        <div className="content">
          <WarlockSummary />
        </div>
      </div>
    </>
  );
}

export default App;
