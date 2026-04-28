import Container from "@/app/components/Container";

type Post = {
  _id: number;
  title: string;
  body: string;
};

export default async function PostDetail({ params }: any) {
  const { _id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p className="p-4">Post not found.</p>;
  }

  const post: Post = await res.json();

  return (
    <Container>
      <h1 className="text-2xl font-bold">{post.title}</h1>

      <p className="mt-2 text-gray-400">{post.body}</p>
    </Container>
  );
}
