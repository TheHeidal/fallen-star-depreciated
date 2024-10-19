import { TrackProps } from "./orreryTypes";
import Ring from "./primatives/Ring";
import RingDivisionLines from "./primatives/RingDivisionLines";

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
