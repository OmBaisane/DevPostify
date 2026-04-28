import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import Container from "../components/Container";
import AddPostForm from "../components/AddPostForm";
import { addPost } from "../actions";
import PostItem from "../components/PostItem";

export default async function PostsPage() {
  await connectDB();

  const rawPosts = await Post.find().lean();

  const posts = rawPosts.map((post: any) => ({
    ...post,
    _id: post._id.toString(),
  }));

  return (
    <Container>
      <h1 className="text-4xl font-semibold mb-8 tracking-tight">All Posts</h1>
      <p className="text-sm text-gray-400 mb-4">{posts.length} posts</p>

      <AddPostForm addPost={addPost} />

      <div className="space-y-3">
        {posts.length === 0 ? (
          <div className="text-center text-gray-500 mt-16">
            <p className="text-2xl mb-2">😴</p>
            <p>No posts yet</p>
            <p className="text-sm">Start by adding something cool 🚀</p>
          </div>
        ) : (
          posts.map((post: any) => (
            <PostItem key={post._id.toString()} post={post} />
          ))
        )}
      </div>
    </Container>
  );
}
