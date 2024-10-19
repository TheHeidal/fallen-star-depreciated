import { Meta, StoryObj } from "@storybook/react";
import OrrerySVG from "./OrrerySVG";
import * as data from "./data";
import { MONTHS } from "./data";

const meta: Meta<typeof OrrerySVG> = {
  component: OrrerySVG,
  title: "Orrery/Orrery (Visual)",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (
      <svg className="size-[500px] bg-neutral-400" viewBox="-150 -150 300 300">
        {Story()}
      </svg>
    ),
  ],
  args: {
    state: data.INITIAL_STATE_DATA,
    dispatch: () => {},
    styles: data.STYLE_DATA,
    monthProps: { radii: { intRadius: 100, extRadius: 130 }, months: MONTHS },
  },
};

export default meta;
type Story = StoryObj<typeof OrrerySVG>;

export const Default: Story = {};
export const RotatingRings: Story = { args: { moveRings: true } };
export const ThinRings: Story = {
  args: {
    cbList: [
      { ...data.CBData.saturn, radii: { extRadius: 100, intRadius: 88 } },
      { ...data.CBData.jupiter, radii: { extRadius: 85, intRadius: 73 } },
      { ...data.CBData.mars, radii: { extRadius: 70, intRadius: 58 } },
      { ...data.CBData.venus, radii: { extRadius: 55, intRadius: 43 } },
      { ...data.CBData.mercury, radii: { extRadius: 40, intRadius: 28 } },
    ],

    moveRings: true,
  },
};
