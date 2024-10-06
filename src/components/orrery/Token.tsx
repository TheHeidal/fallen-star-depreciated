import { Color } from "../../misc";

function Token({
  x,
  y,
  width,
  height,
  fill,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} />
    </g>
  );
}
