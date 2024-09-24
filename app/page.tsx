import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Welcome to my personal portfolio site! This website is much more than a simple blog or a static landing page. It’s a place where I’ll be sharing my ongoing projects, tech-related discoveries, and ideas that excite me in the world of software engineering, learning and development, and Generative AI.`}
      </p>
      <p className="mb-4">
        {`Unlike typical blog platforms, I built this site myself using cutting-edge tools like Next.js for the front-end, hosted on Vercel for smooth deployment. I'm using Supabase to handle my database, authentication, storage, and edge functions.`}
      </p>
      <p className="mb-4">
        {`I'm constantly building and evolving this site, and aim to publish a new blog post at least once every week.`}
      </p>
      <div className="bg-teal-100 border border-teal-400 text-teal-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Looking For Work!</strong>
        <span className="block sm:inline"> Due to a reduction in force at my previous company, I'm actively searching for a new opportunity. Please check out <a
            className="font-bold underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/rjelte/"
          >
            LinkedIN
          </a> for my latest resume!</span>
      </div>

      <h2 className="mt-8 mb-4 text-xl font-semibold tracking-tighter">
        {`Follow the adventure here:`}
      </h2>
      <div className="mb-8">
        <BlogPosts />
      </div>
    </section>
  )
}
