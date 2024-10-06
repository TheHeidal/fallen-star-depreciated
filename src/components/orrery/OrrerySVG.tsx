import type { RingParams } from "./Ring";
import Ring from "./Ring";

export function OrrerySVG({
  className,
  viewbox = "-125 -125 250 250",
  childrenList,
}: {
  className?: string;
  viewbox?: string;
  childrenList: RingParams[];
}) {
  return (
    <svg className={className} viewBox={viewbox}>
      <rect x="-300" y="-300" width={"600"} height={"600"} fill="grey" />
      {childrenList.map((props) => (
        <Ring key={`${props.id}_Ring`} {...props} />
      ))}
    </svg>
  );
}
