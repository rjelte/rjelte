"use client";

import { useRouter, useSearchParams } from "next/navigation";

const ProjectDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  // Fetch and render details of the project
  return (
    <div>
      <h1>Project Detail: {slug}</h1>
      <h3>Coming soon!!</h3>
      {/* Project details here */}
    </div>
  );
};

export default ProjectDetail;
