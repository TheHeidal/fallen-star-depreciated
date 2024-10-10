import { useReducer } from "react";
import CelestialBody, { CBProps } from "./CelestialBody";
import MonthRing, { MonthRingProps } from "./MonthRing";
import { OrreryState, reducer } from "./orreryReducer";
import { cbID } from "./orreryTypes";
import MoonDisk from "./primatives/MoonDisk";
import Ring from "./primatives/Ring";

interface OrrerySVGProps extends React.SVGProps<SVGSVGElement> {
  cbList: Omit<CBProps, "tokenPosition" | "trackPosition">[];
  monthProps?: MonthRingProps;
  moveRings?: boolean;
  miscCelestialBodyProps?: Partial<CBProps>;
}

export default function OrrerySVG({
  moveRings = false,
  cbList: propCBList,
  monthProps,
  miscCelestialBodyProps,
  ...restProps
}: OrrerySVGProps) {
  const cbList: (cbID & Omit<CBProps, "tokenPosition" | "trackPosition">)[] =
    propCBList.map((props, index) => {
      return {
        id: index,
        ...props,
      };
    });
  const initialState: OrreryState = cbList.map(
    ({
      id,
      tokenProps,
      trackInitialPosition = 0,
      tokenInitialPosition = 0,
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
    <>
      {monthProps && <MonthRing {...monthProps} />}
      <g
        onClick={() => {
          dispatch({ scope: "both", type: "increment" });
        }}>
        <g transform="rotate(-25)">
          <g className="group transition-colors">
            <MoonDisk
              r={21}
              progress={0.1}
              lightClassName="fill-sky-100 group-hover:fill-sky-200"
              darkClassName="fill-slate-950 group-hover:fill-slate-900"
            />
          </g>
          <Ring
            className="fill-neutral-900 stroke-1"
            extRadius={25}
            intRadius={20}
          />
        </g>
      </g>
      <g>
        {cbList.map(({ id, tokenProps, ...cbProps }, index) => {
          const cW = () => {
            dispatch({
              scope: "token",
              type: "increment",
              id: id,
            });
          };
          const wS = () => {
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
      </g>
    </>
  );
}
