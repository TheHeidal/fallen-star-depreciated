import Track, { TrackProps } from "./Track";
import Token, { TokenProps } from "./Token";
import { Radii } from "./orreryTypes";
import { motion } from "framer-motion";

export type CBProps = {
  radii: Radii;
  trackProps: Omit<TrackProps, "radii">;
  tokenProps: Omit<TokenProps, "radii">;

  trackInitialPosition?: number;
  trackPosition?: number;

  tokenInitialPosition?: number;
  tokenPosition?: number;

  trackBounce?: number;
  tokenBounce?: number;
  duration?: number;
};

export default function CelestialBody({
  radii,
  trackProps,
  tokenProps,

  trackInitialPosition = 0,
  trackPosition = 0,
  trackBounce = 0.15,
  duration = 3,

  tokenInitialPosition = 0,
  tokenPosition = 0,
  tokenBounce = 0.15,
}: CBProps) {
  return (
    <>
      <motion.g
        initial={{ rotate: trackInitialPosition }}
        animate={{ rotate: trackPosition }}
        transition={{
          type: "spring",
          bounce: trackBounce,
          duration: duration,
        }}>
        <Track radii={radii} {...trackProps} />
      </motion.g>
      <motion.g
        initial={{ rotate: tokenInitialPosition }}
        animate={{ rotate: tokenPosition }}
        transition={{
          type: "spring",
          bounce: tokenBounce,
          duration: duration,
        }}>
        <Token radii={radii} {...tokenProps} />
      </motion.g>
    </>
  );
}
