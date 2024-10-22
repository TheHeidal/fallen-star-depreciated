import { HOUSES } from "./data";
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
      <ol>
        {state.map(({ id, tokenPosition, bodySpan }) => {
          const houses = HOUSES.filter((val, index) => {
            return inHouse(tokenPosition, bodySpan, index);
          });
          return (
            <li key={uuidv4()}>{`${id} extends from ${tokenPosition % 360} to ${
              (tokenPosition + bodySpan) % 360
            }, within ${houses}`}</li>
          );
        })}
      </ol>
    </>
  );
}
