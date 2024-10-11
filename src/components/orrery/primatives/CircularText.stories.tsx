import type { Meta, StoryObj } from "@storybook/react";

import CircularText from "./CircularText";

const meta = {
  component: CircularText,
  title: "Primitives/Circular Text",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <svg className="size-1/2 bg-neutral-500" viewBox="-150 -150 300 300">
        <path
          className="stroke-neutral-600 stroke-1 [stroke-dasharray:1,3]"
          d="M 0 150 L 0 -150"
        />
        {Story()}
      </svg>
    ),
  ],
} satisfies Meta<typeof CircularText>;

export default meta;

type Story = StoryObj<typeof meta>;
``;
export const Default: Story = {
  args: { radius: 100, children: "Aries" },
};
