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
