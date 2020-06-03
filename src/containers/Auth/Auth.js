import React from "react";
import { motion } from "framer-motion";

const Auth = props => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h4>Login page and sign up page</h4>
    </motion.div>
  );
};

export default Auth;
