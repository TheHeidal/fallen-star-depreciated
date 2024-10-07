import { RingProps } from "./orreryTypes";

/**A half-ring around the origin, on the positive-x side. */
export default function RingHalf(props: RingProps) {
  return (
    <path
      {...props}
      d={`
    M 0 ${props.extRadius}
    A ${props.extRadius} ${props.extRadius} 0 1 0 0 ${-props.extRadius}
    M 0 ${-props.intRadius}
    A ${props.intRadius} ${props.intRadius} 0 1 1 0 ${props.intRadius}
    `}
    />
  );
}
