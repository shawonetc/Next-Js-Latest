"use client";
import React from "react";

function DangerouslySetInnerHtml({ post }) {
  return (
    <div>
      <p
        className="text-gray-700 break-words"
        dangerouslySetInnerHTML={{ __html: { post } }}
      ></p>
    </div>
  );
}

export default DangerouslySetInnerHtml;
