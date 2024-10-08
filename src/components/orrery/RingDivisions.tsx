import { polarToCartesian } from "./angleMisc";
import { PartialDivisonProps, Radii } from "./orreryTypes";

export default function RingDivisions({
  divisions,
  extRadius,
  intRadius,
  className = "stroke-black stroke-1",
  ...props
}: PartialDivisonProps & Radii) {
  const divisionAngle = 360 / divisions;
  let divisionPaths = "";
  for (let angle = 0; angle < 360; angle += divisionAngle) {
    divisionPaths = divisionPaths.concat(
      `
      M ${polarToCartesian(extRadius, angle).str}
      L ${polarToCartesian(intRadius, angle).str}`
    );
  }
  return <path className={className} {...props} d={divisionPaths} />;
}
