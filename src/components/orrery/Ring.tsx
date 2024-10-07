import { RingProps } from "./orreryTypes";

export default function Ring(props: RingProps) {
  const extRadius = props.extRadius;
  const intRadius = props.intRadius;
  return (
    <path
      {...props}
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
