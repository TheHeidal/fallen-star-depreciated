import { Link, NavLink } from "react-router-dom";
import "./TabList.css";

function Tab({ url, display }: { url: string; display: string }) {
  return (
    <li key={url}>
      <NavLink
        to={`${url}`}
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }>
        {display}
      </NavLink>
    </li>
  );
}

export function TabList({
  tabs,
  ariaLabel,
}: {
  tabs: { url: string; display: string }[];
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
