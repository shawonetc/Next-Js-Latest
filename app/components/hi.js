import React from "react";
import blogData from "@/lib/data";

// either Static metadata

export default async function Hello({ params }) {
  const blog = await blogData();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold flex min-h-screen flex-col items-center justify-center p-24">
        {blog.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </h1>
    </div>
  );
}
