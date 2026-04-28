"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function AddPostForm({
  addPost,
}: {
  addPost: (formData: FormData) => Promise<void>;
}) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <form
      action={async (formData) => {
        setLoading(true);
        await addPost(formData);
        toast.success("Post added");
        setTitle("");
        setLoading(false);
      }}
      className="mb-6 flex gap-2"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        placeholder="Write something..."
        className="flex-1 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus: ring-blue-500 transition"
      />

      <button
        disabled={loading}
        className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-50 hover:scale-105 active:scale-95 transition"
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
}
