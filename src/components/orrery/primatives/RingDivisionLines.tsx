import { tv } from "tailwind-variants";
import { polarToCartesian } from "../angleMisc";
import { Radii } from "../orreryTypes";

export const variants = tv({
  variants: {
    color: {
      dark: "stroke-neutral-950",
      light: "stroke-neutral-100",
    },
    weight: {
      mid: "stroke-[1px]",
      thin: "stroke-[0.5px]",
    },
    frequency: {
      line: "",
      dashes: "[stroke-dasharray:2,2]",
      dots: "[stroke-dasharray:1px,3px]",
    },
  },
  defaultVariants: {
    color: "dark",
    weight: "mid",
    frequency: "line",
  },
});

export interface ringDivisionLineProps extends Radii {
  divisions: number;
  offsetAngle?: number;
  className?: string;
}

export default function RingDivisionLines({
  extRadius,
  intRadius,
  divisions,
  offsetAngle = 0,
  className = variants(),
}: ringDivisionLineProps) {
  const divisionAngle = 360 / divisions;
  let divisionPaths = "";
  for (let angle = 0; angle < 360; angle += divisionAngle) {
    divisionPaths = divisionPaths.concat(
      `
      M ${polarToCartesian(extRadius, angle).str}
      L ${polarToCartesian(intRadius, angle).str}`
    );
  }
  return (
    <path
      className={className}
      transform={`rotate(${offsetAngle})`}
      d={divisionPaths}
    />
  );
}
