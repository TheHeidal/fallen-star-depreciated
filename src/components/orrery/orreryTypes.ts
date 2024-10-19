export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type Radii = {
  intRadius: number;
  extRadius: number;
};

export type SpanAngle = {
  spanAngle: number;
};

export type ringProps = { className?: string } & Radii;

export interface ringSegmentProps extends SpanAngle, Radii {
  className?: string;
}

export interface ringDivisionLineProps extends Radii {
  divisions: number;
  offsetAngle?: number;
  className?: string;
}

export type TrackProps = {
  radii: Radii;
  ringProps?: Omit<ringProps, keyof Radii>;
  divisionPropsList?: Omit<ringDivisionLineProps, keyof Radii>[];
};

export type TokenProps = SpanAngle & {
  radii: Radii;
  onCW?: () => void;
  onWS?: () => void;
  halfProps?: Omit<ringSegmentProps, keyof Radii | keyof SpanAngle>;
  pieceProps?: Omit<ringSegmentProps, keyof Radii | keyof SpanAngle>;
};

export interface CelestialBodyStyle
  extends TrackProps,
    Omit<TokenProps, "spanAngle"> {}

export type StyleMap = {
  saturn: CelestialBodyStyle;
  jupiter: CelestialBodyStyle;
  mars: CelestialBodyStyle;
  venus: CelestialBodyStyle;
  mercury: CelestialBodyStyle;
};

export type cbID = { id: keyof StyleMap };
