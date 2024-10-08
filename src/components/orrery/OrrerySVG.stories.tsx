import { Meta, StoryObj } from "@storybook/react";
import OrrerySVG from "./OrrerySVG";
import * as CBStories from "./CelestialBody.stories";
import { DivisionsData } from "./RingDivisions.stories";
import { CelestialBodyProps } from "./CelestialBody";

const RingsData: CelestialBodyProps[] = [
  {
    ...CBStories.CBData,
    radii: { extRadius: 100, intRadius: 80 },
    ringProps: { className: "fill-slate-700" },
    pieceProps: { className: "fill-slate-500" },
    spanAngle: 10,
    tokenInitialPosition: -5,
    divisions: [DivisionsData.div_36_solid],
  },
  {
    ...CBStories.CBData,
    id: "Jupiter",
    ringProps: { className: "fill-orange-300" },
    pieceProps: { className: "fill-amber-600" },
    radii: { extRadius: 85, intRadius: 65 },
    spanAngle: 360 * (3 / 48),
    divisions: [
      DivisionsData.div_12_solid,
      DivisionsData.div_24_dashed,
      DivisionsData.div_48_dashed,
    ],
  },
  {
    ...CBStories.CBData,
    id: "Mars",
    ringProps: { className: "fill-red-300" },
    pieceProps: { className: "fill-red-500" },
    radii: { extRadius: 70, intRadius: 50 },
    spanAngle: 360 * (3 / 24),
    divisions: [DivisionsData.div_12_solid, DivisionsData.div_24_dashed],
  },
  {
    ...CBStories.CBData,
    id: "Venus",
    ringProps: { className: "fill-green-200" },
    pieceProps: { className: "fill-green-600" },
    radii: { extRadius: 55, intRadius: 35 },
    spanAngle: 360 * (5 / 24),
    divisions: [DivisionsData.div_12_solid, DivisionsData.div_24_dashed],
  },
  {
    ...CBStories.CBData,
    ringProps: { className: "fill-violet-200" },
    pieceProps: { className: "fill-violet-500" },
    radii: { extRadius: 40, intRadius: 25 },
    spanAngle: 360 * (7 / 24),
    divisions: [DivisionsData.div_12_solid, DivisionsData.div_24_dashed],
  },
];

const meta: Meta<typeof OrrerySVG> = {
  component: OrrerySVG,
  title: "Orrery SVG",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    className: "size-100 bg-gray-500 ",
    viewBox: "-150 -150 300 300",
  },
};

export default meta;
type Story = StoryObj<typeof OrrerySVG>;

export const Default: Story = {
  args: {
    monthProps: { radii: { intRadius: 100, extRadius: 120 } },
    cbList: RingsData,
    advancer: (
      <circle
        className="fill-white transition-colors hover:fill-blue-200"
        cx={0}
        cy={0}
        r={25}
      />
    ),
  },
};

export const NoAdvancer: Story = {
  args: {
    cbList: RingsData,
  },
};

export const Jupiter: Story = {
  args: {
    cbList: [
      {
        ...CBStories.CBData,
        id: "Jupiter",
        ringProps: "fill-orange-300",
        pieceProps: "fill-amber-600",
        radii: { extRadius: 85, intRadius: 70 },
        spanAngle: 360 * (3 / 48),
        divisions: [
          DivisionsData.div_12_solid,
          DivisionsData.div_24_dashed,
          DivisionsData.div_48_dashed,
        ],
      },
    ],
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
