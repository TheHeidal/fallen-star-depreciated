import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppTabs from "./components/AppTabs";
import Codex from "./components/wizard/Codex";
import CharacterSheet from "./components/wizard/CharacterSheet";

const APP_TABS = [
  { url: "orrery", display: "Orrery" },
  { url: "necromancer", display: "Necromancer" },
  { url: "hierophant", display: "Hierophant" },
  { url: "warlock", display: "Warlock" },
  { url: "mariner", display: "Mariner" },
  { url: "faustian", display: "Faustian" },
  { url: "sorcerer", display: "Sorcerer" },
  { url: "anchorite", display: "Anchorite" },
  { url: "grimoire", display: "Grimoire" },
  { url: "rulebook", display: "Rulebook" },
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

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
