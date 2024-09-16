import "./App.css";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import WizardList from "./components/WizardList";
import WarlockSummary from "./components/WarlockSummary";

function App() {
  return (
    <>
      <div className="wrapper">
        <WizardList />

        <Tabs>
          <TabList>
            <Tab>Character Sheet</Tab>
            <Tab>Board</Tab>
            <Tab>Codex</Tab>
          </TabList>
          <TabPanel>
            <h2>Ur the faustian</h2>
          </TabPanel>
          <TabPanel>
            <h2>Ur losing</h2>
          </TabPanel>
          <TabPanel>
            <h2>Don't lose!</h2>
          </TabPanel>
        </Tabs>
        <div className="content"></div>
      </div>
    </>
  );
}

export default App;
