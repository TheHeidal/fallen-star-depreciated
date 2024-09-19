import { Outlet } from "react-router-dom";
import { TabList } from "./TabList";

const WIZARD_TABS = [
  { url: "summary", display: "Summary" },
  { url: "board", display: "Board" },
  { url: "codex", display: "Codex" },
];

export default function Wizard() {
  return (
    <>
      <TabList tabs={WIZARD_TABS} ariaLabel="tabs" />
      <Outlet />
    </>
  );
}
