
"use client";
import { useEffect, useRef } from "react";
import styles from "./styles/Home.module.css";
import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Services from "./components/services";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './App.css';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <main className="relative flex flex-col items-center justify-between">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section id="home" className={styles.parallax}>
        <div className="flex items-center justify-center text-center text-white z-10 h-screen">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg md:text-2xl">
              Showcasing my passion for turning caffeine into code. Let's code the future
              together!
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className={`${styles.fadeInSection} w-full mt-0 bg-gray-900 text-white text-center`}
        ref={(el) => sectionsRef.current.push(el)}
      >
        <About />
      </section>

      {/* Work Experience Section */}
      <section
        id="experience"
        className={`${styles.fadeInSection} w-full bg-white text-black text-center`}
        ref={(el) => sectionsRef.current.push(el)}
      >
        <Experience />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`${styles.fadeInSection} w-full bg-white text-black text-center`}
        ref={(el) => sectionsRef.current.push(el)}
      >
        <Skills />
      </section>

      {/* Services Section */}
      <section
        id="skills"
        className={`${styles.fadeInSection} w-full bg-white text-black text-center`}
        ref={(el) => sectionsRef.current.push(el)}
      >
        <Services />
      </section>

      {/* Education Background Section */}
      <section
        id="education"
        className={`${styles.fadeInSection} w-full bg-gray-100 text-black text-center`}
        ref={(el) => sectionsRef.current.push(el)}
      >
        <Education />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`${styles.fadeInSection} w-full bg-white text-black text-center`}
        ref={(el) => sectionsRef.current.push(el)}
      >
        <Projects />
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-center text-white">
        <p>&copy; 2024 Marcus Macharia. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/marcuscreator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub className="text-2xl" /> {/* React Icons GitHub Icon */}
          </a>
          <a
            href="https://www.linkedin.com/in/marcus-macharia-905ab9225/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin className="text-2xl" />{" "}
            {/* React Icons LinkedIn Icon */}
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
