import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
