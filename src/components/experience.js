export default function Experience() {
  return (
      <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="mx-auto max-w-lg text-center">
                  <h2 className="text-3xl font-bold sm:text-4xl">My Work Experience</h2>
                  <p className="mt-4 text-gray-300">
                      Over the past three years, I have gained valuable experience working with various technologies
                      and contributing to different projects. Here’s a snapshot of my professional journey across
                      several companies.
                  </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                  <a
                      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="https://yflab.org/"
                  >
                      <h3 className="text-xl font-bold text-white">Youth Future Lab(YFL)</h3>
                      <p className="mt-2 text-sm text-gray-300">Role: ICT Assistant Intern</p>
                      <p className="mt-4 text-sm text-gray-300">
                          Developed and maintained responsive user interfaces using Next.js and TypeScript, ensuring
                          seamless user experiences across different devices and browsers.
                      </p>
                  </a>

                  <a
                      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="https://www.codekazi.org/"
                  >
                      <h3 className="text-xl font-bold text-white">Code Kazi</h3>
                      <p className="mt-2 text-sm text-gray-300">Role: Junior Developer Intern</p>
                      <p className="mt-4 text-sm text-gray-300">
                          Built and managed RESTful APIs using Laravel and PHP, optimized database interactions, and
                          ensured secure and scalable backend services.
                      </p>
                  </a>

                  <a
                      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="https://utalii.ac.ke/"
                  >
                      <h3 className="text-xl font-bold text-white">Kenya Utalii College</h3>
                      <p className="mt-2 text-sm text-gray-300">Role: ICT Intern</p>
                      <p className="mt-4 text-sm text-gray-300">
                          Collaborated on both frontend and backend tasks, utilizing Ruby on Rails for server-side
                          functionality and JavaScript frameworks for dynamic user interfaces.
                      </p>
                  </a>

                  <a
                      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="#"
                  >
                      <h3 className="text-xl font-bold text-white">Codex Technologies</h3>
                      <p className="mt-2 text-sm text-gray-300">Role: Web Developer</p>
                      <p className="mt-4 text-sm text-gray-300">
                          Worked on various web projects, focused on improving site performance, debugging, and
                          implementing features with Laravel and frontend technologies.
                      </p>
                  </a>
              </div>

             
          </div>
      </section>
  );
}
