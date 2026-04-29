import Container from "@/app/components/Container";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import Link from "next/link";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await connectDB();
  const post = await Post.findById(id).lean();

  if (!post)
    return (
      <Container>
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg">Post not found.</p>

          <Link
            href="/posts"
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition"
          >
            Go Back
          </Link>
        </div>
      </Container>
    );

  return (
    <Container>
      <Link
        href="/posts"
        className="text-sm text-blue-400 hover:underline mb-6 inline-block"
      >
        Back to posts
      </Link>
      <div className="bg-gray-900/60 backdrop-blur border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-3">
          {post.title}
        </h1>

        <p className="text-sm to-gray-400 mb-6">
          {new Date(post.createdAt).toLocaleString()}
        </p>

        <div className="text-gray-300 leading-relaxed space-y-3">
          <p>This is your post content area. You can expand this later with:</p>

          <ul className="list-disc ml-5 text-gray-400">
            <li>Full blog content</li>
            <li>Images</li>
            <li>Markdown support</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
