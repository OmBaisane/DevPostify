"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PostItem({
  post,
}: {
  post: { _id: string; title: string; createdAt: string };
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(post.title);

  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch("/api/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: post._id }),
    });

    const data = await res.json();
    console.log("Delete Response: ", data);

    if (res.ok) {
      toast.success("Post deleted");
      setTimeout(() => {
        router.refresh();
      }, 100);
    } else {
      toast.error(data.error || "Delete failed");
    }
  };

  const handleUpdate = async () => {
    const res = await fetch("/api/posts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: post._id,
        title: newTitle,
      }),
    });

    const data = await res.json();
    console.log("Edit Response : ", data);

    if (res.ok) {
      toast.success("Post updated");
      setIsEditing(false);
      setTimeout(() => {
        router.refresh();
      }, 100);
    } else {
      toast.error(data.error || "Edit failed");
    }
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-900/60 backdrop-blur border border-gray-700 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
      {isEditing ? (
        <div className="flex gap-2 w-full">
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="flex-1 p-2 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            className="text-sm px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:scale-105 active:scale-95 transition"
            onClick={handleUpdate}
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <Link href={`/posts/${post._id}`}>
              <p className="text-gray-200 font-medium tracking-wide hover:underline cursor-pointer">
                {post.title}
              </p>
            </Link>
            <p className="text-xs text-gray-500">
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm px-3 py-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 hover:scale-105 active:scale-95 transition"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="text-sm px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:scale-105 active:scale-95 transition"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
