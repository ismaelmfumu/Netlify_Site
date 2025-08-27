function About() {
  return (
    <div className="bg-blue-50 rounded-xl shadow p-8 my-8 flex flex-col items-center">
      {/* Centered Heading */}
      <h2 className="text-3xl font-bold text-primary mb-6 text-center w-full">About Me</h2>
      
      {/* Centered Image Row – Enlarged and Responsive */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6 w-full max-w-xl">
        <img
          src="photos/photosforpersonalwebsitepart1/Personal1.jpeg"
          alt="Ismael Personal 1"
          className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-xl border-2 border-primary shadow transition-transform duration-300 hover:scale-105"
        />
        <img
          src="photos/photosforpersonalwebsitepart1/Personal2.jpeg"
          alt="Ismael Personal 2"
          className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-xl border-2 border-primary shadow transition-transform duration-300 hover:scale-105"
        />
      </div>

      <p className="text-md text-gray-700 mb-2 text-center max-w-2xl">
        Computer Systems Engineer and Carleton graduate, passionate about both hardware and software. I bring deep project experience in web, embedded, and cloud technologies.
      </p>
      <ul className="ml-6 list-disc text-gray-700 space-y-1 text-left max-w-xl">
        <li>
          <b>Programming:</b> Java, Python, C++, Go, C, Assembly, JavaScript, HTML, CSS.
        </li>
        <li>
          <b>Hardware:</b> Raspberry Pi, Arduino, PCB/ASIC prototyping, hardware-software integration.
        </li>
        <li>
          <b>UI/UX:</b> Responsive web design using modern stacks.
        </li>
      </ul>
      <p className="mt-4 text-gray-700 text-center max-w-2xl">
        <b>Notable Project:</b> Music Voting & Community Platform — full-stack app with Flask, Firebase, secure auth, real-time features, and clean interfaces.
      </p>
      <p className="mt-2 text-gray-700 text-center">
        <b>Contact:</b>{' '}
        <a
          className="text-primary underline"
          href="https://www.linkedin.com/in/ismael-mfumu-b0b27b1b5"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default About;
