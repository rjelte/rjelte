import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="text-gray-200 flex-auto mx-auto lg:w-3/4 min-w-0 mt-6 flex flex-col">
      <h1 className="font-semibold text-4xl sm:text-5xl mb-4 tracking-tighter">
        From the Blog
      </h1>
      <p className="text-lg leading-8">
        Explore the latest thoughts, insights, and tutorials.
      </p>
      <BlogPosts />
    </section>
  );
}
