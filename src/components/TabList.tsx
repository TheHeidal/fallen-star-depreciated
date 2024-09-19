import { Link } from "react-router-dom";
import { renderable } from "../misc";

function Tab({ url, display }: { url: string; display: string }) {
  return (
    <li key={url}>
      <Link to={`${url}`}>{display}</Link>
    </li>
  );
}

export function TabList({
  tabs,
  ariaLabel,
}: {
  tabs: { url: string; display: renderable }[];
  ariaLabel: string;
}) {
  return (
    <nav className="tab-container" aria-label={ariaLabel}>
      <ul>
        {tabs.map((tab) => (
          <Tab key={tab.url} {...tab} />
        ))}
      </ul>
    </nav>
  );
}
