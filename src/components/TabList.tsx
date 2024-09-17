import { renderable } from "../misc";
import { Tab } from "./Tab";

export function TabList({
  tabs,
}: {
  tabs: { url: string; display: renderable }[];
}) {
  return (
    <nav className="tab-container">
      <ul>
        {tabs.map((tab) => (
          <Tab {...tab} />
        ))}
      </ul>
    </nav>
  );
}
