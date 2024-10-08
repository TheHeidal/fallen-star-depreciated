import { ReactElement, useReducer } from "react";
import { motion } from "framer-motion";
import CelestialBody, { CelestialBodyProps } from "./CelestialBody";
import MonthRing, { MonthRingProps } from "./MonthRing";

interface OrrerySVGProps extends React.SVGProps<SVGSVGElement> {
  cbList: CelestialBodyProps[];
  advancer?: ReactElement;
  monthProps?: MonthRingProps;
  bounce?: number;
  duration?: number;
}

function reducer(state: number, action: { type: "increment" | "decrement" }) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
  }
}

export default function OrrerySVG({
  cbList,
  advancer,
  bounce = 0.15,
  duration = 0.8,

  ...restProps
}: OrrerySVGProps) {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <svg {...restProps}>
      {restProps.monthProps && <MonthRing {...restProps.monthProps} />}
      <g
        onClick={() => {
          dispatch({ type: "increment" });
        }}>
        {advancer}
      </g>
      {cbList.map((cbProps, index) => {
        return (
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: state * cbProps.spanAngle }}
            transition={{ type: "spring", bounce: bounce, duration: duration }}>
            <CelestialBody key={index} {...cbProps} />
          </motion.g>
        );
      })}
    </svg>
  );
}
