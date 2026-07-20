import { motion } from "framer-motion";
function Home() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <motion.div
    className="flex flex-col md:flex-row items-center gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
></motion.div>

        {/* Profile Image */}
        <img
        src="/profile_high_quality.jpg"
        alt="Ameena"
          className="w-72 h-72 rounded-full object-cover border-4 border-cyan-400 shadow-1g"
/>

        <div>
          <h1 className="text-5xl font-bold">
            Hi, I'm <span className="text-cyan-400">Ameena</span> 👋
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Full Stack MERN Developer | Python Developer | AIML Developer
          </p>

          <button className="mt-8 bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition">
            View Projects
          </button>
        </div>

    
    </section>
  );
}

export default Home;
