export type Radii = {
  intRadius: number;
  extRadius: number;
};

export type SpanAngle = {
  spanAngle: number;
};

export interface Divisions extends React.SVGProps<SVGPathElement> {
  divisions: number;
}

export interface RingProps extends Radii, React.SVGProps<SVGPathElement> {}

export interface RingAngleProps
  extends SpanAngle,
    Radii,
    React.SVGProps<SVGPathElement> {}

export interface RingDivisionProps
  extends Divisions,
    Radii,
    React.SVGProps<SVGPathElement> {}
