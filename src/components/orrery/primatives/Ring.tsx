import { tv, VariantProps } from "tailwind-variants";
import { Radii } from "../orreryTypes";

const ring = tv({
  variants: {
    vColor: {
      month: "fill-slate-100",
      saturn: "fill-slate-950",
      jupiter: "fill-orange-200",
      mars: "fill-red-300",
      venus: "fill-emerald-100",
      mercury: "fill-violet-200",
    },
  },
});

export type ringProps = Radii &
  VariantProps<typeof ring> &
  Omit<React.SVGProps<SVGPathElement>, "d">;

export default function Ring({
  extRadius,
  intRadius,
  vColor,
  className = "",
  ...restProps
}: ringProps) {
  return (
    <path
      className={`${ring({ vColor })} ${className}`}
      {...restProps}
      d={`
    M 0 ${extRadius}
    A 1 1 0 1 0 0 ${-extRadius}
    A 1 1 0 1 0 0 ${extRadius}
    M 0 ${intRadius}
    A 1 1 0 1 1 0 ${-intRadius}
    A 1 1 0 1 1 0 ${intRadius}
    `}
    />
  );
}
