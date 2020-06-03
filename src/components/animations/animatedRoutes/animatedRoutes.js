import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, useLocation } from "react-router-dom";

export const AnimatedRoutesWrapper = props => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        {props.children}
      </Switch>
    </AnimatePresence>
  );
};
