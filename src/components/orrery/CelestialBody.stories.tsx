import CelestialBody from "./CelestialBody";
import { Meta, StoryObj } from "@storybook/react";
import { DivisionsData } from "./primatives/RingDivisionLines.stories";

export const CBData = {
  saturn: {
    radii: { extRadius: 100, intRadius: 85 },
    trackProps: {
      ringProps: { className: "fill-slate-950" },
      divisions: [DivisionsData.div_36_solid],
    },
    tokenProps: { pieceProps: { className: "fill-slate-600" }, spanAngle: 10 },
    tokenInitialPosition: -5,
  },
  jupiter: {
    radii: { extRadius: 85, intRadius: 70 },
    trackProps: {
      ringProps: { className: "fill-orange-200" },
      divisions: [
        DivisionsData.div_12_solid,
        DivisionsData.div_24_dashed,
        DivisionsData.div_48_dashed,
      ],
    },
    tokenProps: {
      pieceProps: { className: "fill-amber-600" },
      spanAngle: 360 * (3 / 48),
    },
  },
  mars: {
    radii: { extRadius: 70, intRadius: 55 },
    trackProps: {
      ringProps: { className: "fill-red-300" },
      divisions: [DivisionsData.div_12_solid, DivisionsData.div_24_dashed],
    },
    tokenProps: {
      pieceProps: { className: "fill-red-600" },
      spanAngle: 360 * (3 / 24),
    },
  },
  venus: {
    radii: { extRadius: 55, intRadius: 40 },
    trackProps: {
      ringProps: { className: "fill-emerald-100" },
      divisions: [DivisionsData.div_12_solid, DivisionsData.div_24_dashed],
    },
    tokenProps: {
      pieceProps: { className: "fill-emerald-600" },
      spanAngle: 360 * (5 / 24),
    },
  },
  mercury: {
    radii: { extRadius: 40, intRadius: 25 },
    trackProps: {
      ringProps: { className: "fill-violet-200" },
      divisions: [DivisionsData.div_12_solid, DivisionsData.div_24_dashed],
    },
    tokenProps: {
      pieceProps: { className: "fill-violet-600" },
      spanAngle: 360 * (7 / 24),
    },
  },
};

const meta: Meta<typeof CelestialBody> = {
  component: CelestialBody,
  title: "Celestial Bodies",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (
      <svg className="size-1/2 bg-gray-500" viewBox="-125 -125 250 250">
        {Story()}
      </svg>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CelestialBody>;

export const Saturn: Story = {
  args: CBData.saturn,
};
export const Jupiter: Story = {
  args: CBData.jupiter,
};
export const Mars: Story = {
  args: {
    radii: { extRadius: 70, intRadius: 55 },
    trackProps: {
      ringProps: { className: "fill-red-300" },
      divisionPropsList: [
        DivisionsData.div_12_solid,
        DivisionsData.div_24_dashed,
      ],
    },
    tokenProps: {
      pieceProps: { className: "fill-red-500" },
      spanAngle: 360 * (3 / 24),
    },
  },
};
export const Venus: Story = {
  args: {
    radii: { extRadius: 55, intRadius: 40 },
    trackProps: {
      ringProps: { className: "fill-green-200" },
      divisionPropsList: [
        DivisionsData.div_12_solid,
        DivisionsData.div_24_dashed,
      ],
    },
    tokenProps: {
      pieceProps: { className: "fill-green-600" },
      spanAngle: 360 * (5 / 24),
    },
  },
};
export const Mercury: Story = {
  args: {
    radii: { extRadius: 40, intRadius: 25 },
    trackProps: {
      ringProps: { className: "fill-violet-200" },
      divisionPropsList: [
        DivisionsData.div_12_solid,
        DivisionsData.div_24_dashed,
      ],
    },
    tokenProps: {
      pieceProps: { className: "fill-violet-500" },
      spanAngle: 360 * (7 / 24),
    },
  },
};
