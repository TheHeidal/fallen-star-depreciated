import { OrreryAction, OrreryState } from "./orreryLogic";

export default function TextDisplay({
  state,
  dispatch,
}: {
  state: OrreryState;
  dispatch: React.Dispatch<OrreryAction>;
}) {
  return <>"Orrery"</>;
}
