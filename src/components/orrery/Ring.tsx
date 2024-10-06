import { polarToCartesian } from "./angleMisc";

export type RingParams = {
  id: string;
  className: string;
  intRadius: number;
  extRadius: number;
  dividingAngle: number;
  onCW: () => void;
  onWS: () => void;
};

export default function Ring({
  id,
  className,
  intRadius,
  extRadius,
  dividingAngle = 0,
  onCW,
  onWS,
}: RingParams) {
  const extDividingPoint = polarToCartesian(extRadius, dividingAngle);
  const intDividingPoint = polarToCartesian(intRadius, dividingAngle);
  // full circle, cw half, ccw half
  return (
    <g id={id}>
      <path
        className={className}
        d={`
    M ${extDividingPoint.x} ${extDividingPoint.y}
    A ${extRadius} ${extRadius} 0 1 0 ${-extDividingPoint.x} ${-extDividingPoint.y}
    A ${extRadius} ${extRadius} 0 1 0 ${extDividingPoint.x} ${
          extDividingPoint.y
        }
    M ${intDividingPoint.x} ${intDividingPoint.y}
    A ${intRadius} ${intRadius} 0 1 1 ${-intDividingPoint.x} ${-intDividingPoint.y}
    A ${intRadius} ${intRadius} 0 1 1 ${intDividingPoint.x} ${
          intDividingPoint.y
        }
    `}
      />
      <path
        className={`fill-transparent hover:fill-gray-100`}
        onClick={onCW}
        d={`
    M ${extDividingPoint.x} ${extDividingPoint.y}
    A ${extRadius} ${extRadius} 0 1 1 ${-extDividingPoint.x} ${-extDividingPoint.y}
    M ${-intDividingPoint.x} ${-intDividingPoint.y}
    A ${intRadius} ${intRadius} 0 1 0 ${intDividingPoint.x} ${
          intDividingPoint.y
        }
    `}
      />
      <path
        className={`fill-transparent hover:fill-gray-100`}
        onClick={onWS}
        d={`
    M ${extDividingPoint.x} ${extDividingPoint.y}
    A ${extRadius} ${extRadius} 0 1 0 ${-extDividingPoint.x} ${-extDividingPoint.y}
    M ${-intDividingPoint.x} ${-intDividingPoint.y}
    A ${intRadius} ${intRadius} 0 1 1 ${intDividingPoint.x} ${
          intDividingPoint.y
        }
    `}
      />
    </g>
  );
}
