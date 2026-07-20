function Projects() {
  const projects = [
    {
      title: "AI Portfolio",
      description: "A personal portfolio built with React, Vite and Tailwind CSS.",
      tech: "React | Tailwind | Vite",
    },
    {
      title: "Online Quiz App",
      description: "Full Stack MERN quiz application with authentication.",
      tech: "MongoDB | Express | React | Node",
    },
    {
      title: "Task Management App",
      description: "Manage daily tasks with CRUD operations.",
      tech: "React | Node | MongoDB",
    },
    {
      title:"Object detection system",
      description: " detects objects based on AIML.",
      tech: "AI| Ml",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white py-16 px-8">
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-12">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>

            <p className="text-gray-300 mt-3">
              {project.description}
            </p>

            <p className="text-cyan-400 mt-4">
              {project.tech}
            </p>

            <div className="mt-6 flex gap-3">
              <button className="bg-cyan-500 px-4 py-2 rounded-lg">
                GitHub
              </button>

              <button className="border border-cyan-500 px-4 py-2 rounded-lg">
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;