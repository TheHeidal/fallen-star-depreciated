import { Outlet } from "react-router-dom";
import { TabList } from "./TabList";

const pages = [
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

export default function Root() {
  return (
    <>
      <TabList tabs={pages} ariaLabel="pages" />
      <Outlet />
    </>
  );
}
