import React from "react";

const ReviewID = async ({
  params,
}: {
  params: Promise<{ blogId: string; reviewId: string }>;
}) => {
  const urlParams = await params;
  console.log(urlParams);
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-blue-100 text-center py-6">
        This is blog {urlParams.blogId} and review number is{" "}
        {urlParams.reviewId}
      </h1>
    </>
  );
};

export default ReviewID;
