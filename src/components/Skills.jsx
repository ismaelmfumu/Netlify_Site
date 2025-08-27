import React from 'react';

function SkillBadge({ children }) {
  return (
    <span className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2">
      {children}
    </span>
  );
}

function Skills() {
  return (
    <section className="bg-white border rounded-xl shadow p-8 my-8" id="skills">
      <h2 className="text-3xl font-bold text-primary mb-6">Technical Skills</h2>

      <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
        {/* Smaller Image for Technical Skills */}
        <img
          src="photos/photosforpersonalwebsitepart2/IMG_1887.jpeg"
          alt="Technical Skills Visual"
          className="w-32 rounded-lg border-4 border-primary shadow-lg"
          style={{ maxWidth: '150px', objectFit: 'cover' }}
        />

        {/* Skill badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
          <div>
            <h4 className="font-semibold text-accent mb-3 underline">Programming Languages</h4>
            <div>
              <SkillBadge>Python</SkillBadge>
              <SkillBadge>Java</SkillBadge>
              <SkillBadge>C++</SkillBadge>
              <SkillBadge>C</SkillBadge>
              <SkillBadge>Go</SkillBadge>
              <SkillBadge>Assembly</SkillBadge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-3 underline">Web & UI</h4>
            <div>
              <SkillBadge>JavaScript</SkillBadge>
              <SkillBadge>React</SkillBadge>
              <SkillBadge>HTML</SkillBadge>
              <SkillBadge>CSS</SkillBadge>
              <SkillBadge>Flask</SkillBadge>
              <SkillBadge>Django</SkillBadge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-3 underline">Hardware & Systems</h4>
            <div>
              <SkillBadge>Raspberry Pi</SkillBadge>
              <SkillBadge>Arduino Uno/Due</SkillBadge>
              <SkillBadge>PCB Design</SkillBadge>
              <SkillBadge>ASIC Prototyping</SkillBadge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-3 underline">Cloud & Database</h4>
            <div>
              <SkillBadge>Firebase</SkillBadge>
              <SkillBadge>Firestore</SkillBadge>
              <SkillBadge>SQL</SkillBadge>
              <SkillBadge>REST API</SkillBadge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-accent mb-3 underline">Other</h4>
            <div>
              <SkillBadge>Git</SkillBadge>
              <SkillBadge>Project Management</SkillBadge>
              <SkillBadge>Version Control</SkillBadge>
              <SkillBadge>Team Collaboration</SkillBadge>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Skills with image on opposite side (image right, text left) */}
      <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col md:flex-row-reverse items-center gap-6">
        <img
          src="photos/photosforpersonalwebsitepart2/Skills1.jpeg"
          alt="Professional Skills"
          className="w-48 h-48 rounded-xl border-4 border-primary shadow-lg"
          style={{ objectFit: 'cover' }}
        />
        <ul className="list-disc list-inside text-gray-700 space-y-2 flex-1">
          <li>Sales & Customer Service</li>
          <li>Retail Operations & Merchandising</li>
          <li>Communication & Teamwork</li>
          <li>Problem Solving & Multitasking</li>
          <li>Microsoft Office, POS Systems, Social Media Engagement</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
