import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export async function GET() {
  await connectDB();
  const posts = await Post.find().lean();
  const cleanPosts = posts.map((p: any) => ({
    ...p,
    _id: p._id.toString(),
  }));

  return Response.json({ posts: cleanPosts });
}

export async function DELETE(req: Request) {
  await connectDB();
  const data = await req.json();
  console.log("Body: ", data);

  const { id } = data;

  if (!id) {
    return Response.json({ error: "Invalid ID" }, { status: 404 });
  }

  await Post.findByIdAndDelete(id);
  return Response.json({ message: "Deleted" });
}

export async function PUT(req: Request) {
  await connectDB();
  const { id, title } = await req.json();

  if (!id) {
    return Response.json({ error: "Invalid Data" }, { status: 404 });
  }

  const updated = await Post.findByIdAndUpdate(id, { title }, { new: true });
  return Response.json({ message: "Updated", updated });
}
