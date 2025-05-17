import React from "react";
import { motion, useInView } from "framer-motion";

const TypingEffect: React.FC<{ text: string }> = ({ text }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1
      ref={ref}
      className="text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight text-center"
      style={{ textShadow: "0 0 7px #6b46c1, 0 0 17px #6b46c1" }}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.05, delay: index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TypingEffect;