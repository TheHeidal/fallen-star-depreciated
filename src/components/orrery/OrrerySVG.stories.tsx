import { OrrerySVG } from "./OrrerySVG";
import * as RingStories from "./Ring.stories";

export default {
  component: OrrerySVG,
  title: "Orrery SVG",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    className: "size-400",
    viewBox: "-125 -125 250 250",
  },
};

export const Rings = {
  args: {
    childrenList: [
      { ...RingStories.Saturn.args, ...RingStories.ActionsData },
      { ...RingStories.Jupiter.args, ...RingStories.ActionsData },
      { ...RingStories.Mars.args, ...RingStories.ActionsData },
      { ...RingStories.Venus.args, ...RingStories.ActionsData },
      { ...RingStories.Mercury.args, ...RingStories.ActionsData },
    ],
  },
};

export const Jupiter = {
  args: {
    childrenList: [
      {
        id: "Jupiter",
        className: "fill-orange-300",
        extRadius: 85,
        intRadius: 70,
        onCW: () => {},
        onCCW: () => {},
      },
    ],
  },
};
