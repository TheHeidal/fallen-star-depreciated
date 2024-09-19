import { ReactElement } from "react";

export const TABS = ["Summary", "Board", "Codex"];
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
  companion: string;
};
export type wizardHistory = {
  oldMaster: { known: string; unknown: string };
  age: string;
  changes: { key: React.Key; content: string }[];
  manhood: string;
  appearance: string;
};
export type powers = {
  fragment: { key: React.Key; content: string }[];
  humble: { key: React.Key; content: string }[];
};
export type wizard = {
  position: pactPosition;
  name: string;
  titles: string;
  fragment: string;
  familiar: string;
  fire: wizardCircle;
  air: wizardCircle;
  water: wizardCircle;
  earth: wizardCircle;
  treasures: { key: React.Key; content: string }[];
  possessions: { key: React.Key; content: string }[];
  history: wizardHistory;
  powers: powers;
};

export type inlineRenderable = string | ReactElement;

export type pactFragment = {
  legend: string;
  idPrefix: string;
  optionName: string;
  options: {
    value: string;
    labelContent: inlineRenderable;
  }[];
};
