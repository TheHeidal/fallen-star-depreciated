import type { Meta, StoryObj } from "@storybook/react";

import MonthRing from "./MonthRing";
import { MONTHS } from "./data";

const meta = {
  component: MonthRing,
  title: "Month Ring",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <svg className="size-1/2 bg-gray-500" viewBox="-150 -150 300 300">
        {Story()}
      </svg>
    ),
  ],
  args: { radii: { intRadius: 100, extRadius: 130 } },
} satisfies Meta<typeof MonthRing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    months: MONTHS,
  },
};
export const Empty: Story = {};
