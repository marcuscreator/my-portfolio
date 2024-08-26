"use client";
import React, { useState, useRef, useEffect } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const fireworksContainerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 w-full p-4 flex justify-between items-center z-10 bg-black bg-opacity-70">
      <div className="text-white text-2xl font-bold">
        <a href="#home">marcuscreator</a> {/* Optional logo or site name */}
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          ref={buttonRef}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <ul
        ref={menuRef}
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:space-x-8 text-white font-bold bg-black bg-opacity-90 lg:bg-transparent lg:static absolute top-16 left-0 w-full lg:w-auto lg:top-0 lg:left-auto p-4 lg:p-0 transition-transform duration-300 ease-in-out`}
      >
        <li className="py-2 text-center lg:py-0">
          <a href="#home" className="block hover:underline">
            Home
          </a>
        </li>
        <li className="py-2 text-center lg:py-0">
          <a href="#about" className="block hover:underline">
            About
          </a>
        </li>
        <li className="py-2 text-center lg:py-0">
          <a href="#experience" className="block hover:underline">
            Experience
          </a>
        </li>
        <li className="py-2 text-center lg:py-0">
          <a href="#education" className="block hover:underline">
            Education
          </a>
        </li>
        <li className="py-2 text-center lg:py-0">
          <a href="#projects" className="block hover:underline">
            Projects
          </a>
        </li>
        <li className="py-2 text-center lg:py-0 lg:hidden">
          <a
            href="/files/MARCUS_MACHARIA_CV.pdf"
            download
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Download Resume
          </a>
        </li>
      </ul>

      <div className="hidden lg:block">
        <a
          href="/files/MARCUS_MACHARIA_CV.pdf"
          download
          className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Download Resume
        </a>
      </div>

      {/* Container for fireworks */}
      <div
        ref={fireworksContainerRef}
        className="fixed inset-0 pointer-events-none z-50"
      ></div>
    </nav>
  );
}
