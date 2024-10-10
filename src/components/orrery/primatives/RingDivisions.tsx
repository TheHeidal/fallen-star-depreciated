import { polarToCartesian } from "../angleMisc";
import { Radii } from "../orreryTypes";

export type ringDivisionProps = { divisions: number } & Radii &
  React.SVGProps<SVGPathElement>;

export default function RingDivisions({
  divisions,
  extRadius,
  intRadius,
  className = "stroke-black stroke-1",
  ...props
}: ringDivisionProps) {
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
