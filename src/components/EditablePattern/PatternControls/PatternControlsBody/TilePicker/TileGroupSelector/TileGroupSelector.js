import React, { useState, useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import styled from "styled-components";
import Pattern from "../../../../../Tiles/Tiles";
import Arrow from "../../../../../UI/Icons/Arrows/Arrows";
import IconButton from "../../../../../UI/Button/IconButton";

const SelectorWrapper = styled.div`
  display: flex;
  width: 130px;
  justify-content: center;
`;

const PatternContainer = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 2px;
  padding: 2px;
`;

const ArrowSvg = styled.svg`
  width: 32px;
  height: 32px;
  transform: ${props => (props.left ? "rotate(90deg)" : "rotate(-90deg)")};
`;

export const RandomSelector = props => {
  const dispatch = useContext(DispatchContext);
  const { activePattern } = useContext(StateContext);

  const handleSelectPattern = num => {
    dispatch({ type: "SET-ACTIVE-PATTERN", num: num });
  };

  return (
    <SelectorWrapper>
      <PatternContainer
        active={999 === activePattern}
        onClick={() => handleSelectPattern(999)}
      >
        <svg viewBox="0 0 40 40">
          <path
            d="M0 10L10 0M0 20L20 0M0 30L30 0M0 40L40 0M10 40L40 10M40 20L20 40M30 40L40 30"
            stroke={activePattern === 999 ? "var(--orange)" : "var(--dark)"}
            strokeLinecap="square"
            strokeWidth="1"
          />
          <path
            d="M14.7044 26.6081L14.8141 26.9589H15.1816H20.2672H20.8809L20.7569 26.3579C20.7328 26.2409 20.7234 26.1481 20.7234 26.0765C20.7234 24.8791 21.3647 23.799 22.8219 22.8397L22.822 22.8399L22.8331 22.8321C23.5668 22.3201 24.3582 21.7519 25.2073 21.1276C26.0906 20.4997 26.9021 19.8848 27.6414 19.2829L27.6427 19.2818C28.4599 18.6116 29.1292 17.7637 29.6539 16.7474C30.2187 15.6819 30.5 14.5254 30.5 13.2861C30.5 10.4705 29.3908 8.27144 27.171 6.75547C24.9914 5.23868 22.2247 4.5 18.9081 4.5C17.1682 4.5 15.3597 4.73262 13.4838 5.19437L13.482 5.19483C11.6285 5.65845 10.0397 6.3151 8.72643 7.17355L8.5 7.32156V7.59207V7.59307V7.59407V7.59507V7.59608V7.59709V7.59811V7.59913V7.60015V7.60118V7.60221V7.60324V7.60428V7.60532V7.60636V7.60741V7.60846V7.60951V7.61057V7.61163V7.6127V7.61377V7.61484V7.61592V7.617V7.61808V7.61917V7.62026V7.62135V7.62245V7.62355V7.62466V7.62576V7.62688V7.62799V7.62911V7.63023V7.63136V7.63249V7.63362V7.63476V7.6359V7.63704V7.63819V7.63934V7.6405V7.64165V7.64282V7.64398V7.64515V7.64632V7.6475V7.64868V7.64986V7.65105V7.65224V7.65343V7.65463V7.65583V7.65703V7.65824V7.65945V7.66067V7.66189V7.66311V7.66434V7.66557V7.6668V7.66804V7.66928V7.67052V7.67177V7.67302V7.67427V7.67553V7.67679V7.67806V7.67933V7.6806V7.68187V7.68315V7.68444V7.68572V7.68701V7.68831V7.6896V7.69091V7.69221V7.69352V7.69483V7.69614V7.69746V7.69879V7.70011V7.70144V7.70277V7.70411V7.70545V7.70679V7.70814V7.70949V7.71085V7.7122V7.71357V7.71493V7.7163V7.71767V7.71905V7.72043V7.72181V7.7232V7.72459V7.72598V7.72738V7.72878V7.73018V7.73159V7.733V7.73442V7.73583V7.73726V7.73868V7.74011V7.74154V7.74298V7.74442V7.74586V7.74731V7.74876V7.75021V7.75167V7.75313V7.7546V7.75607V7.75754V7.75901V7.76049V7.76198V7.76346V7.76495V7.76645V7.76794V7.76944V7.77095V7.77246V7.77397V7.77548V7.777V7.77852V7.78005V7.78158V7.78311V7.78465V7.78619V7.78773V7.78928V7.79083V7.79238V7.79394V7.7955V7.79706V7.79863V7.8002V7.80178V7.80336V7.80494V7.80653V7.80812V7.80971V7.81131V7.81291V7.81451V7.81612V7.81773V7.81934V7.82096V7.82258V7.82421V7.82584V7.82747V7.82911V7.83075V7.83239V7.83404V7.83569V7.83734V7.839V7.84066V7.84232V7.84399V7.84566V7.84734V7.84902V7.8507V7.85239V7.85408V7.85577V7.85747V7.85917V7.86087V7.86258V7.86429V7.866V7.86772V7.86944V7.87117V7.8729V7.87463V7.87636V7.8781V7.87985V7.88159V7.88334V7.8851V7.88685V7.88862V7.89038V7.89215V7.89392V7.89569V7.89747V7.89926V7.90104V7.90283V7.90462V7.90642V7.90822V7.91002V7.91183V7.91364V7.91546V7.91727V7.9191V7.92092V7.92275V7.92458V7.92642V7.92826V7.9301V7.93195V7.9338V7.93565V7.93751V7.93937V7.94123V7.9431V7.94497V7.94685V7.94872V7.95061V7.95249V7.95438V7.95627V7.95817V7.96007V7.96197V7.96388V7.96579V7.96771V7.96962V7.97154V7.97347V7.9754V7.97733V7.97927V7.98121V7.98315V7.98509V7.98704V7.989V7.99095V7.99292V7.99488V7.99685V7.99882V8.00079V8.00277V8.00475V8.00674V8.00873V8.01072V8.01272V8.01472V8.01672V8.01873V8.02074V8.02275V8.02477V8.02679V8.02882V8.03084V8.03288V8.03491V8.03695V8.03899V8.04104V8.04309V8.04514V8.0472V8.04926V8.05132V8.05339V8.05546V8.05754V8.05961V8.0617V8.06378V8.06587V8.06796V8.07006V8.07216V8.07426V8.07637V8.07848V8.08059V8.08271V8.08483V8.08696V8.08908V8.09122V8.09335V8.09549V8.09763V8.09978V8.10193V8.10408V8.10624V8.1084V8.11056V8.11273V8.1149V8.11708V8.11925V8.12144V8.12362V8.12581V8.128V8.1302V8.1324V8.1346V8.13681V8.13902V8.14123V8.14345V8.14567V8.14789V8.15012V8.15235V8.15459V8.15683V8.15907V8.16132V8.16356V8.16582V8.16807V8.17033V8.1726V8.17487V8.17714V8.17941V8.18169V8.18397V8.18625V8.18854V8.19084V8.19313V8.19543V8.19773V8.20004V8.20235V8.20466V8.20698V8.2093V8.21163V8.21395V8.21629V8.21862V8.22096V8.2233V8.22565V8.228V8.23035V8.23271V8.23507V8.23743V8.2398V8.24217V8.24454V8.24692V8.2493V8.25169V8.25407V8.25647V8.25886V8.26126V8.26366V8.26607V8.26848V8.27089V8.27331V8.27573V8.27816V8.28058V8.28301V8.28545V8.28789V8.29033V8.29278V8.29522V8.29768V8.30013V8.30259V8.30506V8.30752V8.30999V8.31247V8.31495V8.31743V8.31991V8.3224V8.32489V8.32739V8.32989V8.33239V8.3349V8.33741V8.33992V8.34244V8.34496V8.34748V8.35001V8.35254V8.35507V8.35761V8.36015V8.3627V8.36525V8.3678V8.37036V8.37292V8.37548V8.37805V8.38062V8.38319V8.38577V8.38835V8.39093V8.39352V8.39611V8.39871V8.40131V8.40391V8.40652V8.40913V8.41174V8.41436V8.41698V8.4196V8.42223V8.42486V8.42749V8.43013V8.43277V8.43542V8.43807V8.44072V8.44338V8.44604V8.4487V8.45136V8.45404V8.45671V8.45939V8.46207V8.46475V8.46744V8.47013V8.47283V8.47553V8.47823V8.48093V8.48364V8.48636V8.48907V8.49179V8.49452V8.49724V8.49997V8.50271V8.50545V8.50819V8.51093V8.51368V8.51644V8.51919V8.52195V8.52471V8.52748V8.53025V8.53302V8.5358V8.53858V8.54137V8.54415V8.54695V8.54974V8.55254V8.55534V8.55815V8.56096V8.56377V8.56659V8.56941C8.5 9.09947 8.60999 9.95988 8.81447 11.1207L8.81447 11.1207L8.81485 11.1228C9.0251 12.2874 9.32968 13.2736 9.73936 14.0678L9.87904 14.3385H10.1837H14.3486H14.6489L14.79 14.0735C15.2668 13.178 15.5483 12.033 15.6583 10.663C16.6213 10.3091 17.6305 10.1317 18.6889 10.1317C20.1353 10.1317 21.1303 10.3921 21.7526 10.8356C22.3437 11.2569 22.6608 11.8882 22.6608 12.8187C22.6608 13.6759 22.3483 14.5006 21.6804 15.3034C20.984 16.1403 20.1775 16.8411 19.2594 17.4073L19.2594 17.4073L19.2536 17.411C18.2861 18.0264 17.3391 18.7849 16.4119 19.6835C15.5161 20.5518 14.8957 21.3667 14.6233 22.1257C14.3732 22.8228 14.2432 23.5033 14.2432 24.1643C14.2432 24.8319 14.4054 25.6519 14.7044 26.6081ZM13.4541 31.813C13.4541 32.9709 13.7877 33.9254 14.5344 34.5794C15.2684 35.2223 16.318 35.5 17.5929 35.5C18.8812 35.5 19.9408 35.2228 20.6821 34.5813C21.4372 33.9279 21.7756 32.9728 21.7756 31.813C21.7756 30.6412 21.4385 29.6761 20.6846 29.015C19.9432 28.3649 18.8826 28.0836 17.5929 28.0836C16.3166 28.0836 15.266 28.3655 14.5319 29.017C13.7864 29.6786 13.4541 30.643 13.4541 31.813Z"
            fill="var(--surface)"
            stroke={activePattern === 999 ? "var(--orange)" : "var(--dark)"}
            strokeWidth="2"
          />
        </svg>
      </PatternContainer>
    </SelectorWrapper>
  );
};

const TileGroupSelector = props => {
  const dispatch = useContext(DispatchContext);
  const { activePattern } = useContext(StateContext);
  const [num, setNum] = useState(
    activePattern >= props.range.low && activePattern <= props.range.high
      ? activePattern
      : props.range.low
  );

  const handleUpdateForward = () => {
    let newNum = num + 1;
    if (newNum > props.range.high) newNum = props.range.low;
    if (activePattern === num)
      dispatch({ type: "SET-ACTIVE-PATTERN", num: newNum });
    setNum(newNum);
  };

  const handleUpdateBackward = () => {
    let newNum = num - 1;
    if (newNum < props.range.low) newNum = props.range.high;
    if (activePattern === num)
      dispatch({ type: "SET-ACTIVE-PATTERN", num: newNum });
    setNum(newNum);
  };

  const handleSelectPattern = num => {
    dispatch({ type: "SET-ACTIVE-PATTERN", num: num });
  };

  return (
    <SelectorWrapper>
      <IconButton onClick={handleUpdateBackward}>
        <ArrowSvg viewbox="0 0 32 32" left>
          <Arrow fill="var(--dark)" />
        </ArrowSvg>
      </IconButton>
      <PatternContainer
        active={num === activePattern}
        onClick={() => handleSelectPattern(num)}
      >
        <Pattern
          num={num}
          patternColor={num === activePattern ? "var(--orange)" : "var(--dark)"}
        />
      </PatternContainer>
      <IconButton onClick={handleUpdateForward}>
        <ArrowSvg viewbox="0 0 32 32">
          <Arrow fill="var(--dark)" />
        </ArrowSvg>
      </IconButton>
    </SelectorWrapper>
  );
};

export default TileGroupSelector;
