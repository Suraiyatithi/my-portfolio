import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/blue.png'
import bg6 from '../assets/Daco_4096693.png'
import styled from 'styled-components';
const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 8 } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 8, delay: 0.5 } }
  };
  const GradientBackground = styled.div`
  background: linear-gradient(to right, #66179a, #00ff00, #0000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  font-weight: bold;
`;


  return (
<div className="row p-4 ">
  <div  style={{backgroundImage:`url(${bg6})`}} className="col-sm-12 col-lg-6 container1">
    <img className='w-75' src={img1} alt="" />
  </div>
  <div className="col-sm-12 col-lg-6">
  <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
<h1 className='fw-'>      <motion.h1 variants={textVariants}><GradientBackground>About Me</GradientBackground></motion.h1></h1>
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
  </div>
</div>
  );
};

export default AboutMe;