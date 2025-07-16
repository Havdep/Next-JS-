import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How I’m Using GPT to Automate My Workflow",
    date: "June 10, 2025",
    summary:
      "From PDF summaries to auto-emailing, here's how I built a productivity suite with GPT, Sheets & Python. No fluff, just real tools.",
    slug: "first",
  },
  {
    title: "Tokyo Diaries: Building Confidence Abroad",
    date: "May 28, 2025",
    summary:
      "8 months in Tokyo taught me more than any course. From solo bar nights to JLPT prep — here's how I'm levelling up.",
    slug: "second",
  },
  {
    title: "Why I’m Shifting from Dev to Branding",
    date: "April 14, 2025",
    summary:
      "Tech will always be my base, but branding? That’s the battlefield I want to dominate next.",
    slug: "third",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <Link href={`/`} className="text-blue-500 hover:underline font-semibold">
        HOME
      </Link>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-blue-400 text-center">
          Nipun's Blog
        </h1>
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition-colors p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.summary}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-500 hover:underline font-semibold"
                // replace
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
