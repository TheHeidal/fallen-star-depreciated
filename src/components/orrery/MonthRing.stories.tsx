import type { Meta, StoryObj } from "@storybook/react";

import MonthRing from "./MonthRing";

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
} satisfies Meta<typeof MonthRing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { radii: { intRadius: 100, extRadius: 130 } },
};
