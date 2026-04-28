import { addPost } from "../actions";
import AddPostForm from "../components/AddPostForm";
import Container from "../components/Container";
import PostItem from "../components/PostItem";

type Post = {
  _id: number;
  title: string;
};

export default async function PostsPage() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  const posts: Post[] = data.posts;

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>

      <AddPostForm addPost={addPost} />

      <div className="space-y-3">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No posts yet. <br /> Start adding something cool.
          </p>
        ) : (
          posts
            .slice(0, 10)
            .map((post) => <PostItem key={post._id} post={post} />)
        )}
      </div>
    </Container>
  );
}
