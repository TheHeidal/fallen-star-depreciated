import CelestialBody from "./CelestialBody";
import { Meta, StoryObj } from "@storybook/react";
import { DivisionsData } from "./RingDivisions.stories";

const meta: Meta<typeof CelestialBody> = {
  component: CelestialBody,
  title: "Celestial Bodies",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (
      <svg className="size-1/2" viewBox="-125 -125 250 250">
        <rect x="-300" y="-300" width="600" height="600" fill="grey"></rect>
        {Story()}
      </svg>
    ),
  ],
  args: {
    halfClassName:
      "fill-transparent transition-color hover:fill-gray-100 opacity-75",
  },
};

export default meta;
type Story = StoryObj<typeof CelestialBody>;

export const Saturn: Story = {
  args: {
    radii: { extRadius: 100, intRadius: 85 },
    ringClassName: "fill-slate-700",
    tokenClassName: "fill-slate-500",
    spanAngle: 10,
    tokenAngle: -5,
    divisions: [DivisionsData.div_36_solid],
  },
};
export const Jupiter: Story = {
  args: {
    id: "Jupiter",
    ringClassName: "fill-orange-300",
    tokenClassName: "fill-amber-600",
    radii: { extRadius: 85, intRadius: 70 },
    spanAngle: 360 * (3 / 48),
    tokenAngle: 360 * (1.5 / 48),
    divisions: [
      DivisionsData.div_12_solid,
      DivisionsData.div_24_dashed,
      DivisionsData.div_48_dashed,
    ],
  },
};
export const Mars: Story = {
  args: {
    id: "Mars",
    ringClassName: "fill-red-300",
    tokenClassName: "fill-red-500",
    radii: { extRadius: 70, intRadius: 55 },
    spanAngle: 360 * (3 / 24),
    tokenAngle: 360 * (1.5 / 24),
    divisions: [DivisionsData.div_12_solid, DivisionsData.div_24_dashed],
  },
};
//       {
//         id: "Venus",
//         ringClassName: "fill-green-200",
//         tokenClassName: "fill-green-600",
//         extRadius: 55,
//         intRadius: 40,
//         spanAngle: 360 * (5 / 24),
//         centerAngle: 360 * (2.5 / 24),
//         divisions: [div_12_solid, div_24_dashed],
//       },
//       {
//         id: "Mercury",
//         ringClassName: "fill-violet-200",
//         tokenClassName: "fill-violet-500",
//         extRadius: 40,
//         intRadius: 25,
//         spanAngle: 360 * (7 / 24),
//         centerAngle: 360 * (3.5 / 24),
//         divisions: [div_12_solid, div_24_dashed],
//       },
//     ],
//   },
// };
