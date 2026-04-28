import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export async function GET() {
  await connectDB();

  const posts = await Post.find();

  return Response.json({ posts });
}

export async function DELETE(req: Request) {
  await connectDB();

  const { _id } = await req.json();

  await Post.findByIdAndDelete(_id);

  return Response.json({ message: "Deleted" });
}
