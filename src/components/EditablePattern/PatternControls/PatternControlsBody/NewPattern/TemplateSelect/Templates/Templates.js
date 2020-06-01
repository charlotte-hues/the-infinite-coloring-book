import randPatternArray from "../../../../../../../context/PatternContext/DefaultValues/RandPatternArray/RandPatternArray";

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
        { num: 13, locked: false },
        { num: 13, locked: false },
        { num: 13, locked: false },
        { num: 13, locked: false },
        { num: 13, locked: false },
        { num: 37, locked: false },
        { num: 39, locked: false },
        { num: 25, locked: false },
        { num: 44, locked: false },
        { num: 31, locked: false },
        { num: 43, locked: false },
        { num: 29, locked: false },
        { num: 5, locked: false },
        { num: 29, locked: false },
        { num: 40, locked: false },
        { num: 1, locked: false },
        { num: 43, locked: false },
        { num: 26, locked: false },
        { num: 40, locked: false },
        { num: 0, locked: false },
        { num: 13, locked: false },
        { num: 13, locked: false },
        { num: 13, locked: false },
        { num: 13, locked: false },
        { num: 13, locked: false }
      ],
      columns: 5,
      complexity: 1,
      orientation: "square"
    }
  };
};

export default patternTemplates;
