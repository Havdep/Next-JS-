import React from "react";

const ReviewWithBlogId = async ({
  params,
}: {
  params: Promise<{ params: { blogId: string } }>;
}) => {
  const urlParams = await params;
  console.log(urlParams);
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-blue-100 text-center py-6">
        {/* This is blog {urlParams.blogId} of a review */}
        This is blog of a review
      </h1>
    </>
  );
};

export default ReviewWithBlogId;
