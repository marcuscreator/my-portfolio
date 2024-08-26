import React from "react";

const projects = [
  {
    title: "My Portfolio",
    description: "Get to know more about the developer .",
    imageUrl: "/images/projects/project-1.png", // Updated path
    link: "https://my-portfolio-bice-theta.vercel.app/",
  },
  {
    title: "Eunikim Academy",
    description:
      "Get reliable information about the school straight from the management .",
    imageUrl: "/images/projects/project-2.png", // Updated path
    link: "https://github.com/marcuscreator/Eunikim-Academy",
  },
  {
    title: "Beats by Kobby",
    description:
      "Buy beats with ease produced by the best upcoming music creative genius.",
    imageUrl: "/images/projects/project-3.png", // Updated path
    link: "https://github.com/marcuscreator/kobby",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">My Projects</h2>

          <p className="mt-4 text-gray-300">
            Here are some of the projects I've worked on.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <h2 className="mt-4 text-xl font-bold text-white">
                {project.title}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
