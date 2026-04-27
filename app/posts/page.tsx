import { addPost } from "../actions";
import AddPostForm from "../components/AddPostForm";
import Container from "../components/Container";
import PostItem from "../components/PostItem";

type Post = {
  id: number;
  title: string;
};

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts: Post[] = await res.json();

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
            .map((post) => <PostItem key={post.id} post={post} />)
        )}
      </div>
    </Container>
  );
}
