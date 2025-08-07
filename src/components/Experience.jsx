function Experience() {
  return (
    <section className="bg-blue-50 rounded-xl shadow p-8 my-8" id="experience">
      <h2 className="text-3xl font-bold text-primary mb-6">Experience</h2>

      {/* Job Card */}
      <article className="bg-white rounded-lg p-6 shadow-md mb-6 hover:shadow-lg transition">
        <header className="mb-3">
          <h3 className="text-xl font-semibold text-accent mb-1">Retail Sales Representative</h3>
          <p className="text-sm italic text-gray-600">Ottawa Senators Hockey Club — Aug 2024 – Present | Ottawa, ON</p>
        </header>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Enhance customer experience at games and events through sales, service, and problem-solving.</li>
          <li>Use Microsoft Access for inventory management and customer data tracking.</li>
          <li>Collaborate with team to provide seamless event experience.</li>
          <li>Assist with inventory, back-office operations, and customer satisfaction strategies.</li>
        </ul>
      </article>

      {/* Job Card */}
      <article className="bg-white rounded-lg p-6 shadow-md mb-6 hover:shadow-lg transition">
        <header className="mb-3">
          <h3 className="text-xl font-semibold text-accent mb-1">Sales Associate</h3>
          <p className="text-sm italic text-gray-600">Tommy Hilfiger — Jul 2019 – Oct 2024 | Ontario, Canada</p>
        </header>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Refined customer service and retail management skills in a fast-paced environment.</li>
          <li>Surpassed sales objectives; multiple Employee of the Month awards.</li>
          <li>Collaborated effectively with colleagues to drive teamwork and customer loyalty.</li>
          <li>Adapted quickly and managed multiple responsibilities concurrently.</li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;
