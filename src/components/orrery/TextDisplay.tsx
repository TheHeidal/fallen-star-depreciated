import { HOUSES, PLANET_NAMES } from "./data";
import { inHouse, OrreryAction, OrreryState } from "./orreryLogic";
import { v4 as uuidv4 } from "uuid";

export default function TextDisplay({
  state,
  dispatch,
}: {
  state: OrreryState;
  dispatch: React.Dispatch<OrreryAction>;
}) {
  return (
    <>
      <ol className="list-disc list-inside">
        {state.map(({ id, tokenPosition, bodySpan }) => {
          const houses = HOUSES.filter((val, index) => {
            return inHouse(tokenPosition, bodySpan, index);
          });
          return (
            <li key={uuidv4()}>{`${PLANET_NAMES[id]} extends from ${
              tokenPosition % 360
            } to ${(tokenPosition + bodySpan) % 360}, within ${houses}`}</li>
          );
        })}
      </ol>
    </>
  );
}
