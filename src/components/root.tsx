import { Outlet } from "react-router-dom";
import { TabList } from "./TabList";

const pages = [
  { url: "orrery", display: "Orrery" },
  { url: "wizards/necromancer", display: "Necromancer" },
  { url: "wizards/hierophant", display: "Hierophant" },
  { url: "wizards/warlock", display: "Warlock" },
  { url: "wizards/mariner", display: "Mariner" },
  { url: "wizards/faustian", display: "Faustian" },
  { url: "wizards/sorcerer", display: "Sorcerer" },
  { url: "wizards/anchorite", display: "Anchorite" },
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
