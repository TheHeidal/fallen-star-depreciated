import type { Meta, StoryObj } from "@storybook/react";

import MoonDisk from "./MoonDisk";

const meta = {
  component: MoonDisk,
  title: "Primitives/Moon Disk",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <svg className="size-10 bg-gray-500" viewBox="-125 -125 250 250">
        <g transform="rotate(-10)">{Story()}</g>
      </svg>
    ),
  ],
  argTypes: {
    progress: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
    },
  },
} satisfies Meta<typeof MoonDisk>;

export default meta;

type Story = StoryObj<typeof meta>;

export const New: Story = { args: { progress: 0 } };
export const WaxingGibbous: Story = { args: { progress: 0.1 } };
export const WaxingCrescent: Story = { args: { progress: 0.35 } };
export const Full: Story = { args: { progress: 0.5 } };
export const WaningGibbous: Story = { args: { progress: 0.6 } };
export const WaningCrescent: Story = { args: { progress: 0.85 } };
