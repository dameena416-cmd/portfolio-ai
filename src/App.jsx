import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/skills/skills.jsx";
import Projects from "./pages/projects/projects.jsx";
import Certificates from "./pages/certificates/certificates.jsx";
import Contact from "./pages/contact/contact.jsx";
import Services from "./pages/services/Services.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;