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

export function inHouse(
  tokenPosition: number,
  bodySpan: number,
  houseIndex: number
): boolean {
  const tokenEdgeWS = ((tokenPosition % 360) + 360) % 360;
  const tokenEdgeCW = tokenEdgeWS + bodySpan;

  if (tokenEdgeCW > 360) {
    return (
      inHouse(tokenEdgeWS, 360 - tokenEdgeWS, houseIndex) ||
      inHouse(0, tokenEdgeCW % 360, houseIndex)
    );
  }

  const houseEdgeWS = 30 * houseIndex;
  const houseEdgeCW = houseEdgeWS + 30;
  return (
    (houseEdgeWS < tokenEdgeWS + 0.001 && tokenEdgeWS + 0.001 < houseEdgeCW) ||
    (houseEdgeWS < tokenEdgeCW - 0.001 && tokenEdgeCW - 0.001 < houseEdgeCW) ||
    (tokenEdgeWS < houseEdgeWS && houseEdgeCW < tokenEdgeCW)
  );
}

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
