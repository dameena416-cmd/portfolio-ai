function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Tailwind CSS",
    "Git & GitHub",
    "SQL",
    "python",
    "Java",
    "Data structures and algorithms",
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-cyan-400 text-center mb-12">
          My Skills
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 hover:bg-cyan-500 transition duration-300"
            >
              <h2 className="text-lg font-semibold">{skill}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;