import { motion } from "framer-motion";
import { cbID, PlanetVariants, Radii } from "./orreryTypes";
import { OrreryAction, OrreryState } from "./orreryReducer";
import MonthRing, { MonthRingProps } from "./MonthRing";
import MoonDisk from "./primatives/MoonDisk";
import Track, { TrackProps } from "./Track";
import Token, { TokenProps } from "./Token";
import Ring from "./primatives/Ring";

export type CBStyle = cbID & {
  radii: Radii;
  trackProps: Omit<TrackProps, "radii">;
  tokenProps: Omit<TokenProps, "radii">;
};

interface OrrerySVGProps {
  state: OrreryState;
  dispatch: React.Dispatch<OrreryAction>;
  cbSpecifications: CelestialBodySpecification[];
  cbList: CBStyle[];
  monthProps?: MonthRingProps;
  moveRings?: boolean;
}

interface CelestialBodySpecification {
  radii: Radii;
  divisions: number;
  divisonOffset?: number;
  tokenSpanAngle: number;
  tokeninitialAngle?: number;
  variants: {
    ring?: PlanetVariants;
    divisions?: string;
    token?: PlanetVariants;
  };
}

export default function OrrerySVG({
  state,
  dispatch,
  cbList,
  monthProps,
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
        {cbList.map(({ id, tokenProps, trackProps, radii }, index) => {
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
          const transition = {
            type: "spring",
            bounce: 0.15,
            duration: 3,
          };
          return (
            <g key={index}>
              <motion.g
                initial={false}
                animate={{ rotate: state[index].trackPosition }}
                transition={transition}>
                <Track radii={radii} {...trackProps} />
              </motion.g>
              <motion.g
                initial={false}
                animate={{ rotate: state[index].tokenPosition }}
                transition={{
                  type: "spring",
                  bounce: 0.15,
                  duration: 3,
                }}>
                <Token radii={radii} onCW={cW} onWS={wS} {...tokenProps} />
              </motion.g>
            </g>
          );
        })}
      </g>
    </>
  );
}
