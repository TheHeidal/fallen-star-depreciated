import { Meta, StoryObj } from "@storybook/react";
import OrrerySVG from "./OrrerySVG";
import * as CBStories from "./CelestialBody.stories";

const meta: Meta<typeof OrrerySVG> = {
  component: OrrerySVG,
  title: "Orrery SVG",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    className: "size-[500px] bg-gray-500 ",
    viewBox: "-150 -150 300 300",
    cbList: [
      CBStories.CBData.saturn,
      CBStories.CBData.jupiter,
      CBStories.CBData.mars,
      CBStories.CBData.venus,
      CBStories.CBData.mercury,
    ],
  },
};

export default meta;
type Story = StoryObj<typeof OrrerySVG>;

export const Default: Story = {};
export const RotatingRings: Story = { args: { moveRings: true } };
export const ThinRings: Story = {
  args: {
    cbList: [
      { ...CBStories.CBData.saturn, radii: { extRadius: 100, intRadius: 88 } },
      { ...CBStories.CBData.jupiter, radii: { extRadius: 85, intRadius: 73 } },
      { ...CBStories.CBData.mars, radii: { extRadius: 70, intRadius: 58 } },
      { ...CBStories.CBData.venus, radii: { extRadius: 55, intRadius: 43 } },
      { ...CBStories.CBData.mercury, radii: { extRadius: 40, intRadius: 28 } },
    ],
  },
};

export const Jupiter: Story = {
  args: {
    cbList: [CBStories.CBData.jupiter],
  },
};

// export const Rings: Story = {
//   args: {
//     childrenList: [
//       {
//         id: "Saturn",
//         ringProps: "fill-slate-700",
//         tokenClassName: "fill-slate-500",
//         extRadius: 100,
//         intRadius: 85,
//         spanAngle: 360 * (1 / 36),
//         centerAngle: 0,
//         divisionParams: [RingStories.DivisionData.div_36_solid],
//       },
//       {
//         id: "Jupiter",
//         ringProps: "fill-orange-300",
//         tokenClassName: "fill-amber-600",
//         extRadius: 85,
//         intRadius: 70,
//         spanAngle: 360 * (3 / 48),
//         centerAngle: 360 * (1.5 / 48),
//         divisionParams: [
//           RingStories.DivisionData.div_12_solid,
//           RingStories.DivisionData.div_24_dashed,
//           RingStories.DivisionData.div_48_dashed,
//         ],
//       },
//       {
//         id: "Mars",
//         ringProps: "fill-red-300",
//         tokenClassName: "fill-red-500",
//         extRadius: 70,
//         intRadius: 55,
//         spanAngle: 360 * (3 / 24),
//         centerAngle: 360 * (1.5 / 24),
//         divisionParams: [
//           RingStories.DivisionData.div_12_solid,
//           RingStories.DivisionData.div_24_dashed,
//         ],
//       },
//       {
//         id: "Venus",
//         ringProps: "fill-green-200",
//         tokenClassName: "fill-green-600",
//         extRadius: 55,
//         intRadius: 40,
//         spanAngle: 360 * (5 / 24),
//         centerAngle: 360 * (2.5 / 24),
//         divisionParams: [
//           RingStories.DivisionData.div_12_solid,
//           RingStories.DivisionData.div_24_dashed,
//         ],
//       },
//       {
//         id: "Mercury",
//         ringProps: "fill-violet-200",
//         tokenClassName: "fill-violet-500",
//         extRadius: 40,
//         intRadius: 25,
//         spanAngle: 360 * (7 / 24),
//         centerAngle: 360 * (3.5 / 24),
//         divisionParams: [
//           RingStories.DivisionData.div_12_solid,
//           RingStories.DivisionData.div_24_dashed,
//         ],
//       },
//     ],
//   },
// };
