import { WIZARDS } from "../misc";

function WizardIcon({ title }: { title: string }) {
  return (
    <li>
      <a href={`/${title}`}>{title}</a>
    </li>
  );
}
export default function MainNavigator() {
  const wizardIcons = WIZARDS.map((wizard) => WizardIcon({ title: wizard }));

  return (
    <nav className="header-container">
      <ul>
        <li>
          <a href="/Orrery">Orrery</a>
        </li>
        {wizardIcons}
        <li>
          <a href="/Grimoire">Grimoire</a>
        </li>
        <li>
          <a href="/Rulebook">Rulebook</a>
        </li>
      </ul>
    </nav>
  );
}
