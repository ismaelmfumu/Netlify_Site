function Home() {
  return (
    <section id="home" className="bg-white text-primary flex flex-col items-center justify-center py-16 min-h-[50vh] border-b">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Ismael Mfumu</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Computer Systems Engineer</h2>
      <p className="max-w-xl text-center text-lg mb-6 text-accent">
        Bridging hardware and software, with a focus on robust solutions, full-stack development, and real-world engineering innovation.
      </p>
      <a href="#contact" className="inline-block px-6 py-2 rounded bg-primary text-white font-semibold hover:bg-accent transition">
        Contact Me
      </a>
    </section>
  );
}
export default Home;
