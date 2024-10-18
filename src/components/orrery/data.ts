import { OrreryState } from "./orreryReducer";
import { CBStyle } from "./OrrerySVG";
import { cbID, PlanetVariants } from "./orreryTypes";
import { DivisionsData } from "./primatives/RingDivisionLines.stories";
import { TokenProps } from "./Token";
import { TrackProps } from "./Track";

export const INITIAL_STATE_DATA: OrreryState = [
  { id: "saturn", bodySpan: 10, trackPosition: 0, tokenPosition: -5 },
  { id: "jupiter", bodySpan: 22.5, trackPosition: 0, tokenPosition: 0 },
  { id: "mars", bodySpan: 45, trackPosition: 0, tokenPosition: 0 },
  { id: "venus", bodySpan: 75, trackPosition: 0, tokenPosition: 0 },
  { id: "mercury", bodySpan: 105, trackPosition: 0, tokenPosition: 0 },
];

export const STYLE_DATA: {
  [Property in PlanetVariants]: TrackProps & TokenProps & cbID;
} = {
  saturn: {
    id: "saturn",
    radii: { extRadius: 100, intRadius: 85 },
    ringProps: { className: "fill-slate-950" },
    divisionPropsList: [DivisionsData.div_36_solid],
    pieceProps: { className: "fill-slate-600" },
    spanAngle: 10,
  },
  jupiter: {
    id: "jupiter",
    radii: { extRadius: 85, intRadius: 70 },
    ringProps: { className: "fill-orange-200" },
    divisionPropsList: [
      DivisionsData.div_12_solid,
      DivisionsData.div_24_dashed,
      DivisionsData.div_48_dashed,
    ],
    pieceProps: { className: "fill-amber-600" },
    spanAngle: 360 * (3 / 48),
  },
  mars: {
    id: "mars",
    radii: { extRadius: 70, intRadius: 55 },

    ringProps: { className: "fill-red-300" },
    divisionPropsList: [
      DivisionsData.div_12_solid,
      DivisionsData.div_24_dashed,
    ],
    pieceProps: { className: "fill-red-600" },
    spanAngle: 360 * (3 / 24),
  },
  venus: {
    id: "venus",
    radii: { extRadius: 55, intRadius: 40 },

    ringProps: { className: "fill-emerald-100" },
    divisionPropsList: [
      DivisionsData.div_12_solid,
      DivisionsData.div_24_dashed,
    ],

    pieceProps: { className: "fill-emerald-600" },
    spanAngle: 360 * (5 / 24),
  },
  mercury: {
    id: "mercury",
    radii: { extRadius: 40, intRadius: 25 },

    ringProps: { className: "fill-violet-200" },
    divisionPropsList: [
      DivisionsData.div_12_solid,
      DivisionsData.div_24_dashed,
    ],

    pieceProps: { className: "fill-violet-600" },
    spanAngle: 105,
  },
};

export const CBData: { [key: string]: CBStyle } = {
  saturn: {
    id: "saturn",
    radii: { extRadius: 100, intRadius: 85 },
    trackProps: {
      ringProps: { className: "fill-slate-950" },
      divisionPropsList: [DivisionsData.div_36_solid],
    },
    tokenProps: { pieceProps: { className: "fill-slate-600" }, spanAngle: 10 },
  },
  jupiter: {
    id: "jupiter",
    radii: { extRadius: 85, intRadius: 70 },
    trackProps: {
      ringProps: { className: "fill-orange-200" },
      divisionPropsList: [
        DivisionsData.div_12_solid,
        DivisionsData.div_24_dashed,
        DivisionsData.div_48_dashed,
      ],
    },
    tokenProps: {
      pieceProps: { className: "fill-amber-600" },
      spanAngle: 360 * (3 / 48),
    },
  },
  mars: {
    id: "mars",
    radii: { extRadius: 70, intRadius: 55 },
    trackProps: {
      ringProps: { className: "fill-red-300" },
      divisionPropsList: [
        DivisionsData.div_12_solid,
        DivisionsData.div_24_dashed,
      ],
    },
    tokenProps: {
      pieceProps: { className: "fill-red-600" },
      spanAngle: 360 * (3 / 24),
    },
  },
  venus: {
    id: "venus",
    radii: { extRadius: 55, intRadius: 40 },
    trackProps: {
      ringProps: { className: "fill-emerald-100" },
      divisionPropsList: [
        DivisionsData.div_12_solid,
        DivisionsData.div_24_dashed,
      ],
    },
    tokenProps: {
      pieceProps: { className: "fill-emerald-600" },
      spanAngle: 360 * (5 / 24),
    },
  },
  mercury: {
    id: "mercury",
    radii: { extRadius: 40, intRadius: 25 },
    trackProps: {
      ringProps: { className: "fill-violet-200" },
      divisionPropsList: [
        DivisionsData.div_12_solid,
        DivisionsData.div_24_dashed,
      ],
    },
    tokenProps: {
      pieceProps: { className: "fill-violet-600" },
      spanAngle: 360 * (7 / 24),
    },
  },
};
