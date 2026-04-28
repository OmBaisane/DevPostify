import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import Container from "../components/Container";
import AddPostForm from "../components/AddPostForm";
import { addPost } from "../actions";
import PostItem from "../components/PostItem";

export default async function PostsPage() {
  await connectDB();

  const posts = await Post.find().lean();

  return (
    <Container>
      <h1 className="text-4xl font-semibold mb-8 tracking-tight">All Posts</h1>

      <AddPostForm addPost={addPost} />

      <div className="space-y-3">
        {posts.length === 0 ? (
          <p className="text-center mt-10 text-gray-500">
            No posts yet <br /> Start adding something cool.
          </p>
        ) : (
          posts.map((post: any) => (
            <PostItem key={post._id.toString()} post={post} />
          ))
        )}
      </div>
    </Container>
  );
}
