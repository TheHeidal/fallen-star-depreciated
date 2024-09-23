import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppTabs from "./components/AppTabs";
import Wizard from "./components/Wizard";
import Codex from "./components/Codex";
import CharacterSheet from "./components/CharacterSheet";

const APP_TABS = [
  { url: "orrery", display: "Orrery", element: "Orrery" },
  { url: "necromancer", display: "Necromancer", element: <Wizard /> },
  {
    url: "hierophant",
    display: "Hierophant",
    element: <Wizard />,
  },
  { url: "warlock", display: "Warlock", element: <Wizard /> },
  { url: "mariner", display: "Mariner", element: <Wizard /> },
  { url: "faustian", display: "Faustian", element: <Wizard /> },
  { url: "sorcerer", display: "Sorcerer", element: <Wizard /> },
  {
    url: "anchorite",
    display: "Anchorite",
    element: <Wizard />,
  },
  { url: "grimoire", display: "Grimoire", element: "Grimoire" },
  { url: "rulebook", display: "Rulebook", element: "Rulebook" },
];

const WIZARD_TABS = [
  { url: "summary", display: "Summary" },
  { url: "board", display: "Board" },
  { url: "codex", display: "Codex" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppTabs tabs={APP_TABS} />,
    children: [
      {
        index: true,
        element: <Navigate to="warlock" replace />,
      },
      { path: "orrery", element: <>orrery</> },
      { path: "grimoire", element: <>grimoire</> },
      { path: "rulebook", element: <>rulebook</> },
      {
        path: ":pactPosition",
        element: <AppTabs tabs={WIZARD_TABS} />,
        children: [
          {
            index: true,
            element: <Navigate to="summary" replace />,
          },
          { path: "summary", element: <CharacterSheet /> },
          { path: "board", element: <>board</> },
          { path: "codex", element: <Codex /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
