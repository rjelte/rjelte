import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

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
                <article
                  key={post.slug}
                  className="flex group max-w-xl flex-col items-start bg-slate-800 text-gray-200 p-4 sm:p-8 rounded-xl hover:bg-slate-700"
                >
                  {/* Date and Tags */}
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.metadata.publishedAt}>
                      {formatDate(post.metadata.publishedAt, false)}
                    </time>
                    <div className="flex flex-wrap gap-2">
                      {post.metadata.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="relative z-10 rounded-full bg-teal-800 px-3 py-1.5 font-medium text-gray-200 group-hover:bg-teal-700"
                        >
                          {tag}
                        </span>
                      )) ?? null}
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6">
                      <span className="absolute inset-0" />
                      {post.metadata.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6">
                      {post.metadata.summary}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
