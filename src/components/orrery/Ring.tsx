import { polarToCartesian } from "./angleMisc";

export type DivisionParams = {
  divisions: number;
  offset: number;
  dpClassName: string;
};

export type RingParams = {
  id: string;
  className: string;
  intRadius: number;
  extRadius: number;
  dividingAngle: number;
  onCW: () => void;
  onWS: () => void;
  divisionParams?: DivisionParams[];
  halfClassName?: string;
};

export default function Ring({
  id,
  className,
  intRadius,
  extRadius,
  dividingAngle = 0,
  onCW,
  onWS,
  divisionParams,
  halfClassName = `fill-transparent hover:fill-gray-100`,
}: RingParams) {
  const extDividingPoint = polarToCartesian(extRadius, dividingAngle);
  const intDividingPoint = polarToCartesian(intRadius, dividingAngle);

  const ring = (
    <path
      className={className}
      d={`
    M ${extDividingPoint.str}
    A ${extRadius} ${extRadius} 0 1 0 ${-extDividingPoint.x} ${-extDividingPoint.y}
    A ${extRadius} ${extRadius} 0 1 0 ${extDividingPoint.str}
    M ${intDividingPoint.str}
    A ${intRadius} ${intRadius} 0 1 1 ${-intDividingPoint.x} ${-intDividingPoint.y}
    A ${intRadius} ${intRadius} 0 1 1 ${intDividingPoint.str}
    `}
    />
  );

  function drawDivision(
    { divisions, offset, dpClassName }: DivisionParams,
    index: number
  ) {
    const divisionAngle = 360 / divisions;
    let divisionPaths = "";
    for (let a = offset; a < 360; a += divisionAngle) {
      divisionPaths = divisionPaths.concat(
        `M ${polarToCartesian(extRadius, a).str}
          L ${polarToCartesian(intRadius, a).str}
          `
      );
    }
    return (
      <path
        key={`${id}_division_${index}`}
        className={dpClassName}
        d={divisionPaths}></path>
    );
  }
  const cwHalf = (
    <path
      className={halfClassName}
      onClick={onCW}
      d={`
    M ${extDividingPoint.str}
    A ${extRadius} ${extRadius} 0 1 1 ${-extDividingPoint.x} ${-extDividingPoint.y}
    M ${-intDividingPoint.x} ${-intDividingPoint.y}
    A ${intRadius} ${intRadius} 0 1 0 ${intDividingPoint.str}
    `}
    />
  );
  const wsHalf = (
    <path
      className={halfClassName}
      onClick={onWS}
      d={`
    M ${extDividingPoint.str}
    A ${extRadius} ${extRadius} 0 1 0 ${-extDividingPoint.x} ${-extDividingPoint.y}
    M ${-intDividingPoint.x} ${-intDividingPoint.y}
    A ${intRadius} ${intRadius} 0 1 1 ${intDividingPoint.str}
    `}
    />
  );

  return (
    <g id={id}>
      {ring}
      {cwHalf}
      {wsHalf}
      {divisionParams && divisionParams.map(drawDivision)}
    </g>
  );
}
