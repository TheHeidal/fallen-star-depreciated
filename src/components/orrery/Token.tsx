import { SpanAngle, Radii } from "./orreryTypes";
import RingSegment, {
  ringSegmentProps,
  variants as rsVariants,
} from "./primatives/RingSegment";

export type TokenProps = SpanAngle & {
  radii: Radii;
  onCW?: () => void;
  onWS?: () => void;
  halfProps?: Omit<ringSegmentProps, keyof Radii | keyof SpanAngle>;
  pieceProps?: Omit<ringSegmentProps, keyof Radii | keyof SpanAngle>;
};

export default function Token({
  radii,
  spanAngle,
  onCW = () => {},
  onWS = () => {},
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
          onClick={onCW}
          {...halfProps}
        />
        <RingSegment
          className={rsVariants({ color: "tokenSelector" })}
          {...radii}
          spanAngle={-180}
          onClick={onWS}
          {...halfProps}
        />
      </g>
      {/* Token */}
      <RingSegment {...radii} spanAngle={spanAngle} {...pieceProps} />
    </g>
  );
}
