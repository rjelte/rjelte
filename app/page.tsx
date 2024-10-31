import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <div className="mx-auto max-w-3xl py-24 sm:py-48 lg:py-56 px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-teal-500 sm:text-7xl">
            Level Up Your Skills and Discover New Ones!
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-200 sm:text-xl/8">
            Whether you're a coder, a carpenter, or a chef,{" "}
            <span className="bg-gradient-to-r from-teal-500 to-indigo-500 text-transparent bg-clip-text font-bold">
              Upskill University
            </span>{" "}
            is a place where you can show off your projects, share thoughts
            about your craft and spark ideas that will help you{" "}
            <span className="italic">and others</span> level up.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/blog"
              className="rounded-md bg-teal-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:ring-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Follow the Journey on our Blog
            </a>
            {/* <a
              href="#"
              className="rounded-md bg-orange-700 hover:bg-gradient-to-r hover:from-teal-500 hover:to-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:ring-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore Skills
            </a> */}
            <a
              href="#"
              className="rounded-md bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm cursor-not-allowed opacity-750"
            >
              Explore Projects and Skills <span aria-hidden="true">→</span>{" "}
              (Coming Soon)
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-indigo-800 from-1% via-teal-700 via-50% to-teal-800  to-99% flex-auto py-12 lg:py-20 rounded-xl">
        <div className="flex justify-center">
          <div className="w-64 mx-8 mb-8 lg:mb-12 lg:w-96 text-center lg:text-lg">
            <p className="text-3xl mb-4">Looking for Work!</p>
            <img
              className="md:hidden rounded-3xl mb-4"
              src="/images/rick-headshot-bw.jpeg"
              alt="A rather flattering headshot of Rick Jelte"
            />
            <p className="lg:mt-8">
              I'm a coder, a dad, an improviser, and I make a mean garlic bread.
            </p>
            <p className="mt-4">
              I have 10 years of experience creating awesome web and mobile
              experiences as a Software Engineer. I also have a passion for
              skills-based learning: I created a technologist onboarding
              program, ultimately leading a global team of 5 to onboard 1,000+
              New Hires with satisfaction scores over 95%.
            </p>
          </div>
          <div className="w-96 lg:w-96 mx-8 mb-12 hidden md:block">
            <img
              className="rounded-3xl"
              src="/images/rick-headshot-bw.jpeg"
              alt="A rather flattering headshot of Rick Jelte"
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="relative  px-3 py-1 text-sm leading-6 ring-3 hover:ring-orange-700 ring-teal-500">
            Download my latest resume{" "}
            <a
              href="/documents/Resume_RickJelte2024.pdf"
              download="Resume_RickJelte2024"
              className="font-semibold text-teal-400 hover:text-orange-600"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Here <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
