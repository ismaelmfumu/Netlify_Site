function Projects() {
  return (
    <section className="bg-white border rounded-xl shadow p-8 my-8" id="projects">
      <h2 className="text-3xl font-bold text-primary mb-6">Projects</h2>

      {/* Project Card */}
      <article className="bg-blue-50 rounded-lg p-6 shadow-md mb-6 hover:shadow-lg transition">
        <header className="mb-3 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-accent">Music Voting and Community Platform</h3>
          <span className="text-sm italic text-gray-600">May 2024 – Present</span>
        </header>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Full-stack web app built with Python Flask backend and Firebase Firestore database.</li>
          <li>Implemented user authentication, RESTful APIs, voting & leaderboard features.</li>
          <li>Developed responsive frontend with HTML, CSS, JavaScript.</li>
          <li>Ensured data integrity via sanitization and used Git for version control.</li>
        </ul>
      </article>

      {/* Project Card */}
      <article className="bg-blue-50 rounded-lg p-6 shadow-md mb-6 hover:shadow-lg transition">
        <header className="mb-3 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-accent">Automated Snow Plow</h3>
          <span className="text-sm italic text-gray-600">Sep 2023 – Dec 2023</span>
        </header>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Designed a robot to clear snow/debris with boundary and obstacle detection.</li>
          <li>Utilized C programming, analog circuits, and sensor integration.</li>
          <li>Focused on navigating constrained environments and penalty avoidance.</li>
        </ul>
      </article>

      {/* Project Card */}
      <article className="bg-blue-50 rounded-lg p-6 shadow-md mb-6 hover:shadow-lg transition">
        <header className="mb-3 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-accent">Smart Garden Irrigation System</h3>
          <span className="text-sm italic text-gray-600">Jan 2023 – Apr 2023</span>
        </header>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Integrated sensors and Arduino to automate irrigation based on soil moisture.</li>
          <li>Developed a remote-monitoring web app with database backend.</li>
        </ul>
      </article>
    </section>
  );
}

export default Projects;
