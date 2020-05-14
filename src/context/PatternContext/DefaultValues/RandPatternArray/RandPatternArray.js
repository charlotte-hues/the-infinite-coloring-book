import getRandNum from "../../../../utility/getRandNum";
import { allPatterns } from "../../../../components/Tiles/Tiles";

const initialMaxNo = [];
for (const _ in allPatterns) {
  initialMaxNo.push(_);
}

export const maxNo = initialMaxNo.length;

const randPatternArray = (columns, rows) => {
  return Array.from({
    length: columns * rows
  }).map(x => getRandNum(maxNo));
};

export default randPatternArray;
