import { polarToCartesian } from "./angleMisc";

export default function Token({
  id,
  className,
  intRadius,
  extRadius,
  spanAngle,
  centerAngle,
}: {
  id?: string;
  className?: string;
  intRadius: number;
  extRadius: number;
  spanAngle: number;
  centerAngle: number;
}) {
  const wsAngle = centerAngle - spanAngle / 2;
  const wsExt = polarToCartesian(extRadius, wsAngle);
  const wsInt = polarToCartesian(intRadius, wsAngle);
  const cwAngle = centerAngle + spanAngle / 2;
  const cwExt = polarToCartesian(extRadius, cwAngle);
  const cwInt = polarToCartesian(intRadius, cwAngle);
  return (
    <path
      className={className}
      d={`
    M ${wsExt.x} ${wsExt.y}
    A ${extRadius} ${extRadius} 0 0 1 ${cwExt.x} ${cwExt.y}
    L ${cwInt.x} ${cwInt.y}
    A ${intRadius} ${intRadius} 0 0 0 ${wsInt.x} ${wsInt.y}
    L ${wsExt.x} ${wsExt.y}
    `}
    />
  );
}
