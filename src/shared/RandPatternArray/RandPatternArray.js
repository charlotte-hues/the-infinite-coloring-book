import { getRandNum } from "../utility";
import orientations from "../DefaultValues/Orientations/Orientations";
import { allPatterns } from "../../components/Tiles/Tiles";

const initialMaxNo = [];
for (const _ in allPatterns) {
  initialMaxNo.push(_);
}

export const getColumns = (orientation, complexity) => {
  return orientations[orientation][complexity][0];
};

export const maxNo = initialMaxNo.length;

const randPatternArray = (orientation, complexity) => {
  const columns = getColumns(orientation, complexity);
  const rows = orientations[orientation][complexity][1];
  return Array.from({
    length: columns * rows
  }).map(x => getRandNum(maxNo));
};

export default randPatternArray;
