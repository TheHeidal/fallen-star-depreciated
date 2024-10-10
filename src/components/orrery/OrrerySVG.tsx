import { useReducer } from "react";
import CelestialBody, { CBProps } from "./CelestialBody";
import MonthRing, { MonthRingProps } from "./MonthRing";

type OrreryState = {
  id: number;
  bodySpan: number;
  trackPosition: number;
  tokenPosition: number;
}[];

type OrreryAction = {
  id?: number;
  scope: "track" | "token" | "both";
} & ({ type: "increment" | "decrement" } | { type: "set"; newValue: number });

function reducer(state: OrreryState, action: OrreryAction) {
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

interface OrrerySVGProps extends React.SVGProps<SVGSVGElement> {
  moveRings?: boolean;
  cbList: Omit<CBProps, "tokenPosition" | "trackPosition">[];
  monthProps?: MonthRingProps;
  miscCelestialBodyProps?: Partial<CBProps>;
}

export default function OrrerySVG({
  moveRings = false,
  cbList: cbLNoId,
  monthProps,
  miscCelestialBodyProps,
  ...restProps
}: OrrerySVGProps) {
  const cbList = cbLNoId.map(({ ...rest }, index) => {
    return {
      id: index,
      ...rest,
    };
  });
  const initialState: OrreryState = cbList.map(
    ({
      tokenProps,
      trackInitialPosition = 0,
      tokenInitialPosition = 0,
      id,
    }) => {
      return {
        id: id,
        bodySpan: tokenProps.spanAngle,
        trackPosition: trackInitialPosition,
        tokenPosition: tokenInitialPosition,
      };
    }
  );
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <svg {...restProps}>
      {monthProps && <MonthRing {...monthProps} />}
      <g
        onClick={() => {
          dispatch({ scope: "both", type: "increment" });
        }}>
        <circle
          className="fill-white transition-colors hover:fill-blue-200"
          cx={0}
          cy={0}
          r={25}
        />
      </g>
      {cbList.map(({ id, tokenProps, ...cbProps }, index) => {
        const cW = () => {
          console.log(`incremented token ${id}`);
          console.log(state[id]);
          dispatch({
            scope: "token",
            type: "increment",
            id: id,
          });
        };
        const wS = () => {
          console.log(`decremented token ${id}`);
          console.log(state[id]);
          dispatch({ scope: "token", type: "decrement", id: id });
        };
        return (
          <g key={index}>
            <CelestialBody
              {...miscCelestialBodyProps}
              trackInitialPosition={initialState[index].trackPosition}
              trackPosition={
                moveRings
                  ? state[index].trackPosition
                  : initialState[index].trackPosition
              }
              tokenInitialPosition={initialState[index].tokenPosition}
              tokenPosition={state[index].tokenPosition}
              tokenProps={{ onCW: cW, onWS: wS, ...tokenProps }}
              {...cbProps}
            />
          </g>
        );
      })}
    </svg>
  );
}
