import { Radii } from "./orreryTypes";
import Ring, { ringProps } from "./Ring";
import RingDivisions, { ringDivisionProps } from "./RingDivisions";
import RingSegment from "./RingSegment";

export type MonthRingProps = {
  radii: Radii;
  ringProps?: Omit<ringProps, keyof Radii>;
  divisionsProps?: Omit<ringDivisionProps, keyof Radii>;
};

export default function MonthRing({
  radii,
  ringProps = { className: "fill-slate-100" },
  divisionsProps = { divisions: 12 },
}: MonthRingProps) {
  let monthSections: JSX.Element[] = [];
  for (let i = 0; i < divisionsProps.divisions; i++) {
    monthSections = monthSections.concat(
      <g key={i} transform={`rotate(${i * (360 / divisionsProps.divisions)})`}>
        <RingSegment
          {...radii}
          spanAngle={360 / divisionsProps.divisions}
          className="fill-blue-200 transition-opacity opacity-0 hover:opacity-50"
        />
      </g>
    );
  }
  return (
    <g>
      <Ring {...radii} {...ringProps} />
      {monthSections}
      <RingDivisions {...radii} {...divisionsProps} />
    </g>
  );
}
