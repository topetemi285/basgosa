import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>nav</div>
      <Link href={"/auth/signup"}>SignUp</Link>
      <Link href={"/auth/signin"}>SignIn</Link>
      <Link href={"/pages/create_invoice"}>CReate Invoice</Link>
      <Link href={"/pages/dashboard"}>
        <span>Dashboard</span>
      </Link>
      <div>footer</div>
    </div>
  );
}
