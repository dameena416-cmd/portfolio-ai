import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400">
          Ameena Portfolio
        </h1>

        {/* Navigation */}
        <ul className="flex gap-8 text-lg font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-bold"
                  : "hover:text-cyan-400 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-bold"
                  : "hover:text-cyan-400 transition"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-bold"
                  : "hover:text-cyan-400 transition"
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-bold"
                  : "hover:text-cyan-400 transition"
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/certificates"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-bold"
                  : "hover:text-cyan-400 transition"
              }
            >
              Certificates
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-bold"
                  : "hover:text-cyan-400 transition"
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-bold"
                  : "hover:text-cyan-400 transition"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;