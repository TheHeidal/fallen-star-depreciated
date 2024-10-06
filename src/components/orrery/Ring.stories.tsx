import { Meta, StoryObj } from "@storybook/react/*";
import Ring from "./Ring";

export const ActionsData = {
  onCW: () => {},
  onWS: () => {},
};

export const DivisionData = {
  div_36_solid: {
    divisions: 36,
    offset: 5,
    dpClassName: "stroke-white stroke-1",
  },
  div_12_solid: {
    divisions: 12,
    offset: 0,
    dpClassName: "stroke-black stroke-1",
  },
  div_24_dashed: {
    divisions: 12,
    offset: 360 / 24,
    dpClassName: "stroke-black stroke-[0.5px] [stroke-dasharray:2,2]",
  },
  div_48_dashed: {
    divisions: 24,
    offset: 360 / 48,
    dpClassName: "stroke-black stroke-[0.5px] [stroke-dasharray:2,2]",
  },
};

const meta: Meta<typeof Ring> = {
  component: Ring,
  title: "Ring",
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
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<typeof Ring>;

export const Saturn: Story = {
  args: {
    id: "Saturn",
    className: "fill-slate-600",
    extRadius: 100,
    intRadius: 85,
    divisionParams: [DivisionData.div_36_solid],
  },
};
export const Jupiter = {
  args: {
    id: "Jupiter",
    className: "fill-orange-300",
    extRadius: 85,
    intRadius: 70,
    divisionParams: [
      DivisionData.div_12_solid,
      DivisionData.div_24_dashed,
      DivisionData.div_48_dashed,
    ],
  },
};
export const Mars = {
  args: {
    id: "Mars",
    className: "fill-red-400",
    extRadius: 70,
    intRadius: 55,
    divisionParams: [DivisionData.div_12_solid, DivisionData.div_24_dashed],
  },
};
export const Venus = {
  args: {
    id: "Venus",
    className: "fill-green-200",
    extRadius: 55,
    intRadius: 40,
    divisionParams: [DivisionData.div_12_solid, DivisionData.div_24_dashed],
  },
};
export const Mercury = {
  args: {
    id: "Mercury",
    className: "fill-violet-200",
    extRadius: 40,
    intRadius: 25,
    divisionParams: [DivisionData.div_12_solid, DivisionData.div_24_dashed],
  },
};
