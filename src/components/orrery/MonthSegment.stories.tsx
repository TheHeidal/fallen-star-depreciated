import type { Meta, StoryObj } from "@storybook/react";

import MonthSegment from "./MonthSegment";

const meta = {
  component: MonthSegment,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <svg className="size-1/2 bg-gray-500" viewBox="-150 -150 300 300">
        {Story()}
      </svg>
    ),
  ],
  args: {
    radii: { intRadius: 100, extRadius: 130 },
    contents: [{ ratio: 0.3, content: "Aries" }],
  },
} satisfies Meta<typeof MonthSegment>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
