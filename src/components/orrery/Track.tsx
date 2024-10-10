import { Radii } from "./orreryTypes";
import Ring, { ringProps } from "./primatives/Ring";
import RingDivisions, { ringDivisionProps } from "./primatives/RingDivisions";

export type TrackProps = React.SVGProps<SVGPathElement> & {
  radii: Radii;
  ringProps?: Omit<ringProps, keyof Radii>;
  divisions?: Omit<ringDivisionProps, keyof Radii>[];
};

export default function Track(props: TrackProps) {
  return (
    <g>
      <Ring {...props.radii} {...props.ringProps} />
      {props.divisions &&
        props.divisions.map((divisionProps, index) => {
          return (
            <RingDivisions key={index} {...props.radii} {...divisionProps} />
          );
        })}
    </g>
  );
}
