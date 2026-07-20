function Contact() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex justify-center items-center px-6">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-xl">

        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8">
          Contact Me
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 py-3 rounded-lg hover:bg-cyan-600 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;