import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 8 } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 8, delay: 0.5 } }
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={textVariants}>About Me</motion.h1>
      <motion.p variants={textVariants}>
        Hello! I'm a web developer and web designer with expertise in React and Framer Motion.
      </motion.p>
      <motion.p variants={textVariants}>
        I love creating captivating and interactive web experiences using the latest technologies.
      </motion.p>
      <motion.p variants={textVariants}>
        With my skills in React, I can build fast, scalable, and responsive user interfaces.
      </motion.p>
      <motion.p variants={textVariants}>
        Additionally, I leverage the power of Framer Motion to add fluid animations and transitions.
      </motion.p>
      <motion.p variants={textVariants}>
        Let's collaborate and bring your web project to life!
      </motion.p>
    </motion.div>
  );
};

export default AboutMe;