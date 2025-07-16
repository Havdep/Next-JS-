import React from "react";

const BlogId = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const id = (await params).blogId;
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Blog Id is :</h1>
      <p className="text-xl text-blue-400">{id}</p>
    </div>
  );
};

export default BlogId;
