import { Outlet } from "react-router-dom";
import MainNavigator from "./MainNavigator";
import { WIZARDS } from "../misc";
import { Tab } from "./Tab";
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
  const pageIcons = pages.map((page) => Tab({ ...page }));
  return (
    <>
      <TabList tabs={pages} />
      <Outlet />
    </>
  );
}
