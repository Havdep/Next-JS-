import React from "react";

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const slug = (await params).slug;
  const val = slug.join(" / ") || "None";
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
        Docs via catch all concept
      </h1>
      <h2 className="text-2xl font-semibold mb-2">
        The slug in weblink is: {val}
      </h2>
    </>
  );
};

export default Docs;
