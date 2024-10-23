import { TokenProps } from "./orreryTypes";
import RingSegment, { variants as rsVariants } from "./primitives/RingSegment";

export default function Token({
  id,
  radii,
  spanAngle,
  dispatch = () => {},
  halfProps,
  pieceProps,
}: TokenProps) {
  return (
    <g>
      <g transform={`rotate(${spanAngle / 2})`}>
        <RingSegment
          className={rsVariants({ color: "tokenSelector" })}
          {...radii}
          spanAngle={180}
          onClick={() => {
            dispatch({ scope: "token", type: "increment", id: id });
          }}
          {...halfProps}
        />
        <RingSegment
          className={rsVariants({ color: "tokenSelector" })}
          {...radii}
          spanAngle={-180}
          onClick={() => {
            dispatch({ scope: "token", type: "decrement", id: id });
          }}
          {...halfProps}
        />
      </g>
      {/* Token */}
      <RingSegment {...radii} spanAngle={spanAngle} {...pieceProps} />
    </g>
  );
}
