import { useRouter } from "next/router";

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch and render details of the project
  return (
    <div>
      <h1>Project Detail: {slug}</h1>
      {/* Project details here */}
    </div>
  );
};

export default ProjectDetail;
