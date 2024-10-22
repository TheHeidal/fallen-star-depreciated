import { OrreryAction, OrreryState } from "./orreryLogic";
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
        {state.map(({ id, bodySpan, trackPosition, tokenPosition }) => {
          return (
            <li key={uuidv4()}>{`${id} extends from ${tokenPosition % 360} to ${
              (tokenPosition + bodySpan) % 360
            }`}</li>
          );
        })}
      </ol>
    </>
  );
}
