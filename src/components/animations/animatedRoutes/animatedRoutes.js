import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch } from "react-router-dom";

export const AnimatedRoutesWrapper = ({ location, children }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location}>{children}</Switch>
    </AnimatePresence>
  );
};
