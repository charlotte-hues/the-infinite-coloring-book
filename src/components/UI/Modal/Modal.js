import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const StyledDiv = styled(motion.div)`
  position: absolute;
  margin: auto;
  height: auto;
  width: auto;
  top: 20%;
  left: 20%;
  padding: 30px 20px;
  background: var(--surface);
  border: 2px solid var(--trim);
  border-radius: 4px;
  box-shadow: var(--shadow);
  z-index: 100;
`;

const Modal = ({ children }) => {
  const ref = useRef();
  const history = useHistory();

  useOnClickOutside(ref, () => history.goBack());

  return (
    <StyledDiv
      initial={{ y: "-20vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-20vh", opacity: 0 }}
      ref={ref}
    >
      {children}
    </StyledDiv>
  );
};

export default Modal;
