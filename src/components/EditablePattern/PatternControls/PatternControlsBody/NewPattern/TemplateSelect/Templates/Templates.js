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
    diagonal: {
      patterns: pattern(0, props),
      columns: props.columns,
      complexity: props.complexity,
      orientation: props.orientation
    },
    beau: {
      patterns: pattern(17, props),
      columns: props.columns,
      complexity: props.complexity,
      orientation: props.orientation
    },
    penelope: {
      patterns: pattern(15, props),
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
        { num: 29, locked: false },
        { num: 32, locked: false },
        { num: 4, locked: false },
        { num: 37, locked: false },
        { num: 23, locked: false },
        { num: 35, locked: false },
        { num: 22, locked: false },
        { num: 4, locked: false },
        { num: 22, locked: false },
        { num: 34, locked: false },
        { num: 0, locked: false },
        { num: 35, locked: false },
        { num: 19, locked: false },
        { num: 34, locked: false },
        { num: 1, locked: false },
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
