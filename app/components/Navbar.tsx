"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const linkClass = (path: string) =>
    pathName === path ? "text-yellow-400 font-bold" : "text-white";

  return (
    <nav className="p-4 bg-gray-900 flex gap-6">
      <Link href="/" className={linkClass("/")}>
        Home
      </Link>
      <Link href="/posts" className={linkClass("/posts")}>
        Posts
      </Link>
    </nav>
  );
}
