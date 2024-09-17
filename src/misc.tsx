export type renderable = string;
export const WIZARDS: pactPosition[] = [
  "Necromancer",
  "Hierophant",
  "Warlock",
  "Mariner",
  "Faustian",
  "Sorcerer",
  "Anchorite",
];
export type pactPosition =
  | "Necromancer"
  | "Hierophant"
  | "Warlock"
  | "Mariner"
  | "Faustian"
  | "Sorcerer"
  | "Anchorite";
export type wizardCircle = {
  circle: "Fire" | "Air" | "Water" | "Earth";
  value: number;
  companion: renderable;
};
export type wizardHistory = {
  oldMaster: { known: renderable; unknown: renderable };
  age: renderable;
  changes: renderable[];
  manhood: renderable;
  appearance: renderable;
};
export type powers = { fragment: renderable[]; humble: renderable[] };
export type wizard = {
  position: pactPosition;
  name: renderable;
  titles: renderable;
  fragment: renderable;
  familiar: renderable;
  fire: wizardCircle;
  air: wizardCircle;
  water: wizardCircle;
  earth: wizardCircle;
  treasures: renderable[];
  possessions: renderable[];
  history: wizardHistory;
  powers: powers;
};
export const TABS = ["Summary", "Board", "Codex"];
