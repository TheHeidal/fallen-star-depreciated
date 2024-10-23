import { tv } from "tailwind-variants";
import { ringProps } from "../orreryTypes";

export const variants = tv({
  variants: {
    color: {
      white: "fill-slate-100",
      saturn: "fill-slate-950",
      jupiter: "fill-orange-200",
      mars: "fill-red-300",
      venus: "fill-emerald-100",
      mercury: "fill-violet-200",
    },
  },
  defaultVariants: {
    color: "white",
  },
});

export default function Ring({ extRadius, intRadius, ...rest }: ringProps) {
  return (
    <path
      {...rest}
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
