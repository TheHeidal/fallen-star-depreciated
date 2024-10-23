import React, { Dispatch, SVGProps } from "react";
import { OrreryAction } from "./orreryLogic";

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type Radii = {
  intRadius: number;
  extRadius: number;
};

export type SpanAngle = {
  spanAngle: number;
};

export interface ringProps extends Radii, Omit<SVGProps<SVGPathElement>, "d"> {}

export interface ringSegmentProps
  extends SpanAngle,
    Radii,
    Omit<SVGProps<SVGPathElement>, "d"> {}

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

export type TokenProps = cbID &
  SpanAngle & {
    radii: Radii;
    dispatch: React.Dispatch<OrreryAction>;
    halfProps?: Omit<ringSegmentProps, keyof Radii | keyof SpanAngle>;
    pieceProps?: Omit<ringSegmentProps, keyof Radii | keyof SpanAngle>;
  };

export interface CelestialBodyStyle
  extends TrackProps,
    Omit<TokenProps, "spanAngle" | "id" | "dispatch"> {
  textDisplay: React.ReactNode;
}

export type StyleMap = {
  sun: CelestialBodyStyle;
  saturn: CelestialBodyStyle;
  jupiter: CelestialBodyStyle;
  mars: CelestialBodyStyle;
  venus: CelestialBodyStyle;
  mercury: CelestialBodyStyle;
};

export type cbID = { id: keyof StyleMap };
