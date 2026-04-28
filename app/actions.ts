"use server";

import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import { revalidatePath } from "next/cache";

export async function addPost(formData: FormData) {
  await connectDB();

  const title = formData.get("title")?.toString().trim();

  if (!title || title.length < 3) return;

  await Post.create({ title });

  revalidatePath("/posts");
}
