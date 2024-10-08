import { Radii } from "./orreryTypes";

export type ringProps = Radii & React.SVGProps<SVGPathElement>;

export default function Ring({
  extRadius,
  intRadius,
  ...restProps
}: ringProps) {
  return (
    <path
      {...restProps}
      d={`
    M 0 ${extRadius}
    A ${extRadius} ${extRadius} 0 1 0 0 ${-extRadius}
    A ${extRadius} ${extRadius} 0 1 0 0 ${extRadius}
    M 0 ${intRadius}
    A ${intRadius} ${intRadius} 0 1 1 0 ${-intRadius}
    A ${intRadius} ${intRadius} 0 1 1 0 ${intRadius}
    `}
    />
  );
}
