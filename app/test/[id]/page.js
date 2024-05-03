import { notFound } from "next/navigation";
import React from "react";

function page({ params }) {
  const { id } = params;
  if (id === "4") {
    notFound();
  }

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default page;
