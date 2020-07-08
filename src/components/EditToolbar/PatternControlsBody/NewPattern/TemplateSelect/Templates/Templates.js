import randPatternArray from "../../../../../../shared/RandPatternArray/RandPatternArray";

const pattern = (patternNo, props) => {
  return randPatternArray(props.orientation, props.complexity).map(x => {
    let newNum = patternNo === "rand" ? x : patternNo;
    return { num: newNum, locked: false };
  });
};

const patternTemplates = props => {
  return {
    random: {
      patterns: pattern("rand", props),
      columns: props.columns,
      complexity: props.complexity,
      orientation: props.orientation
    },
    beau: {
      patterns: pattern(23, props),
      columns: props.columns,
      complexity: props.complexity,
      orientation: props.orientation
    },
    penelope: {
      patterns: pattern(21, props),
      columns: props.columns,
      complexity: props.complexity,
      orientation: props.orientation
    },
    yoda: {
      patterns: [
        { num: 12, locked: false },
        { num: 12, locked: false },
        { num: 12, locked: false },
        { num: 12, locked: false },
        { num: 12, locked: false },
        { num: 45, locked: false },
        { num: 47, locked: false },
        { num: 32, locked: false },
        { num: 52, locked: false },
        { num: 39, locked: false },
        { num: 51, locked: false },
        { num: 36, locked: false },
        { num: 7, locked: false },
        { num: 36, locked: false },
        { num: 48, locked: false },
        { num: 1, locked: false },
        { num: 51, locked: false },
        { num: 33, locked: false },
        { num: 48, locked: false },
        { num: 0, locked: false },
        { num: 12, locked: false },
        { num: 12, locked: false },
        { num: 12, locked: false },
        { num: 12, locked: false },
        { num: 12, locked: false }
      ],
      columns: 5,
      complexity: 1,
      orientation: "square"
    }
  };
};

export default patternTemplates;
