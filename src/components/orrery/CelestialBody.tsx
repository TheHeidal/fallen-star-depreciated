import { useReducer } from "react";
import Ring from "./Ring";
import RingPartial from "./RingPartial";
import RingDivisions from "./RingDivisions";
import { Divisions, Radii, SpanAngle } from "./orreryTypes";

interface CelestialBodyProps extends SpanAngle, React.SVGProps<SVGPathElement> {
  radii: Radii;
  ringClassName: string;
  halfClassName: string;
  tokenClassName: string;
  tokenAngle?: number;
  divisions?: Divisions[];
}

type CelestialBodyState = {
  tokenAngle: number;
};

function reducer(
  state: CelestialBodyState,
  action: { type: "CW" | "WS"; span: number }
): CelestialBodyState {
  switch (action.type) {
    case "CW":
      return { tokenAngle: state.tokenAngle + action.span };
    case "WS":
      return { tokenAngle: state.tokenAngle - action.span };
  }
}

export default function CelestialBody(props: CelestialBodyProps) {
  const [state, dispatch] = useReducer(reducer, {
    tokenAngle: typeof props.tokenAngle === "undefined" ? 0 : props.tokenAngle,
  });
  function cw() {
    dispatch({ type: "CW", span: props.spanAngle });
  }
  function ws() {
    dispatch({ type: "WS", span: props.spanAngle });
  }
  return (
    <g key={props.key}>
      <Ring className={props.ringClassName} {...props.radii} />
      {props.divisions &&
        props.divisions.map((divisionProps, index) => {
          return (
            <RingDivisions key={index} {...props.radii} {...divisionProps} />
          );
        })}
      <g transform={`rotate(${state.tokenAngle})`}>
        <g transform={`rotate(${props.spanAngle / 2})`}>
          <RingPartial
            className={props.halfClassName}
            {...props.radii}
            spanAngle={180}
            onClick={cw}
          />
          <RingPartial
            className={props.halfClassName}
            {...props.radii}
            spanAngle={-180}
            onClick={ws}
          />
        </g>
        <RingPartial
          className={props.tokenClassName}
          {...props.radii}
          spanAngle={props.spanAngle}
        />
      </g>
    </g>

    // <g key={key}>
    //   <Ring
    //     id={`${key}_Ring`}
    //     className={ringClassName}
    //     intRadius={intRadius}
    //     extRadius={extRadius}
    //     tokenAngle={centerAngle}
    //     divisionParams={divisionParams}
    //     onCW={() => {
    //       dispatch({ type: "WS", span: spanAngle });
    //     }}
    //     onWS={() => {
    //       dispatch({ type: "CW", span: spanAngle });
    //     }}
    //   />

    //   <g className={`rotate-[${state.tokenAngle}deg]`}>
    //     <RingHalf
    //       className="fill-transparent hover:fill-gray-100 transition-colors"
    //       intRadius={intRadius}
    //       extRadius={extRadius}
    //       onClick={() => {
    //         dispatch({ type: "WS", span: spanAngle });
    //       }}
    //     />
    //     <RingHalf
    //       className="rotate-180 fill-transparent hover:fill-gray-100 transition-colors"
    //       intRadius={intRadius}
    //       extRadius={extRadius}
    //       onClick={() => {
    //         dispatch({ type: "CW", span: spanAngle });
    //       }}
    //     />
    //   </g>
    //   <g>
    //     <Token
    //       key={`${id}_Token`}
    //       id={`${id}_Token`}
    //       className={tokenClassName}
    //       intRadius={intRadius}
    //       extRadius={extRadius}
    //       spanAngle={spanAngle}
    //       centerAngle={state.tokenAngle}
    //     />
    //   </g>
    // </g>
  );
}
