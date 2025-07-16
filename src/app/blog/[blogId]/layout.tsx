import React from "react";

const BlogIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>layout of BlogId and will be staying after this route</div>
      {children}
    </>
  );
};

export default BlogIdLayout;
