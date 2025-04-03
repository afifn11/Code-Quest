// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Afif!
      </motion.h1>
      <p className="text-xl mt-4">Frontend Developer | Passionate Coder</p>
    </section>
  );
};

export default Hero;