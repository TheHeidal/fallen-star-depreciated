import { ReactElement, JSXElementConstructor, ReactNode } from "react";
import { Radii, PartialDivisonProps } from "./orreryTypes";
import Ring from "./Ring";
import RingDivisions from "./RingDivisions";
import RingPartial from "./RingPartial";

export interface MonthRingProps {
  radii: Radii;
  ring?: React.SVGProps<SVGPathElement>;
  divisions?: PartialDivisonProps;
}
export default function MonthRing({
  radii,
  ring = { className: "fill-slate-100" },
  divisions = { divisions: 12 },
}: MonthRingProps) {
  let monthSections: JSX.Element[] = [];
  for (let i = 0; i < divisions.divisions; i++) {
    monthSections = monthSections.concat(
      <g key={i} transform={`rotate(${i * (360 / divisions.divisions)})`}>
        <RingPartial
          {...radii}
          spanAngle={360 / divisions.divisions}
          className="fill-blue-200 transition-opacity opacity-0 hover:opacity-50"
        />
      </g>
    );
  }
  return (
    <g>
      <Ring {...radii} {...ring} />
      {monthSections}
      <RingDivisions {...radii} {...divisions} />
    </g>
  );
}
