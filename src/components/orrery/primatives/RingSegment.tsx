import { polarToCartesian } from "../angleMisc";
import { Radii, SpanAngle } from "../orreryTypes";

export type ringSegmentProps = SpanAngle &
  Radii &
  React.SVGProps<SVGPathElement>;

export default function RingSegment({
  spanAngle,
  intRadius,
  extRadius,
  ...props
}: ringSegmentProps) {
  return (
    <path
      {...props}
      d={`
      M 0 ${-extRadius}
      A ${extRadius} ${extRadius}
        0
        ${spanAngle > 180 ? "1" : "0"}
        ${spanAngle > 0 ? "1" : "0"}
        ${polarToCartesian(extRadius, spanAngle).str}
      L ${polarToCartesian(intRadius, spanAngle).str}
      A ${intRadius} ${intRadius}
        0
        ${spanAngle > 180 ? "1" : "0"}
        ${spanAngle > 0 ? "0" : "1"}
        0 ${-intRadius}
      L 0 ${-extRadius}
      `}
    />
  );
}
