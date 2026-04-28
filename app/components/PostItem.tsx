"use client";

import { useRouter } from "next/navigation";

export default function PostItem({
  post,
}: {
  post: { _id: number; title: string };
}) {
  const router = useRouter();

  const handleDelete = async () => {
    await fetch("/api/posts", {
      method: "DELETE",
      body: JSON.stringify({ id: post._id }),
    });

    router.refresh();
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-900/60 backdrop-blur border border-gray-700 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      <span className="text-gray-200 font-medium tracking-wide">
        {post.title}
      </span>

      <button
        onClick={handleDelete}
        className="text-sm px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
      >
        Delete
      </button>
    </div>
  );
}
