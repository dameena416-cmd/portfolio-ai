import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-cyan-400">
          Ameena Portfolio
        </h2>

        <p className="mt-3 text-lg">
          Full Stack MERN Developer | Python Developer | AIML Developer
        </p>

        <div className="flex justify-center gap-8 mt-8 text-3xl">

          <a
            href="https://github.com/dameena416-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ameena-d-a5186b407/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:dameena416@gmail.com"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="mt-8 text-sm text-gray-500">
          © 2026 Ameena. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;