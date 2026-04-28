import Link from "next/link";
import Container from "./components/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-center gap-6 mt-20">
        <h1 className="text-5xl font-bold tracking-tight">DevPostify</h1>

        <p className="text-gray-400 max-w-md">
          A modern platform to create, manage and explore posts with a clean and
          powerful experience.
        </p>

        <Link href="/posts">
          <button className="mt-4 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-lg hover:shadow-blue-500/30 hover:scale-105">
            Get Started
          </button>
        </Link>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-400">
          <p>Fast</p>
          <p>Secure</p>
          <p>Modern UI</p>
        </div>
      </div>
    </Container>
  );
}