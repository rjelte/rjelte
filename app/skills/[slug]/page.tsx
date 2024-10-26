"use client";

import { useRouter, useSearchParams } from "next/navigation";

const SkillDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  // Fetch and render details of the Skill
  return (
    <div>
      <h1>Skill Detail: {slug}</h1>
      {/* Skill details here */}
    </div>
  );
};

export default SkillDetail;
