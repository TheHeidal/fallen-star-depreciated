import { Meta, StoryObj } from "@storybook/react/*";
import RingDivisions, { variants as rdVariants } from "./RingDivisions";

export const DivisionsData = {
  div_36_solid: {
    divisions: 36,
    offsetAngle: 5,
    className: "stroke-neutral-100 stroke-1",
  },
  div_12_solid: {
    divisions: 12,
    className: "stroke-neutral-950 stroke-1",
  },
  div_24_dashed: {
    divisions: 12,
    offsetAngle: 15,
    className: "stroke-neutral-950 stroke-[0.5px] [stroke-dasharray:2,2]",
  },
  div_48_dashed: {
    divisions: 24,
    offsetAngle: 7.5,
    className: "stroke-neutral-950 stroke-[0.5px] [stroke-dasharray:1,1]",
  },
};

const meta: Meta<typeof RingDivisions> = {
  component: RingDivisions,
  title: "Primitives/Ring Dividing Lines",
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
  args: {
    divisions: 36,
    offsetAngle: 5,
    className: rdVariants({ color: "light" }),
  },
};

export const div_12_solid: Story = {
  args: {
    divisions: 12,
    className: rdVariants(),
  },
};
export const div_24_dashed: Story = {
  args: {
    divisions: 24,
    className: rdVariants({
      weight: "thin",
      frequency: "dashes",
    }),
  },
};
export const div_48_dashed: Story = {
  args: {
    divisions: 24,
    offsetAngle: 7.5,
    className: rdVariants({
      weight: "thin",
      frequency: "dots",
    }),
  },
};
