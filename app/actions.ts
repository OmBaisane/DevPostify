"use server";

import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export async function addPost(formData: FormData) {
  await connectDB();

  const title = formData.get("title");

  if (!title) return;

  await Post.create({
    title,
  });

  console.log("Saved to DB");
}
