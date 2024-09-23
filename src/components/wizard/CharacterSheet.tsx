import React from "react";
import { WARLOCK_PROPS } from "../../assets/default_warlock";
import {
  wizardCircle,
  wizardHistory,
  powers,
  inlineRenderable,
} from "../../misc";

//TODO: make companion link to the codex
function CharacterSheetCircle({ circle, value, companion }: wizardCircle) {
  return (
    <div className={`outlined ${circle.toLowerCase()}`}>
      <h2>{circle}</h2>
      <p>{value}</p>
      <p>
        Ward: <i>{value + 1}</i>
      </p>
      <p>
        Companion: <i>{companion}</i>
      </p>
    </div>
  );
}

function SummaryList({
  heading,
  items,
}: {
  heading: string;
  items: { key: React.Key; content: inlineRenderable }[];
}) {
  const listItems = items.map(({ key, content }) => (
    <li key={key}>{content}</li>
  ));
  return (
    <div className="outlined">
      <h2>{heading}</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

function History({
  oldMaster,
  age,
  changes,
  manhood,
  appearance,
}: wizardHistory) {
  return (
    <div className="history outlined">
      <h2>History</h2>
      <section>
        <h3>Old Master</h3>
        <ul>
          <li>{oldMaster.known}</li>
          <li>{oldMaster.unknown}</li>
        </ul>
      </section>
      <section>
        <h3 className="inline">Age:</h3>
        <p>{age}</p>
      </section>
      <section>
        <h3>Changes of Magic</h3>
        <ul>
          {changes.map(({ key, content }) => (
            <li key={key}>{content}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Manhood:</h3>
        <p>{manhood}</p>
      </section>
      <section>
        <h3>Appearance:</h3>
        <p>{appearance}</p>
      </section>
    </div>
  );
}
function Powers({ fragment, humble }: powers) {
  return (
    <div className="powers outlined">
      <aside>
        <section>
          <h3>Pact Fragment:</h3>
          <ul>
            {fragment.map(({ key, content }) => (
              <li key={key}>{content}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Humble Magics:</h3>
          <ul>
            {humble.map(({ key, content }) => (
              <li key={key}>{content}</li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
export default function CharacterSheet() {
  const props = WARLOCK_PROPS;

  return (
    <div className="summary">
      <div className="symbol">♂</div>
      <header className="name">
        <h1>
          The {props.position}, {props.name}
        </h1>
        <p>{props.titles}</p>
      </header>
      <div className="pronouns">
        <h3>Pronouns:</h3>
        <p>
          <i>he/him</i>
        </p>
      </div>
      <div className="fragment">
        <h3>Fragment:</h3>
        <p>
          <i>{props.fragment}</i>
        </p>
      </div>
      <div className="familiar">
        <h3>Familiar:</h3>
        <p>
          <i>{props.familiar}</i>
        </p>
      </div>
      <CharacterSheetCircle {...props.fire} />
      <CharacterSheetCircle {...props.air} />
      <CharacterSheetCircle {...props.water} />
      <CharacterSheetCircle {...props.earth} />
      <SummaryList heading="Treasures" items={props.treasures} />
      <SummaryList heading="Possessions" items={props.possessions} />
      <History {...props.history} />
      <Powers {...props.powers} />
    </div>
  );
}
