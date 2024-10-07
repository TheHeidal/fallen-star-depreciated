import { Meta, StoryObj } from "@storybook/react/*";
import { fn } from "@storybook/test";
import Ring from "./Ring";
import RingDivisions from "./RingDivisions";

const meta: Meta<typeof RingDivisions> = {
  component: RingDivisions,
  title: "Divisions",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <svg className="size-1/2" viewBox="-125 -125 250 250">
        <rect x="-300" y="-300" width="600" height="600" fill="grey"></rect>
        {Story()}
      </svg>
    ),
  ],
  args: {
    extRadius: 100,
    intRadius: 50,
  },
};

export default meta;
type Story = StoryObj<typeof RingDivisions>;

export const div_36_solid: Story = {
  args: {
    id: "Saturn",
    divisions: 36,
    offset: 5,
    className: "stroke-white stroke-1",
  },
};

export const div_12_solid: Story = {
  args: {
    divisions: 12,
    offset: 0,
    className: "stroke-black stroke-1",
  },
};
export const div_24_dashed: Story = {
  args: {
    divisions: 12,
    offset: 360 / 24,
    className: "stroke-black stroke-[0.5px] [stroke-dasharray:2,2]",
  },
};
export const div_48_dashed: Story = {
  args: {
    divisions: 24,
    offset: 360 / 48,
    className: "stroke-black stroke-[0.5px] [stroke-dasharray:2,2]",
  },
};
