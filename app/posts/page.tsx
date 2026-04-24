import Link from "next/link";
import AddPostForm from "../components/AddPostForm";
import Container from "../components/Container";

type Post = {
  id: number;
  title: string;
};

async function addPost(formData: FormData) {
  "use server";

  const title = formData.get("title");

  console.log("New Post : ", title);
}

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts: Post[] = await res.json();

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>

      <AddPostForm addPost={addPost} />

      <div className="space-y-3">
        {posts.slice(0, 10).map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="block p-4 rounded bg-gray-800 hover:bg-gray-700"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </Container>
  );
}
