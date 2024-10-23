import { tv } from "tailwind-variants";
import { polarToCartesian } from "../angleMisc";
import { ringSegmentProps } from "../orreryTypes";

export const variants = tv({
  variants: {
    color: {
      month:
        "fill-blue-200 transition-opacity opacity-0 group-hover:opacity-50",
      saturn: "fill-slate-600",
      jupiter: "fill-amber-600",
      mars: "fill-red-600",
      venus: "fill-emerald-600",
      mercury: "fill-violet-600",
      tokenSelector:
        "fill-blue-200 transition-opacity opacity-0 hover:opacity-50",
      warn: "fill-pink-500",
    },
  },
  defaultVariants: {
    color: "warn",
  },
});

export default function RingSegment({
  spanAngle,
  intRadius,
  extRadius,
  ...rest
}: ringSegmentProps) {
  return (
    <path
      {...rest}
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
