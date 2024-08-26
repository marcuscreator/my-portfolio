import React from "react";
import {
  FaReact,
  FaLaravel,
  FaDatabase,
  FaGem,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">My Skills</h2>
          <p className="mt-4 text-gray-300">
            Here are some of the technologies I've worked with over the years.
          </p>
        </div>

        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center animate-marquee">
            <div>
              <FaReact
                size={60}
                className="text-blue-500 hover:text-blue-300 transition-transform transform hover:scale-110"
              />
            </div>
            <div>
              <FaLaravel
                size={60}
                className="text-red-500 hover:text-red-300 transition-transform transform hover:scale-110"
              />
            </div>
            <div>
              <SiMysql
                size={60}
                className="text-yellow-500 hover:text-yellow-300 transition-transform transform hover:scale-110"
              />
            </div>
            <div>
              <FaGem
                size={60}
                className="text-pink-500 hover:text-pink-300 transition-transform transform hover:scale-110"
              />
            </div>
            <div>
              <FaDatabase
                size={60}
                className="text-green-500 hover:text-green-300 transition-transform transform hover:scale-110"
              />
            </div>
            <div>
              <SiPostgresql
                size={60}
                className="text-blue-400 hover:text-blue-300 transition-transform transform hover:scale-110"
              />
            </div>
            <div>
              <SiTypescript
                size={60}
                className="text-blue-600 hover:text-blue-400 transition-transform transform hover:scale-110"
              />
            </div>
            <div>
              <SiNextdotjs
                size={60}
                className="text-gray-100 hover:text-gray-400 transition-transform transform hover:scale-110"
              />
            </div>
            <div>
              <SiTailwindcss
                size={60}
                className="text-teal-500 hover:text-teal-300 transition-transform transform hover:scale-110"
              />
            </div>
            <div>
              <FaNodeJs
                size={60}
                className="text-green-500 hover:text-green-300 transition-transform transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
