import React, { useState, useRef, useEffect, useContext } from "react";
import { DispatchContext } from "../../../context/PatternContext/PatternContext";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import useWindowSize from "../../../hooks/useWindowSize";
import styled from "styled-components";
import PatternControlsHeader from "./PatternControlsHeader/PatternControlsHeader";
import PatternControlsBody from "./PatternControlsBody/PatternControlsBody";
import MinimiseButton from "./PatternControlsInputs/Inputs/MinimiseButton/MinimiseButton";

const Container = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 350px;
  width: 90vw;
  max-width: 345px;
  height: 300px;
  min-height: 300px;
  padding: 6px 25px 10px;
  background: var(--surface);
  -webkit-box-shadow: var(--shadow);
  -moz-box-shadow: var(--shadow);
  box-shadow: var(--shadow);
  margin: 10px;
  transition: all 0.5s ease;

  @media only screen and (max-width: 680px) {
    position: absolute;
    height: ${props => (props.open ? "300px" : "50px")};
    min-height: initial;
    margin: auto;
    bottom: 2vh;
  }

  /* Ipad Portrait */
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: portrait) {
    position: absolute;
    bottom: 20px;
    width: 40vw;
    height: ${props => (props.open ? "300px" : "50px")};
    min-height: initial;
    max-width: initial;
  }

  @media print {
    display: none;
  }
`;

const PatternControls = props => {
  const dispatch = useContext(DispatchContext);
  const [active, setActive] = useState("new");
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(true);
  const ref = useRef();
  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 680) {
      setMobile(true);
    } else setMobile(false);
  }, [size]);

  useEffect(() => {
    mobile ? setOpen(false) : setOpen(true);
  }, [mobile]);

  useOnClickOutside(ref, () => {
    mobile && setOpen(false);
  });

  const closeControlBodyHandler = () => setOpen(false);

  const switchControlBodyHandler = group => {
    if (group === "lockMode") {
      dispatch({ type: "SET-LOCK-MODE", active: true });
    } else {
      dispatch({ type: "SET-LOCK-MODE", active: false });
    }
    setActive(group);
    setOpen(true);
  };

  return (
    <Container open={open} ref={ref}>
      <PatternControlsHeader
        open={open}
        active={active}
        onClick={switchControlBodyHandler}
      />
      <PatternControlsBody active={active} open={open} />
      <MinimiseButton onClick={closeControlBodyHandler} visible={open} />
    </Container>
  );
};

export default PatternControls;
