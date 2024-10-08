import { useReducer } from "react";
import { motion } from "framer-motion";
import Ring from "./Ring";
import RingPartial from "./RingPartial";
import RingDivisions from "./RingDivisions";
import { PartialDivisonProps, Radii, SpanAngle } from "./orreryTypes";

export interface CelestialBodyProps
  extends SpanAngle,
    React.SVGProps<SVGPathElement> {
  radii: Radii;
  ringClassName: string;
  halfClassName: string;
  tokenClassName: string;
  tokenInitialPosition?: number;
  divisions?: PartialDivisonProps[];
  bounce: number;
}

type CelestialBodyState = {
  tokenPosition: number;
};

function reducer(
  state: CelestialBodyState,
  action: { type: "CW" | "WS"; span: number }
): CelestialBodyState {
  switch (action.type) {
    case "CW":
      return { tokenPosition: state.tokenPosition + action.span };
    case "WS":
      return { tokenPosition: state.tokenPosition - action.span };
  }
}

export default function CelestialBody(props: CelestialBodyProps) {
  const initialTokenPosition =
    typeof props.tokenInitialPosition === "undefined"
      ? 0
      : props.tokenInitialPosition;

  const [state, dispatch] = useReducer(reducer, {
    tokenPosition: initialTokenPosition,
  });
  return (
    <g key={props.key}>
      <Ring className={props.ringClassName} {...props.radii} />
      {props.divisions &&
        props.divisions.map((divisionProps, index) => {
          return (
            <RingDivisions key={index} {...props.radii} {...divisionProps} />
          );
        })}
      <motion.g
        initial={{ rotate: initialTokenPosition }}
        animate={{ rotate: state.tokenPosition }}
        transition={{ type: "spring", bounce: props.bounce }}>
        <g transform={`rotate(${props.spanAngle / 2})`}>
          <RingPartial
            className={props.halfClassName}
            {...props.radii}
            spanAngle={180}
            onClick={() => dispatch({ type: "CW", span: props.spanAngle })}
          />
          <RingPartial
            className={props.halfClassName}
            {...props.radii}
            spanAngle={-180}
            onClick={() => dispatch({ type: "WS", span: props.spanAngle })}
          />
        </g>
        {/* Token */}
        <RingPartial
          className={props.tokenClassName}
          {...props.radii}
          spanAngle={props.spanAngle}
        />
      </motion.g>
    </g>
  );
}
