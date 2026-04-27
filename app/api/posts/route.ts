import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export async function GET() {
  await connectDB();

  const posts = await Post.find();

  return Response.json({ posts });
}

export async function DELETE(req: Request) {
  await connectDB();

  const { id } = await req.json();

  await Post.findByIdAndDelete(id);

  return Response.json({ message: "Deleted" });
}
