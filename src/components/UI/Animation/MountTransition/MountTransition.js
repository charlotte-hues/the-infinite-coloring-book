import React from "react";
import { motion } from "framer-motion";

export const FadeIn = props => {
  return (
    <motion.div
      key={props.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};
