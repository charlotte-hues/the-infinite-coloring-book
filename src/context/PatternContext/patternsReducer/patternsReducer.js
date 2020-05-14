import orientations from "../DefaultValues/Orientations/Orientations";
import { allPatterns } from "../../../components/Tiles/Tiles";
import getRandNum from "../../../utility/getRandNum";

// const initialMaxNo = [];
// for (const _ in allPatterns) {
//   initialMaxNo.push(_);
// }
// const maxNo = initialMaxNo.length;

// const randPatternArray = (columns, rows) => {
//   return Array.from({
//     length: columns * rows
//   }).map(x => getRandNum(maxNo));
// };

const patternsReducer = (state, action) => {
  switch (action.type) {
    case "updateComplexity": {
      console.log("updateComplexity");
      //   const newPattern = randPatternArray(
      //     orientations[state.orientation][action.newComplexity][0],
      //     orientations[state.orientation][action.newComplexity][1]
      //   );
      return {
        ...state,
        complexity: action.newComplexity
        // patterns: newPattern
      };
    }
    default:
      return console.log("default");
  }
};

export default patternsReducer;

//   const updateComplexityHandler = newComplexity => {
//     setComplexity(newComplexity);
//     generateRandomPattern(orientation, newComplexity);
//   };

// const generateRandomPattern = (orientation, complexity) => {
//     const newPattern = randPatternArray(
//       orientations[orientation][complexity][0],
//       orientations[orientation][complexity][1]
//     );
//     setPatterns(newPattern);
//   };

//   const [patterns, setPatterns] = useLocalStorage(
//     "patterns",
//     randPatternArray(4, 5)
//   );
//   const [orientation, setOrientation] = useLocalStorage(
//     "orientation",
//     "portrait"
//   );
//   const [complexity, setComplexity] = useLocalStorage("complexity", 0);
//   const [columns, setColumns] = useState();
//   const [patternColor, setPatternColor] = useLocalStorage(
//     "patternColour",
//     "#E1DBD2"
//   );
//   const [backgroundColor, setBackgroundColor] = useLocalStorage(
//     "backgroundColor",
//     "F7F3EE"
//   );
//   const [label] = useLocalStorage("label", "Charlotte");
//   const [imageName, setImageName] = useLocalStorage(
//     "imageName",
//     "the-infinite-coloring-book"
//   );

//   const updateOrientationHandler = newOrientation => {
//     setOrientation(newOrientation);
//     generateRandomPattern(newOrientation, complexity);
//   };

//   const updatePatternColorHandler = newColor => {
//     setPatternColor(newColor);
//   };

//

//   const downloadImageHandler = (e, name = "the-infinite-coloring-book") => {
//     saveAsPng(DownloadableImageRef.current, {
//       filename: name,
//       printDate: false
//     }).then(() => {
//       window.location.reload();
//     });
//   };

//   const switchTileHandler = index => {
//     const updatedPattern = [...patterns];
//     let newNum = getRandNum(maxNo);
//     while (patterns[index] === newNum) {
//       newNum = getRandNum(maxNo);
//     }
//     updatedPattern[index] = newNum;
//     setPatterns(updatedPattern);
//   };
