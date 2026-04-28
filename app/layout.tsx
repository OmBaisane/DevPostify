import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
