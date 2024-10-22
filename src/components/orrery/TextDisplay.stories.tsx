import { Meta, StoryObj } from "@storybook/react";
import TextDisplay from "./TextDisplay";
import * as data from "./data";

const meta: Meta<typeof TextDisplay> = {
  component: TextDisplay,
  title: "Orrery/Orrery (Text)",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    state: data.INITIAL_STATE_DATA,
    dispatch: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof TextDisplay>;

export const Default: Story = {};
