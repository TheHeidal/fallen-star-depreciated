import { Radii, SpanAngle } from "./orreryTypes";
import RingSegment from "./primatives/RingSegment";
import { ringSegmentProps } from "./orreryTypes";
import CircularText, { CircularTextProps } from "./primatives/CircularText";
import { v4 as uuidv4 } from "uuid";

export type MonthContent = {
  ratio: number;
  content: string;
} & Partial<CircularTextProps>;

interface MonthSegmentProps extends Partial<SpanAngle> {
  radii: Radii;
  segmentClassName?: Pick<ringSegmentProps, "className">;
  contents?: MonthContent[];
}

export default function MonthSegment({
  spanAngle = 30,
  radii,
  segmentClassName = {
    className: "fill-neutral-100 transition-color group-hover:fill-blue-200",
  },
  contents = [],
}: MonthSegmentProps) {
  const contentList = contents.map(({ ratio, content, ...rest }) => {
    return (
      <CircularText
        className="text-xs"
        key={uuidv4()}
        radius={radii.intRadius + ratio * (radii.extRadius - radii.intRadius)}
        {...rest}>
        {content}
      </CircularText>
    );
  });

  return (
    <>
      <RingSegment {...radii} spanAngle={spanAngle} {...segmentClassName} />
      <g transform={`rotate(${spanAngle / 2})`}>{contentList}</g>
    </>
  );
}
