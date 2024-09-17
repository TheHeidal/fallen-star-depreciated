import { TABS } from "../misc";

function Tab({ name }: { name: string }) {
  //TODO: refactor for react-router
  return (
    <li>
      <a href={`/${name}`}>{name}</a>
    </li>
  );
}
export default function TabList() {
  return (
    <div className="header-container">
      <ul>
        {TABS.map((str) => (
          <Tab name={str} />
        ))}
      </ul>
    </div>
  );
}
