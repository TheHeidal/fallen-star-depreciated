import { useReducer } from "react";
import CelestialBody, { CBProps } from "./CelestialBody";
import MonthRing, { MonthRingProps } from "./MonthRing";
import { reducer as orreryReducer } from "./reducer";

interface OrrerySVGProps extends React.SVGProps<SVGSVGElement> {
  cbList: Omit<CBProps, "tokenPosition" | "trackPosition">[];
  monthProps?: MonthRingProps;
}

// function reducer(
//   state: CelestialBodyState,
//   action: { type: "CW" | "WS"; span: number }
// ): CelestialBodyState {
//   switch (action.type) {
//     case "CW":
//       return { tokenPosition: state.tokenPosition + action.span };
//     case "WS":
//       return { tokenPosition: state.tokenPosition - action.span };
//   }
// }

export default function OrrerySVG({ cbList, ...restProps }: OrrerySVGProps) {
  const [state, dispatch] = useReducer(orreryReducer, 0);

  return (
    <svg {...restProps}>
      {restProps.monthProps && <MonthRing {...restProps.monthProps} />}
      <g
        onClick={() => {
          dispatch({ type: "increment" });
        }}>
        <circle
          className="fill-white transition-colors hover:fill-blue-200"
          cx={0}
          cy={0}
          r={25}
        />
      </g>
      {cbList.map((cbProps, index) => {
        return (
          <g key={index}>
            <CelestialBody {...cbProps} />
          </g>
        );
      })}
    </svg>
  );
}
