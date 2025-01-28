import Link from "next/link";
import { Card } from "app/components/card";
import { getProjects } from "app/projects/utils";

const ProjectsList = () => {
  // Fetch and render list of projects
  let projects = getProjects();
  console.log(projects);

  return (
    <section className="text-gray-200 flex-auto mx-auto lg:w-3/4 min-w-0 mt-6 flex flex-col border-b border-slate-400">
      <h1 className="font-semibold text-4xl sm:text-5xl mb-4 tracking-tighter">
        Projects
      </h1>
      <p className="text-lg leading-8 mb-4">
        See cool things built by our awesome creators & learn the skills used to
        build it!
      </p>
      <div className="pb-4 sm:pb-8">
        <div className="mx-auto">
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-slate-400 pt-10 sm:mt-4 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <Link href={`/projects/${project.slug}`}>
                <Card
                  key={project.slug}
                  title={project.title}
                  date={project.date}
                  tags={project.skills}
                  content={project.summary}
                  imageUrl={project.imageUrl}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
