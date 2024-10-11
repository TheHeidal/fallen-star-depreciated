import { JSX } from "react/jsx-runtime";
import RingSegment from "./RingSegment";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RingSegment> = {
  component: RingSegment,
  title: "Primitives/Ring Segment",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (
      <svg className="size-1/2 fill-gray-800" viewBox="-125 -125 250 250">
        <rect x="-300" y="-300" width="600" height="600"></rect>
        <Story />
      </svg>
    ),
  ],
  args: {
    className: "fill-amber-600",
    extRadius: 100,
    intRadius: 80,
  },
};

export default meta;
type Story = StoryObj<typeof RingSegment>;

export const Jupiter: Story = {
  args: {
    spanAngle: 360 * (3 / 48),
  },
};
export const Half: Story = {
  args: {
    spanAngle: 180,
  },
};
export const NegativeHalf: Story = {
  args: {
    spanAngle: -180,
  },
};
export const Negative: Story = {
  args: {
    spanAngle: -90,
  },
};
export const GreaterThanHalf: Story = {
  args: {
    spanAngle: 270,
  },
};
