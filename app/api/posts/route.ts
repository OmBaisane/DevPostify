import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export async function GET() {
  await connectDB();

  const posts = await Post.find();

  return Response.json({ posts });
}
