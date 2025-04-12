import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-500 text-white px-4"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Afif!
      </motion.h1>
      <p className="text-xl mt-4 mb-6">Frontend Developer | Passionate Coder</p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="px-6 py-3 bg-white text-indigo-700 rounded-full font-semibold shadow hover:bg-indigo-100 transition"
      >
        Lihat Proyek Saya
      </motion.a>
    </section>
  );
};

export default Hero;