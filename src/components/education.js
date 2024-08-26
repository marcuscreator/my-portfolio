export default function Education() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            My Education Background
          </h2>
          <p className="mt-4 text-gray-300">
            Here is a summary of my educational journey, including the
            institutions I've attended, the periods of study, and the courses
            I've completed.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <a href="https://moringaschool.com/" >
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <h3 className="text-xl font-bold text-white">Moringa School</h3>
              <p className="mt-2 text-sm text-gray-300">
                Period: November 2022 - June 2023
              </p>
              <p className="mt-1 text-sm text-gray-300">
                Course: Software Engineering
              </p>
            </div>
          </a>
          <a href="https://zetech.ac.ke/" >
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <h3 className="text-xl font-bold text-white">
                Zetech University
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Period: January 2019 - November 2021
              </p>
              <p className="mt-1 text-sm text-gray-300">
                Course: Computer Science and Networking
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
