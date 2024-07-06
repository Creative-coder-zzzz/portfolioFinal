import React from "react";
import { motion } from "framer-motion";
import { useInView, Observer } from "react-intersection-observer";

const ScrollReveal = ({ children, variants, initial, transition }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
