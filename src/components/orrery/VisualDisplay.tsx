import { motion } from "framer-motion";
import { cbID, Radii, StyleMap, TokenProps, TrackProps } from "./orreryTypes";
import { OrreryAction, OrreryState } from "./orreryLogic";
import MonthRing, { MonthRingProps } from "./MonthRing";
import MoonDisk from "./primitives/MoonDisk";
import Ring from "./primitives/Ring";
import Track from "./Track";
import Token from "./Token";
import { MONTHS } from "./data";

export type CBStyle = cbID & {
  radii: Radii;
  trackProps: Omit<TrackProps, "radii">;
  tokenProps: Omit<TokenProps, "radii">;
};

interface OrrerySVGProps {
  state: OrreryState;
  dispatch: React.Dispatch<OrreryAction>;
  styles: StyleMap;
  monthProps?: MonthRingProps;
  moveRings?: boolean;
}

export default function VisualDisplay({
  state,
  dispatch,
  styles,
  monthProps = {
    radii: { intRadius: 100, extRadius: 130 },
    months: MONTHS,
  },
  moveRings = false,
}: OrrerySVGProps) {
  return (
    <>
      {monthProps && <MonthRing {...monthProps} />}
      <g
        onClick={() => {
          dispatch({ scope: moveRings ? "both" : "token", type: "increment" });
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
        {state.map(({ id, bodySpan, trackPosition, tokenPosition }, index) => {
          const transition = {
            type: "spring",
            bounce: 0.15,
            duration: 2,
          };
          return (
            <g key={index}>
              <motion.g
                initial={false}
                animate={{ rotate: trackPosition }}
                transition={transition}>
                <Track {...styles[id]} />
              </motion.g>
              <motion.g
                initial={false}
                animate={{ rotate: tokenPosition }}
                transition={transition}>
                <Token
                  id={id}
                  dispatch={dispatch}
                  spanAngle={bodySpan}
                  {...styles[id]}
                />
              </motion.g>
            </g>
          );
        })}
      </g>
    </>
  );
}
