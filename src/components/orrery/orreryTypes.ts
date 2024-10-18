export type Radii = {
  intRadius: number;
  extRadius: number;
};

export type SpanAngle = {
  spanAngle: number;
};

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface PartialDivisonProps extends React.SVGProps<SVGPathElement> {
  divisions: number;
}

export type PlanetVariants =
  | "saturn"
  | "jupiter"
  | "mars"
  | "venus"
  | "mercury";

export type cbID = { id: PlanetVariants };
