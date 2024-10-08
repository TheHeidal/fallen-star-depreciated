import { motion } from "framer-motion";
import { useReducer } from "react";
import { SpanAngle, Radii } from "./orreryTypes";
import RingSegment, { ringSegmentProps } from "./RingSegment";

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

export type TokenProps = React.SVGProps<SVGGElement> &
  SpanAngle & {
    radii: Radii;
    halfProps?: Omit<ringSegmentProps, keyof Radii | keyof SpanAngle>;
    pieceProps?: Omit<ringSegmentProps, keyof Radii | keyof SpanAngle>;
    tokenInitialPosition?: number;
    bounce: number;
  };

export default function Token({
  radii,
  tokenInitialPosition = 0,
  ...props
}: TokenProps) {
  const [state, dispatch] = useReducer(reducer, {
    tokenPosition: tokenInitialPosition,
  });
  return (
    <g key={props.key}>
      <motion.g
        initial={{ rotate: tokenInitialPosition }}
        animate={{ rotate: state.tokenPosition }}
        transition={{ type: "spring", bounce: props.bounce }}>
        <g transform={`rotate(${props.spanAngle / 2})`}>
          <RingSegment
            className="fill-blue-200 transition-opacity opacity-0 hover:opacity-50"
            {...radii}
            spanAngle={180}
            onClick={() => dispatch({ type: "CW", span: props.spanAngle })}
            {...props.halfProps}
          />
          <RingSegment
            className="fill-blue-200 transition-opacity opacity-0 hover:opacity-50"
            {...radii}
            spanAngle={-180}
            onClick={() => dispatch({ type: "WS", span: props.spanAngle })}
            {...props.halfProps}
          />
        </g>
        {/* Token */}
        <RingSegment
          {...radii}
          spanAngle={props.spanAngle}
          {...props.pieceProps}
        />
      </motion.g>
    </g>
  );
}
