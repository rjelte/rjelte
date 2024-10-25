import { useRouter } from "next/router";

const UserDetail = () => {
  const router = useRouter();
  const { username } = router.query; // Get the username from the URL

  // Fetch user data based on username

  return (
    <div>
      <h1>User: {username}</h1>
      {/* Display the user's bio, projects, skills, and thoughts */}
    </div>
  );
};

export default UserDetail;
