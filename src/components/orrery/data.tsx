import { OrreryState } from "./orreryLogic";
import { StyleMap } from "./orreryTypes";
import { DivisionsData } from "./primitives/RingDivisionLines.stories";

export const INITIAL_STATE_DATA: OrreryState = [
  { id: "sun", bodySpan: 30, trackPosition: 0, tokenPosition: 0 },
  { id: "saturn", bodySpan: 10, trackPosition: 0, tokenPosition: -5 },
  { id: "jupiter", bodySpan: 22.5, trackPosition: 0, tokenPosition: 0 },
  { id: "mars", bodySpan: 45, trackPosition: 0, tokenPosition: 0 },
  { id: "venus", bodySpan: 75, trackPosition: 0, tokenPosition: 0 },
  { id: "mercury", bodySpan: 105, trackPosition: 0, tokenPosition: 0 },
];

export const STYLE_DATA: StyleMap = {
  sun: {
    textDisplay: <span>The Sun</span>,
    radii: { extRadius: 145, intRadius: 135 },
    ringProps: { className: "fill-red-600" },
    divisionPropsList: [DivisionsData.div_12_solid],
    pieceProps: { className: "fill-yellow-400 stroke-red-600 stroke-1" },
  },
  saturn: {
    textDisplay: <span>Saturn</span>,
    radii: { extRadius: 100, intRadius: 85 },
    ringProps: { className: "fill-slate-950" },
    divisionPropsList: [DivisionsData.div_36_solid],
    pieceProps: { className: "fill-slate-600" },
  },
  jupiter: {
    textDisplay: <span>Jupiter</span>,
    radii: { extRadius: 85, intRadius: 70 },
    ringProps: { className: "fill-orange-200" },
    divisionPropsList: [
      DivisionsData.div_12_solid,
      DivisionsData.div_24_dashed,
      DivisionsData.div_48_dashed,
    ],
    pieceProps: { className: "fill-amber-600" },
  },
  mars: {
    textDisplay: <span>Mars</span>,
    radii: { extRadius: 70, intRadius: 55 },
    ringProps: { className: "fill-red-300" },
    divisionPropsList: [
      DivisionsData.div_12_solid,
      DivisionsData.div_24_dashed,
    ],
    pieceProps: { className: "fill-red-600" },
  },
  venus: {
    textDisplay: <span>Venus</span>,
    radii: { extRadius: 55, intRadius: 40 },
    pieceProps: { className: "fill-emerald-600" },
    ringProps: { className: "fill-emerald-100" },
    divisionPropsList: [
      DivisionsData.div_12_solid,
      DivisionsData.div_24_dashed,
    ],
  },
  mercury: {
    textDisplay: <span>Mercury</span>,
    radii: { extRadius: 40, intRadius: 25 },
    pieceProps: { className: "fill-violet-600" },
    ringProps: { className: "fill-violet-200" },
    divisionPropsList: [
      DivisionsData.div_12_solid,
      DivisionsData.div_24_dashed,
    ],
  },
};

export const HOUSES = [
  "Aries",
  "Tarus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export const MONTHS = HOUSES.map((str) => {
  return [{ ratio: 0.6, content: str }];
});
