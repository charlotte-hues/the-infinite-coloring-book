import React from "react";
import { motion } from "framer-motion";

const mountTransition = component => {
  return (
    <motion.div
      exit={{ opacity: 0, x: 0, y: "-10vh" }}
      initial={{ opacity: 0, x: 0, y: "-10vh" }}
      animate={{ opacity: 1, x: 0, y: 0 }}
    >
      {component}
    </motion.div>
  );
};

export default mountTransition;
