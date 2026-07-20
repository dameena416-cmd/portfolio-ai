function About() {
  return (
    <section className="min-h-screen bg-slate-900 text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          About Me
        </h1>

        <p className="text-lg leading-8 text-gray-300">
          Hi! I'm <span className="text-cyan-400 font-semibold">Ameena</span>,
          a passionate Full Stack MERN Developer, Python Developer and AIML student.
          I enjoy building modern, responsive, and user-friendly web applications.
        </p>

        <p className="text-lg leading-8 text-gray-300 mt-6">
          I have experience with React.js, Node.js, Express.js, MongoDB,
          JavaScript, Python, HTML, CSS, and Tailwind CSS.
        </p>

        <p className="text-lg leading-8 text-gray-300 mt-6">
          My goal is to become a skilled Software Developer and build
          innovative AI-powered applications that solve real-world problems.
        </p>

      </div>
    </section>
  );
}

export default About;