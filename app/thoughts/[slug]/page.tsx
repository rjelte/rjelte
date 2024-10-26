"use client";

import { useRouter, useSearchParams } from "next/navigation";

const ThoughtDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  // Fetch and render details of the Thought
  return (
    <div>
      <h1>Thought Detail: {slug}</h1>
      {/* Thought details here */}
    </div>
  );
};

export default ThoughtDetail;
