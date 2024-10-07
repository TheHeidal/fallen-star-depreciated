import React from "react";
import { polarToCartesian } from "./angleMisc";

export interface RingDivisionProps extends React.SVGProps<SVGPathElement> {
  intRadius: number;
  extRadius: number;
  divisions: number;
  offset: number;
}

export default function RingDivisions(props: RingDivisionProps) {
  const divisionAngle = 360 / props.divisions;
  let divisionPaths = "";
  for (let a = props.offset; a < 360; a += divisionAngle) {
    divisionPaths = divisionPaths.concat(
      `M ${polarToCartesian(props.extRadius, a).str}
        L ${polarToCartesian(props.intRadius, a).str}
        `
    );
  }
  return <path {...props} d={divisionPaths} />;
}
