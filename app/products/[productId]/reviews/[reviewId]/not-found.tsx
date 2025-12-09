"use client";
import { usePathname } from "next/navigation";
function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 px-4 min-h-screen">
      <h1 className="mb-4 font-bold text-red-600 text-6xl">404</h1>
      <p className="mb-6 text-white text-xl">Oops! Review for not found.</p>
      <a
        href="/"
        className="hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white transition"
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFound;
