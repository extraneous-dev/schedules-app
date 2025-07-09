import Link from "next/link";

export const NavBar = () => {
  return <nav className="min-h-12 bg-white w-full flex items-center p-4 text-red-500 shadow">
    <ul className="flex flex-row gap-3">
      <li className="font-bold"><Link href="/">LaBuBuDash</Link></li>
      <li><Link href="/explore">Explore</Link></li>
      <li><Link href="/account">Your Account</Link></li>
    </ul>
  </nav>;
};
