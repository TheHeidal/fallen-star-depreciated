/**
 * A moon
 * @param progress Where in the cycle the moon is.
 * 0 is new, 0.25 is half black/white, 0.5 is full, 0.75 is white/black
 * @returns
 */
export default function MoonDisk({
  progress: unadjustedProgress,
  r = 100,
  lightClassName = "fill-sky-100",
  darkClassName = "fill-slate-950",
}: {
  progress: number;
  r?: number;
  lightClassName?: string;
  darkClassName?: string;
}) {
  const waxing = unadjustedProgress % 1 < 0.5;
  const progress = 1 - ((4 * unadjustedProgress) % 2);

  return (
    <g>
      <circle
        className={waxing ? lightClassName : darkClassName}
        cx={0}
        cy={0}
        r={r}
      />

      <path
        className={waxing ? darkClassName : lightClassName}
        d={`
            M 00 ${r}
            A 1 1 0 0 0 0 ${-r}
            A ${progress} 1 0 0 ${progress < 0 ? 1 : 0} 00 ${r}
            `}
      />
    </g>
  );
}
