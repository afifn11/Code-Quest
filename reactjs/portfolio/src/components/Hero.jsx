import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 bg-clip-text text-transparent"
          >
            Hi, I'm John Doe
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            A passionate frontend developer creating modern web experiences with React and cutting-edge technologies.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </motion.a>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12 space-x-6"
          >
            {[
              { icon: <FaGithub size={24} />, url: "#" },
              { icon: <FaLinkedin size={24} />, url: "#" },
              { icon: <FaTwitter size={24} />, url: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;