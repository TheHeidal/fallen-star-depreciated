import { OrrerySVG } from "./OrrerySVG";
import * as RingStories from "./Ring.stories";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OrrerySVG> = {
  component: OrrerySVG,
  title: "Orrery SVG",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    className: "size-400",
  },
};

export default meta;
type Story = StoryObj<typeof OrrerySVG>;

export const Rings: Story = {
  args: {
    childrenList: [
      {
        id: "Saturn",
        ringClassName: "fill-slate-700",
        tokenClassName: "fill-slate-500",
        extRadius: 100,
        intRadius: 85,
        spanAngle: 360 * (1 / 36),
        centerAngle: 0,
        divisionParams: [RingStories.DivisionData.div_36_solid],
      },
      {
        id: "Jupiter",
        ringClassName: "fill-orange-300",
        tokenClassName: "fill-amber-600",
        extRadius: 85,
        intRadius: 70,
        spanAngle: 360 * (3 / 48),
        centerAngle: 360 * (1.5 / 48),
        divisionParams: [
          RingStories.DivisionData.div_12_solid,
          RingStories.DivisionData.div_24_dashed,
          RingStories.DivisionData.div_48_dashed,
        ],
      },
      {
        id: "Mars",
        ringClassName: "fill-red-300",
        tokenClassName: "fill-red-500",
        extRadius: 70,
        intRadius: 55,
        spanAngle: 360 * (3 / 24),
        centerAngle: 360 * (1.5 / 24),
        divisionParams: [
          RingStories.DivisionData.div_12_solid,
          RingStories.DivisionData.div_24_dashed,
        ],
      },
      {
        id: "Venus",
        ringClassName: "fill-green-200",
        tokenClassName: "fill-green-600",
        extRadius: 55,
        intRadius: 40,
        spanAngle: 360 * (5 / 24),
        centerAngle: 360 * (2.5 / 24),
        divisionParams: [
          RingStories.DivisionData.div_12_solid,
          RingStories.DivisionData.div_24_dashed,
        ],
      },
      {
        id: "Mercury",
        ringClassName: "fill-violet-200",
        tokenClassName: "fill-violet-500",
        extRadius: 40,
        intRadius: 25,
        spanAngle: 360 * (7 / 24),
        centerAngle: 360 * (3.5 / 24),
        divisionParams: [
          RingStories.DivisionData.div_12_solid,
          RingStories.DivisionData.div_24_dashed,
        ],
      },
    ],
  },
};
