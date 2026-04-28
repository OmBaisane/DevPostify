export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">{children}</div>
    </div>
  );
}
