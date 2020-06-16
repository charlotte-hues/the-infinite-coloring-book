import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${props =>
    props.exiting ? "rgba(225,219,210,0)" : "rgba(225,219,210,0.5)"};
  transition: all 0.5s ease;
  z-index: 99;
`;

const StyledDiv = styled(motion.div)`
  position: absolute;
  margin: auto;
  height: auto;
  width: auto;
  top: 20%;
  left: 30px;
  transform: translate(-50%, -50%);
  padding: 30px 20px;
  background: ${props =>
    props.exiting ? "rgba(247,243,238,0)" : "rgba(247,243,238,1)"};
  border: 2px solid
    ${props => (props.exiting ? "rgba(225,219,210,0)" : "rgba(225,219,210,1)")};
  border-radius: 4px;
  box-shadow: ${props => (props.exiting ? "none" : "var(--shadow)")};
  z-index: 100;
  transition: all 0.5s ease;

  & > * {
    opacity: ${props => (!props.exiting ? 1 : 0)};
  }
`;

const Modal = ({ children }) => {
  const ref = useRef();
  const history = useHistory();
  let [exiting, setExiting] = useState(false);

  const closeModalHandler = () => {
    setExiting(true);
    setTimeout(() => {
      history.goBack();
    }, 500);
  };

  useOnClickOutside(ref, closeModalHandler);

  return (
    <Container
      exiting={exiting}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <StyledDiv
        initial={{ y: "-20vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-20vh", opacity: 0 }}
        ref={ref}
        exiting={exiting}
      >
        {children}
      </StyledDiv>
    </Container>
  );
};

export default Modal;
