import { Radii } from "./orreryTypes";
import Ring, { ringProps } from "./primatives/Ring";
import RingDivisionLines, {
  ringDivisionLineProps,
} from "./primatives/RingDivisionLines";

export type TrackProps = React.SVGProps<SVGPathElement> & {
  radii: Radii;
  ringProps?: Omit<ringProps, keyof Radii>;
  divisionPropsList?: Omit<ringDivisionLineProps, keyof Radii>[];
};

export default function Track({ radii, ringProps, ...props }: TrackProps) {
  return (
    <g>
      <Ring {...radii} {...ringProps} />
      {props.divisionPropsList &&
        props.divisionPropsList.map((divisionProps, index) => {
          return (
            <RingDivisionLines key={index} {...radii} {...divisionProps} />
          );
        })}
    </g>
  );
}
