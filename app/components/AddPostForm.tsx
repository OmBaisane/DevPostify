"use client";

import { useState } from "react";

export default function AddPostForm({
  addPost,
}: {
  addPost: (formData: FormData) => Promise<void>;
}) {
  const [title, setTitle] = useState("");

  return (
    <form action={addPost} className="mb-4 space-y-2">
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        className="w-full p-2 rounded bg-gray-800"
      />

      <button className="px-4 py-2 cursor-pointer rounded bg-blue-500 hover:bg-blue-600">
        Add Post
      </button>
    </form>
  );
}
