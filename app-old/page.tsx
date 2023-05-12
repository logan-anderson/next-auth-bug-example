import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <h1>Home</h1>
      <a href="/api/auth/signup">Sign up</a>
      <a href="/api/auth/signin">Sign in</a>
      <a href="/api/auth/signout">Sign out</a>
    </main>
  );
};
export default HomePage;
