import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FadeIn } from "../../../UI/Animation/MountTransition/MountTransition";
import styled from "styled-components";
import NewPattern from "./NewPattern/NewPattern";
import ChangeColor from "./ChangeColor/ChangeColor";
import Save from "./Save/Save";
import Print from "./Print/Print";

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 680px) {
    height: ${props => (props.open ? "100%" : "0%")};
    opacity: ${props => (props.open ? "100%" : "0%")};
  }

  /* Ipad Portrait */
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: portrait) {
    height: ${props => (props.open ? "100%" : "0%")};
  }
`;

const PatternControlsBody = props => {
  const [isVisible, setIsVisible] = useState(false);
  let activeGroup = null;
  switch (props.active) {
    case "new":
      activeGroup = (
        <FadeIn name="new">
          <NewPattern />
        </FadeIn>
      );
      break;
    case "color":
      activeGroup = (
        <FadeIn name="color">
          <ChangeColor />
        </FadeIn>
      );
      break;
    case "save":
      activeGroup = (
        <FadeIn name="save">
          <Save />
        </FadeIn>
      );
      break;
    case "print":
      activeGroup = (
        <FadeIn name="print">
          <Print />
        </FadeIn>
      );
      break;
    default:
      activeGroup = null;
  }

  if (!isVisible) {
    activeGroup = null;
  }

  useEffect(() => {
    if (props.open) {
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    } else setIsVisible(false);
  }, [props.open]);

  return (
    <StyledDiv open={props.open}>
      <AnimatePresence exitBeforeEnter>{activeGroup}</AnimatePresence>
    </StyledDiv>
  );
};

export default PatternControlsBody;
