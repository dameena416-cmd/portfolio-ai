function Certificates() {
  const certificates = [
    {
      title: "Oracle OCI AI Foundations",
      company: "Oracle",
    },
    {
      title: "Cognifyz Internship",
      company: "Cognifyz",
    },
    {
      title: "Full Stack Development",
      company: "Eduphoenix Solutions",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white py-16 px-8">
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-12">
        Certificates
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-gray-400 mt-3">{item.company}</p>

            <button className="mt-6 bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600">
              View Certificate
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;