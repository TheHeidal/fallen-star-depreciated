import { Link } from "react-router-dom";

export function Tab({ url, display }: { url: string; display: string }) {
  return (
    <li>
      <Link to={`${url}`}>{display}</Link>
    </li>
  );
}
