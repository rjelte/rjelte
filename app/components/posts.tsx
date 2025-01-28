import Link from "next/link";
import { Card } from "app/components/card";
import { getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();
  console.log(allBlogs);
  return (
    <div className="pb-4 sm:pb-8">
      <div className="mx-auto">
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-slate-400 pt-10 sm:mt-4 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {allBlogs
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link href={`/blog/${post.slug}`}>
                <Card
                  key={post.slug}
                  title={post.metadata.title}
                  date={post.metadata.publishedAt}
                  tags={post.metadata.tags}
                  content={post.metadata.summary}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
