"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const linkStyle = (path: string) =>
    `px-4 py-2 rounded-lg transition ${pathName === path ? "text-blue-500 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"}`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:scale-105 active:scale-95"
        >
          DevPostify
        </Link>

        <div className="flex gap-2">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link href="/posts" className={linkStyle("/posts")}>
            Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
