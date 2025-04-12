import React from "react";

const projectList = [
  {
    title: "Sistem Pengajuan Cuti",
    description: "Aplikasi web untuk manajemen cuti pegawai.",
    link: "#",
  },
  {
    title: "BrekkieExpress",
    description: "Website bisnis kuliner pagi berbasis Laravel.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 text-center bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800 text-left"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Lihat Detail
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;