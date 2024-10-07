import { Meta, StoryObj } from "@storybook/react/*";
import { fn } from "@storybook/test";
import RingHalf from "./RingHalf";

const meta: Meta<typeof RingHalf> = {
  component: RingHalf,
  title: "Ring Half",
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
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof RingHalf>;

export const Jupiter: Story = {
  args: {
    id: "Jupiter",
    className: "fill-transparent hover:fill-gray-100 transition-colors",
    extRadius: 85,
    intRadius: 70,
  },
};
