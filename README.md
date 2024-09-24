# Rick's Portfolio Website + Projects

This repository powers my personal portfolio site, where I share ongoing projects, blog posts, and experiments in software engineering, learning and development, and Generative AI.

The site was built with Next.js for the front-end, hosted on Vercel for smooth deployment, and utilizes Supabase for backend services such as database, authentication, storage, and edge functions. While this is a great starting point for a personal portfolio and blog, future updates will include additional features and projects!

## Features

- Support for both MDX and Markdown
- Optimized for SEO (sitemap, robots.txt, JSON-LD schema)
- RSS Feed for blog posts
- Dynamic OG images for improved social sharing
- Syntax highlighting for code snippets
- Tailwind CSS v4 for efficient styling
- Vercel Speed Insights and Web Analytics integration
- Clean and modern Geist font
- (Coming soon) MUI for Material UI Components

## How to Use

If you'd like to use this repository as a starting point for your own project, note that you will also need to set up **Supabase** for backend functionality. Currently, Supabase is handling the authentication, database, and storage for the site, and will become even more integral to future updates.

### Clone and Deploy

To get started:

1. Clone this repository:

```bash
git clone https://github.com/rjelte/rjelte.git
```

2. Install dependencies using your preferred package manager:

```bash
pnpm install
```

3. Run Next.js in development mode:

```
pnpm dev
```

4. Set up Supabase by following [Supabase's Quickstart Guide for NextJS](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs), to get the database and authentication features running.

More specific setup instructions for Supabase integration will follow in an upcoming blog post on the site.

### Deploy to Vercel (One hosting option)

Deploy it to the cloud with [Vercel](https://vercel.com/templates) ([Documentation](https://nextjs.org/docs/app/building-your-application/deploying)).

## Projects Coming Soon!

The current iteration of the site focuses on the blog and portfolio functionality, but future updates will include more advanced projects and showcases. Stay tuned for updates as I continue to build and add more tools for engagement and learning.