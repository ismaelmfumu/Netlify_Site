function Education() {
  return (
    <section className="bg-blue-50 rounded-xl shadow p-8 my-8" id="education">
      <h2 className="text-3xl font-bold text-primary mb-6">Education</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* University */}
        <article className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-accent mb-1">
            Bachelor of Engineering - Computer Systems Engineering
          </h3>
          <p className="text-sm italic text-gray-600 mb-3">Carleton University | Jun 2024</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Focus on hardware-software integration, PCB & ASIC design, computer architecture.</li>
            <li>Led capstone project: automated inventory system integrating sensors, microcontrollers, and web interfaces.</li>
            <li>Developed skills in project management, risk, and quality control.</li>
          </ul>
        </article>

        {/* High School */}
        <article className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-accent mb-1">High School Diploma</h3>
          <p className="text-sm italic text-gray-600 mb-3">St. Michael's College School | Apr 2013</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Focused on science, mathematics, with active engagement in sports and community programs.</li>
            <li>Academic bursary recipient; emphasized discipline, knowledge, and social growth.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Education;
