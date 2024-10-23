import { useReducer } from "react";
import { reducer } from "./orreryLogic";
import VisualDisplay from "./VisualDisplay";
import TextDisplay from "./TextDisplay";
import { INITIAL_STATE_DATA } from "./data";

export default function OrreryDisplay() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE_DATA);
  return (
    <>
      <VisualDisplay state={state} dispatch={dispatch} />
      <TextDisplay state={state} dispatch={dispatch} />
    </>
  );
}
