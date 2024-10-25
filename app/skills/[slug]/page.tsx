import { useRouter } from "next/router";

const SkillDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch and render details of the Skill
  return (
    <div>
      <h1>Skill Detail: {slug}</h1>
      {/* Skill details here */}
    </div>
  );
};

export default SkillDetail;
