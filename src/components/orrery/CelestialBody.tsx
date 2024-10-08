import { ringProps } from "./Ring";
import { ringSegmentProps } from "./RingSegment";
import { ringDivisionProps } from "./RingDivisions";
import { Radii, SpanAngle } from "./orreryTypes";
import { Track } from "./Track";
import Token from "./Token";

export interface CelestialBodyProps
  extends SpanAngle,
    React.SVGProps<SVGPathElement> {
  radii: Radii;
  ringProps?: Omit<ringProps, keyof Radii>;
  halfProps?: Omit<ringSegmentProps, keyof Radii | keyof SpanAngle>;
  pieceProps?: Omit<ringSegmentProps, keyof Radii | keyof SpanAngle>;
  tokenInitialPosition?: number;
  divisions?: Omit<ringDivisionProps, keyof Radii>[];
  bounce: number;
}

export default function CelestialBody(props: CelestialBodyProps) {
  return (
    <>
      <Track {...props} />
      <Token {...props} />;
    </>
  );
}
