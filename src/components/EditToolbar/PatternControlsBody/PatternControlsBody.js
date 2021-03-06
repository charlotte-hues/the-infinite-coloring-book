import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FadeIn } from "../../UI/Animation/MountTransition/MountTransition";
import styled from "styled-components";
import NewPattern from "./NewPattern/NewPattern";
import ChangeColor from "./ChangeColor/ChangeColor";
import TilePicker from "./TilePicker/TilePicker";
import LockMode from "./LockMode/LockMode";
import Save from "./Save/Save";

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
    case "tilePicker":
      activeGroup = (
        <FadeIn name="tilePicker">
          <TilePicker />
        </FadeIn>
      );
      break;
    case "lockMode":
      activeGroup = (
        <FadeIn name="lockMode">
          <LockMode />
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
    default:
      activeGroup = null;
  }

  if (!isVisible) {
    activeGroup = null;
  }

  useEffect(() => {
    let mounted = true;
    if (props.open) {
      setTimeout(() => {
        if (mounted) setIsVisible(true);
      }, 300);
    } else if (mounted) setIsVisible(false);
    return () => (mounted = false);
  }, [props.open]);

  return (
    <StyledDiv open={props.open}>
      <AnimatePresence exitBeforeEnter>{activeGroup}</AnimatePresence>
    </StyledDiv>
  );
};

export default PatternControlsBody;
