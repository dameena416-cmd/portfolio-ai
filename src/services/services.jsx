function Services() {
  const services = [
    "Full Stack Web Development",
    "Frontend Development (React)",
    "Backend Development (Node.js & Express)",
    "Python Programming",
    "Responsive Website Design",
    "MongoDB Database Design",
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white py-16 px-8">
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-12">
        My Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">{service}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;