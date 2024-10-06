import Token from "./ArcToken";
import Ring, { DivisionParams } from "./Ring";

export type CelestialBody = {
  id: string;
  ringClassName: string;
  tokenClassName: string;
  extRadius: number;
  intRadius: number;
  spanAngle: number;
  centerAngle: number;
  divisionParams?: DivisionParams[];
};

export function OrrerySVG({
  className,
  viewBox = { minX: -125, minY: -125, width: 250, height: 250 },
  childrenList,
}: {
  className?: string;
  viewBox?: { minX: number; minY: number; width: number; height: number };
  childrenList: CelestialBody[];
}) {
  const ringList = childrenList.map(
    ({
      id,
      ringClassName,
      extRadius,
      intRadius,
      centerAngle,
      divisionParams,
    }) => {
      return (
        <Ring
          key={`${id}_Ring`}
          id={`${id}_Ring`}
          className={ringClassName}
          intRadius={intRadius}
          extRadius={extRadius}
          dividingAngle={centerAngle}
          divisionParams={divisionParams}
          onCW={() => {}}
          onWS={() => {}}
        />
      );
    }
  );
  const tokenList = childrenList.map(
    ({ id, tokenClassName, extRadius, intRadius, spanAngle, centerAngle }) => {
      return (
        <Token
          key={`${id}_Token`}
          id={`${id}_Token`}
          className={tokenClassName}
          intRadius={intRadius}
          extRadius={extRadius}
          spanAngle={spanAngle}
          centerAngle={centerAngle}
        />
      );
    }
  );

  return (
    <svg
      className={className}
      viewBox={`${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.width}`}>
      <rect
        x={`${viewBox.minX}`}
        y={`${viewBox.minY}`}
        width={viewBox.width}
        height={viewBox.width}
        fill="grey"
      />
      {ringList}
      {tokenList}
    </svg>
  );
}
