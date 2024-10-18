import { Radii } from "./orreryTypes";
import Ring, { ringProps } from "./primatives/Ring";
import RingDivisionLines, {
  ringDivisionLineProps,
} from "./primatives/RingDivisionLines";

export type TrackProps = {
  radii: Radii;
  ringProps?: Omit<ringProps, keyof Radii>;
  divisionPropsList?: Omit<ringDivisionLineProps, keyof Radii>[];
};

export default function Track({
  radii,
  ringProps,
  divisionPropsList,
}: TrackProps) {
  return (
    <g>
      <Ring {...radii} {...ringProps} />
      {divisionPropsList &&
        divisionPropsList.map((divisionProps, index) => {
          return (
            <RingDivisionLines key={index} {...radii} {...divisionProps} />
          );
        })}
    </g>
  );
}
