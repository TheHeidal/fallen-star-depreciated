import { cbID } from "./orreryTypes";

type OrreryStateMember = cbID & {
  bodySpan: number;
  trackPosition: number;
  tokenPosition: number;
};

export type OrreryState = OrreryStateMember[];

export type OrreryAction = Partial<cbID> & {
  scope: "track" | "token" | "both";
} & ({ type: "increment" | "decrement" } | { type: "set"; newValue: number });

export function reducer(state: OrreryState, action: OrreryAction) {
  function byType(span: number, prev: number, action: OrreryAction) {
    switch (action.type) {
      case "increment":
        return prev + span;
      case "decrement":
        return prev - span;
      case "set":
        return action.newValue;
    }
  }

  return state.map((prev) => {
    if (action.id === undefined || action.id === prev.id) {
      return {
        ...prev,
        trackPosition:
          action.scope === "token"
            ? prev.trackPosition
            : byType(prev.bodySpan, prev.trackPosition, action),
        tokenPosition:
          action.scope === "track"
            ? prev.tokenPosition
            : byType(prev.bodySpan, prev.tokenPosition, action),
      };
    }
    return prev;
  });
}
