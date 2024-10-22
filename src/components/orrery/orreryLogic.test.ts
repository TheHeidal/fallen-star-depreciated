import { inHouse } from "./orreryLogic";

type InHouseDataSet = [
  position: number,
  span: number,
  house: number,
  result: boolean
];

const saturnCases: InHouseDataSet[] = [
  [-15, 10, 0, false], // behind
  [-10, 10, 0, false], //t cw touching hws
  [-5, 10, 0, true], //behind straddling
  [0, 10, 0, true], // t ws touch h ws
  [10, 10, 0, true], //within
  [20, 10, 0, true], //t cw touching h cw
  [25, 10, 0, true], //t straddling h cw
  [30, 10, 0, false], //t cw touching h cw
  [30, 10, 0, false], //ahead touching
  [35, 10, 0, false], //ahead
];
const marsCases: InHouseDataSet[] = [
  [-50, 45, 0, false], //t cw behind house ws
  [-45, 45, 0, false], //token cw touching house ws
  [-22.5, 45, 0, true], //t straddling h ws
  [-15, 45, 0, true], //t cw touching h cw
  [-7.5, 45, 0, true], // t enveloping h
  [0, 45, 0, true], //t ws within touching h ws
  [10, 45, 0, true], // t ws within h
  [30, 45, 0, false], //ahead touching
  [35, 45, 0, false], //ahead
];

describe("saturn", () => {
  const houseCases = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].flatMap((n) => {
    return saturnCases.map(([position, span, house, result]) => {
      return [position + n * 30, span, house + n, result] as InHouseDataSet;
    });
  });
  const adjustedCases = [-360, 0, 360].flatMap((n) => {
    return houseCases.map(([position, span, house, result]) => {
      return [position + n, span, house, result] as InHouseDataSet;
    });
  });
  test.each<InHouseDataSet>(adjustedCases)(
    "Saturn at %p with span %p in house %p should return %p",
    (position, span, house, expectedResult) => {
      const result = inHouse(position, span, house);
      expect(result).toEqual(expectedResult);
    }
  );
});
describe("mars", () => {
  const houseCases = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].flatMap((n) => {
    return marsCases.map(([position, span, house, result]) => {
      return [position + n * 30, span, house + n, result] as InHouseDataSet;
    });
  });
  const adjustedCases = [-360, 0, 360].flatMap((n) => {
    return houseCases.map(([position, span, house, result]) => {
      return [position + n, span, house, result] as InHouseDataSet;
    });
  });
  test.each<InHouseDataSet>(adjustedCases)(
    "Mars at %p with span %p in house %p should return %p",
    (position, span, house, expectedResult) => {
      const result = inHouse(position, span, house);
      expect(result).toEqual(expectedResult);
    }
  );
});
