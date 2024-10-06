import { JSX } from "react/jsx-runtime";
import ArcToken from "./ArcToken";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArcToken> = {
  component: ArcToken,
  title: "Arc Token",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (
      <svg className="size-1/2" viewBox="-125 -125 250 250">
        <rect x="-300" y="-300" width="600" height="600" fill="grey"></rect>
        <Story />
      </svg>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ArcToken>;

export const Saturn: Story = {
  args: {
    id: "Saturn",
    className: "fill-slate-400",
    extRadius: 100,
    intRadius: 85,
    spanAngle: 360 * (1 / 36),
    centerAngle: 0,
  },
};
export const Jupiter: Story = {
  args: {
    id: "Jupiter",
    className: "fill-amber-600",
    extRadius: 100,
    intRadius: 80,
    spanAngle: 360 * (3 / 48),
    centerAngle: 360 * (1.5 / 48),
  },
};
export const Mars: Story = {
  args: {
    id: "Mars",
    className: "fill-red-500",
    extRadius: 70,
    intRadius: 55,
    spanAngle: 360 * (3 / 24),
    centerAngle: 360 * (1.5 / 24),
  },
};
export const Venus: Story = {
  args: {
    id: "Venus",
    className: "fill-green-600",
    extRadius: 55,
    intRadius: 40,
    spanAngle: 360 * (5 / 24),
    centerAngle: 360 * (2.5 / 24),
  },
};
export const Mercury: Story = {
  args: {
    id: "Mercury",
    className: "fill-violet-500",
    extRadius: 40,
    intRadius: 25,
    spanAngle: 360 * (7 / 24),
    centerAngle: 360 * (3.5 / 24),
  },
};
