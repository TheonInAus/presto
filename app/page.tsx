import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/user/signIn">
          sign in
        </Link>
      </div>
      <div>
        <Link href="/user/signUp">
          sign up
        </Link>
      </div>
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );
}
