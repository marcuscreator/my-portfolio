export default function About() {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl bg-gray-900 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Description of the image"
              src="/images/profile-img.png"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div class="lg:py-24">
            <h2 class="text-3xl font-bold sm:text-4xl">About Me...</h2>

            <p class="mt-4 text-white">
              Over the past three years, I've honed my skills in frontend
              development, particularly with JavaScript frameworks like Next.js
              and TypeScript. My experience includes building dynamic,
              responsive websites and applications that provide seamless user
              experiences. I take pride in writing clean, efficient code that
              not only meets design requirements but also enhances performance
              across various devices and browsers.
            </p>
            <p class="mt-4 text-white">
              On the backend, I've worked extensively with Laravel, PHP, and
              Ruby on Rails. I've developed robust APIs, managed databases, and
              implemented complex server-side logic to support a variety of web
              applications. My focus has always been on creating scalable,
              secure solutions that meet the needs of both users and
              administrators, ensuring smooth integration between the frontend
              and backend systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
