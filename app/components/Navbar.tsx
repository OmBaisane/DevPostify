"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}
