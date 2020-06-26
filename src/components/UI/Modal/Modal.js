import React, { useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import TileIndicator from "../TileIndicator/TileIndicator";
import CloseIcon from "../Icons/Actions/Close/Close";

const Container = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(225, 219, 210, 0.5);
  transition: all 0.5s ease;
  overflow: hidden;
  z-index: 99;
`;

const CloseContainer = styled.div`
  position: absolute;
  display: flex;

  height: 40px;
  padding: 10px 2px;
  top: 0;
  right: 0;
`;

const StyledDiv = styled(motion.div)`
  position: relative;
  margin: auto;
  height: auto;
  width: auto;
  min-width: 300px;
  min-height: 100px;
  max-width: fit-content;
  padding: 30px 20px;
  background: var(--surface);
  border: 2px solid var(--trim);
  border-radius: 4px;
  box-shadow: var(--shadow);
  z-index: 100;
`;

const Title = styled.h4`
  color: var(--black);
  margin: 0 0 20px;
`;

const Modal = props => {
  const ref = useRef();

  const closeModalHandler = mounted => {
    props.modalClosed(mounted);
  };

  useOnClickOutside(ref, () => closeModalHandler(true));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.4 }
    }
  };

  const item = {
    hidden: { y: -200, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const indicator = (
    <TileIndicator indicate={props.indicate} patternColor="var(--orange)" />
  );

  return (
    <AnimatePresence onExitComplete={() => closeModalHandler(false)}>
      {props.show && (
        <Container
          key="backdrop"
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <StyledDiv key="modal" variants={item} ref={ref}>
            <CloseContainer>
              <CloseIcon onClick={closeModalHandler} />
            </CloseContainer>
            <Title>{props.title}</Title>
            {props.children}
            {props.indicate ? indicator : null}
          </StyledDiv>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Modal;
