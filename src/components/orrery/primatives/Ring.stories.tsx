import { Meta, StoryObj } from "@storybook/react/*";
import { fn } from "@storybook/test";
import Ring from "./Ring";

const meta: Meta<typeof Ring> = {
  component: Ring,
  title: "Primitives/Ring",
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
};

export default meta;
type Story = StoryObj<typeof Ring>;

export const Saturn: Story = {
  args: {
    id: "Saturn",
    className: "fill-slate-600",
    extRadius: 100,
    intRadius: 85,
  },
};
export const Jupiter = {
  args: {
    id: "Jupiter",
    className: "fill-orange-300",
    extRadius: 85,
    intRadius: 70,
  },
};
// export const Mars = {
//   args: {
//     id: "Mars",
//     className: "fill-red-400",
//     extRadius: 70,
//     intRadius: 55,
//   },
// };
// export const Venus = {
//   args: {
//     id: "Venus",
//     className: "fill-green-200",
//     extRadius: 55,
//     intRadius: 40,
//   },
// };
// export const Mercury = {
//   args: {
//     id: "Mercury",
//     className: "fill-violet-200",
//     extRadius: 40,
//     intRadius: 25,
//   },
// };
