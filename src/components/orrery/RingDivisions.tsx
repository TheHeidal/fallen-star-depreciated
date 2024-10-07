import { polarToCartesian } from "./angleMisc";
import { RingDivisionProps } from "./orreryTypes";

export default function RingDivisions(props: RingDivisionProps) {
  const divisionAngle = 360 / props.divisions;
  let divisionPaths = "";
  for (let a = 0; a < 360; a += divisionAngle) {
    divisionPaths = divisionPaths.concat(
      `M ${polarToCartesian(props.extRadius, a).str}
        L ${polarToCartesian(props.intRadius, a).str}
        `
    );
  }
  return <path {...props} d={divisionPaths} />;
}
