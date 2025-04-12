import React from "react";

const About = () => {
  return (
    <section id="about" className="p-10 text-center bg-gray-100 dark:bg-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl mx-auto">
        <img src="/profil.jpg" alt="Afif" className="w-40 h-40 rounded-full object-cover shadow-md" />
        <p className="max-w-md text-lg">
          Saya seorang pengembang web yang fokus pada frontend dan UX/UI. Passion saya adalah membuat pengalaman pengguna yang menyenangkan dan efisien.
        </p>
      </div>
    </section>
  );
};

export default About;