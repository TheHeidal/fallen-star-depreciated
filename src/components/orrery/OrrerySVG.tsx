import Token from "./ArcToken";
import Ring from "./Ring";

export type CelestialBody = {
  id: string;
  ringClassName: string;
  tokenClassName: string;
  extRadius: number;
  intRadius: number;
  spanAngle: number;
  centerAngle: number;
};

export function OrrerySVG({
  className,
  viewBox = "-125 -125 250 250",
  childrenList,
}: {
  className?: string;
  viewBox?: string;
  childrenList: CelestialBody[];
}) {
  const ringList = childrenList.map(
    ({ id, ringClassName, extRadius, intRadius, centerAngle }) => {
      return (
        <Ring
          key={`${id}_Ring`}
          id={`${id}_Token`}
          className={ringClassName}
          intRadius={intRadius}
          extRadius={extRadius}
          dividingAngle={centerAngle}
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
    <svg className={className} viewBox={viewBox}>
      <rect x="-300" y="-300" width={"600"} height={"600"} fill="grey" />
      {ringList}
      {tokenList}
    </svg>
  );
}
