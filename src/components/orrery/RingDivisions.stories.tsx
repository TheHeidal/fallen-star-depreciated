import { Meta, StoryObj } from "@storybook/react/*";
import RingDivisions from "./RingDivisions";

export const DivisionsData = {
  div_36_solid: {
    divisions: 36,
    transform: "rotate(5)",
    className: "stroke-white stroke-1",
  },
  div_12_solid: {
    divisions: 12,
    className: "stroke-black stroke-1",
  },
  div_24_dashed: {
    divisions: 12,
    transform: `rotate(${360 / 24})`,
    className: "stroke-black stroke-[0.5px] [stroke-dasharray:2,2]",
  },
  div_48_dashed: {
    divisions: 24,
    transform: `rotate(${360 / 48})`,
    className: "stroke-black stroke-[0.5px] [stroke-dasharray:1,1]",
  },
};

const meta: Meta<typeof RingDivisions> = {
  component: RingDivisions,
  title: "Divisions",
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
    extRadius: 100,
    intRadius: 50,
  },
};

export default meta;
type Story = StoryObj<typeof RingDivisions>;

export const div_36_solid: Story = {
  args: { ...DivisionsData.div_36_solid },
};

export const div_12_solid: Story = {
  args: { ...DivisionsData.div_12_solid },
};
export const div_24_dashed: Story = {
  args: { ...DivisionsData.div_24_dashed },
};
export const div_48_dashed: Story = {
  args: { ...DivisionsData.div_48_dashed },
};
