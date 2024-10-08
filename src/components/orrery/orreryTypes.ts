export type Radii = {
  intRadius: number;
  extRadius: number;
};

export type SpanAngle = {
  spanAngle: number;
};

export interface PartialDivisonProps extends React.SVGProps<SVGPathElement> {
  divisions: number;
}

export interface RingSegmentProps
  extends SpanAngle,
    Radii,
    React.SVGProps<SVGPathElement> {}
