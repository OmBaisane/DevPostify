"use client";

import { useState } from "react";

export default function AddPostForm({
  addPost,
}: {
  addPost: (formData: FormData) => Promise<void>;
}) {
  const [loading, setLoading] = useState(false);

  return (
    <form
      action={async (formData) => {
        setLoading(true);
        await addPost(formData);
        setLoading(false);
      }}
      className="mb-6 flex gap-2"
    >
      <input type="text" name="title" placeholder="Write something..." className="flex-1 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus: ring-blue-500 transition"/>

      <button
        disabled={loading}
        className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-50 transition"
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
}
