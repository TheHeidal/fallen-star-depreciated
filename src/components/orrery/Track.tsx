import { TrackProps } from "./orreryTypes";
import Ring from "./primitives/Ring";
import RingDivisionLines from "./primitives/RingDivisionLines";

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
