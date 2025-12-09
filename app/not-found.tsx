import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 px-4 min-h-screen text-white">
      <h1 className="mb-4 font-bold text-6xl">404</h1>
      <p className="mb-6 text-xl">Oops! Page not found.</p>
      <a
        href="/"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFound;
