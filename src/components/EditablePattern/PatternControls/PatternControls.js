import React, { useState, useRef, useEffect } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
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
  height: 220px;
  min-height: 250px;
  padding: 6px 25px 10px;
  background: var(--surface);
  -webkit-box-shadow: var(--shadow);
  -moz-box-shadow: var(--shadow);
  box-shadow: var(--shadow);
  margin: 10px;
  transition: all 0.5s ease;

  @media only screen and (max-width: 680px) {
    position: absolute;
    height: ${props => (props.open ? "250px" : "50px")};
    min-height: initial;
    margin: auto;
    bottom: 2vh;
  }

  /* Ipad Portrait */
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: portrait) {
    position: absolute;
    bottom: 20px;
    width: 40vw;
    height: ${props => (props.open ? "250px" : "50px")};
    min-height: initial;
    max-width: initial;
  }

  @media print {
    display: none;
  }
`;

const PatternControls = props => {
  const [active, setActive] = useState("new");
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (document.body.clientWidth <= 680) {
      setMobile(true);
    } else setMobile(false);
    window.addEventListener("resize", () => {
      if (document.body.clientWidth <= 680) {
        setMobile(true);
      } else setMobile(false);
    });
  }, []);

  useEffect(() => {
    mobile ? setOpen(false) : setOpen(true);
  }, [mobile]);

  useOnClickOutside(ref, () => {
    mobile && setOpen(false);
  });

  const closeControlBodyHandler = () => setOpen(false);

  const switchControlBodyHandler = group => {
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
      <MinimiseButton onClick={closeControlBodyHandler} visible={open}>
        v
      </MinimiseButton>
    </Container>
  );
};

export default PatternControls;
