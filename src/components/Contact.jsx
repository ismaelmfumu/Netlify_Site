import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section className="bg-white border rounded-xl shadow p-8 my-8" id="contact">
      <h2 className="text-3xl font-bold text-primary mb-6">Contact</h2>
      <p className="text-gray-700 mb-6">
        I’m open to collaboration and new opportunities. Feel free to reach out!
      </p>
      <ul className="space-y-4 text-gray-700 text-lg">
        <li className="flex items-center space-x-3">
          <FaEnvelope className="text-primary" />
          <a href="mailto:mfumui395@gmail.com" className="hover:underline">
            mfumui395@gmail.com
          </a>
        </li>
        <li className="flex items-center space-x-3">
          <FaLinkedin className="text-primary" />
          <a
            href="https://www.linkedin.com/in/ismael-mfumu-b0b27b1b5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
