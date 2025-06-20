import React from "react";
import './index.css';


export default function Portfolio() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen">
      <header className="bg-blue-900 text-white py-8 text-center shadow-md">
        <h1 className="text-4xl font-extrabold tracking-wide">Chaitanya Digumarthi</h1>
        <div className="h-1 w-24 bg-white mx-auto mt-4 rounded"></div>
        <nav className="mt-6 space-x-6 text-lg">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <section id="about">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Career Objective</h2>
          <p className="leading-relaxed">
            Computer engineering student experienced in full-stack web development and AI/ML, with a proven
            track record of delivering quality products. Demonstrated skills in building data processing systems and
            APIs, as well as iterative product development. Seeks to leverage technical expertise and problem-solving
            abilities to enhance labeling platforms and develop innovative AI infrastructure.
          </p>
        </section>

        <section id="skills">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Languages:</strong> Java, Python, C</li>
            <li><strong>Web Development:</strong> HTML, CSS, JavaScript, Node.js, Express.js</li>
            <li><strong>Databases:</strong> MongoDB, MySQL</li>
          </ul>
        </section>

        <section id="projects">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Expenditure Calculator Web Application</h3>
              <p>
                Designed and developed a full-stack web application using React.js for the frontend and Node.js with
                Express for backend services. Integrated MongoDB and implemented RESTful APIs.
                <a href="https://github.com/chaitanya850/savingsCalculator" target="_blank" rel="noreferrer" className="text-blue-600 ml-2 underline">View Project</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Stop Watch (Frontend)</h3>
              <p>
                Developed a responsive stopwatch using HTML, CSS, JavaScript, and React.js with start, stop, reset,
                and lap functionalities.
                <a href="https://github.com/chaitanya850/Myprojects" target="_blank" rel="noreferrer" className="text-blue-600 ml-2 underline">View Project</a>
              </p>
            </div>
          </div>
        </section>

        <section id="experience">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Work Experience</h2>
          <div className="space-y-4">
            <div>
              <p><strong>Full Stack Developer Intern</strong> – ROBOXA Technologies Private Limited (Apr 2025 – Present)</p>
              <ul className="list-disc list-inside ml-4">
                <li>Collaborated on full-stack development using React.js, Node.js, and MongoDB.</li>
                <li>Contributed to frontend UI and backend API integration.</li>
              </ul>
            </div>
            <div>
              <p><strong>AI/ML Virtual Internship</strong> – Edu Skills (Sep 2023 – Nov 2023)</p>
              <ul className="list-disc list-inside ml-4">
                <li>Worked on data preprocessing, model training, and evaluation.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="certifications">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Salesforce Certified AI Associate (24-02-2025)</li>
            <li>Infosys Springboard: ReactJS (03-02-2025)</li>
            <li>NPTEL: Enhancing Soft Skills and Personality (Feb-2023)</li>
          </ul>
        </section>

        <section id="achievements">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Achievements</h2>
          <ul className="list-disc list-inside">
            <li>Solved 100+ coding problems on Codechef.</li>
            <li>Runner-up in Workshop on Student Innovation & Entrepreneurship.</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Contact</h2>
          <p>Email: <a href="mailto:chaitanyadigumarthi850@gmail.com" className="text-blue-600 underline">chaitanyadigumarthi850@gmail.com</a></p>
          <p>Phone: +91-7396236696</p>
          <p className="mt-2">
            <a href="https://www.linkedin.com/in/chaitanya-digumarthi-19b65b350/" target="_blank" rel="noreferrer" className="text-blue-600 underline">LinkedIn</a> |
            <a href="https://github.com/chaitanya850" target="_blank" rel="noreferrer" className="text-blue-600 underline">GitHub</a>
          </p>
          <p className="mt-2">
            <a href="/chaitanya-IT.pdf" download className="text-blue-600 underline">Download Resume (PDF)</a>
          </p>
        </section>
      </main>

      <footer className="bg-blue-900 text-white text-center py-4 shadow-inner">
        <p>© 2025 Chaitanya Digumarthi</p>
      </footer>
    </div>
  );
}
