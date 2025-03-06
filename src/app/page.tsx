import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>nav</div>
      <Link href={"/auth/signup"}>SignUp</Link>
      <Link href={"/auth/signin"}>SignIn</Link>
      <div>footer</div>
    </div>
  );
}
