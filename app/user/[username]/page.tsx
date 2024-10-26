"use client";

import { useRouter, useSearchParams } from "next/navigation";

const UserDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  // Fetch user data based on username

  return (
    <div>
      <h1>User: {username}</h1>
      {/* Display the user's bio, projects, skills, and thoughts */}
    </div>
  );
};

export default UserDetail;
