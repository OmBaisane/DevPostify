"use client";

import { useState } from "react";

export default function AddPostForm({
  addPost,
}: {
  addPost: (formData: FormData) => Promise<void>;
}) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (formData: FormData) => {
    await addPost(formData);
    setTitle("");
  };

  return (
    <form action={handleSubmit} className="mb-4 space-y-2">
      <input
        type="text"
        placeholder="Write something..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:border-blue-500"
      />

      <button className="px-4 py-2 cursor-pointer rounded-lg bg-blue-500 hover:bg-blue-600 transition">
        Add Post
      </button>
    </form>
  );
}
