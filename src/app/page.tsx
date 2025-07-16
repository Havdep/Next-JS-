import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-400">
                Next.js Learning
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Routing
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to Next.js Routing
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover the power of file-based routing in Next.js. Build dynamic,
            fast, and scalable web applications with ease.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Next.js Routing Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">
                File-based Routing
              </h4>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pages
                are automatically routed based on file names in the pages
                directory.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 className="text-xl font-semibold mb-4 text-purple-400">
                Dynamic Routes
              </h4>
              <p className="text-gray-300">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Create dynamic pages using bracket notation like
                [id].js.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 className="text-xl font-semibold mb-4 text-green-400">
                API Routes
              </h4>
              <p className="text-gray-300">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                Build API endpoints directly in your Next.js application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Understanding Next.js Routing System
          </h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Next.js uses a file-system based router built on the concept of
              pages. When a file is added to the pages directory, it's
              automatically available as a route.
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. The pages can be React
              components exported from .js, .jsx, .ts, or .tsx files in the
              pages directory. Each page is associated with a route based on its
              file name.
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Dynamic routing is
              achieved by adding brackets to a page name. For example,
              pages/posts/[id].js matches /posts/1, /posts/abc, etc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
