import { Radii } from "./orreryTypes";
import Ring, { ringProps } from "./primatives/Ring";
import RingDivisionLines, {
  ringDivisionLineProps,
} from "./primatives/RingDivisionLines";

export type TrackProps = React.SVGProps<SVGPathElement> & {
  radii: Radii;
  ringProps?: Omit<ringProps, keyof Radii>;
  divisions?: Omit<ringDivisionLineProps, keyof Radii>[];
};

export default function Track(props: TrackProps) {
  return (
    <g>
      <Ring {...props.radii} {...props.ringProps} />
      {props.divisions &&
        props.divisions.map((divisionProps, index) => {
          return (
            <RingDivisionLines
              key={index}
              {...props.radii}
              {...divisionProps}
            />
          );
        })}
    </g>
  );
}
