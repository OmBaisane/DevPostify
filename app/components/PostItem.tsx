"use client";

import { useRouter } from "next/navigation";

export default function PostItem({
  post,
}: {
  post: { id: number; title: string };
}) {
  const router = useRouter();

  const handleDelete = async () => {
    await fetch("/api/posts", {
      method: "DELETE",
      body: JSON.stringify({ id: post.id }),
    });

    alert("Deleted");
    router.refresh();
  };

  return (
    <div className="p-4 rounded-xl flex justify-between items-center shadow bg-gray-900 hover:scale-[1.01] transition">
      <span className="text-lg">{post.title}</span>

      <button onClick={handleDelete} className="text-red-400 hover:text-red-600 transition">
        Delete
      </button>
    </div>
  );
}
