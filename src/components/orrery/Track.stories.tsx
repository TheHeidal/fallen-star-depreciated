import { Meta, StoryObj } from "@storybook/react";
import { DivisionsData } from "./primitives/RingDivisionLines.stories";
import Track from "./Track";
import { STYLE_DATA } from "./data";

const meta: Meta<typeof Track> = {
  component: Track,
  title: "Orrery/Track",
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
type Story = StoryObj<typeof Track>;

export const Saturn: Story = {
  args: STYLE_DATA.saturn,
};
export const Jupiter: Story = {
  args: STYLE_DATA.jupiter,
};
export const Mars: Story = {
  args: STYLE_DATA.mars,
};
export const Venus: Story = {
  args: STYLE_DATA.venus,
};
export const Mercury: Story = {
  args: STYLE_DATA.mercury,
};
