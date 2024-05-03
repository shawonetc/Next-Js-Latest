import React from "react";
import Link from "next/link";
const blog = [
  {
    id: 1,
    name: "hello",
  },
  {
    id: 2,
    name: "hello",
  },
  {
    id: 3,
    name: "hello",
  },
];
function page() {
  console.log("hello");
  return (
    <div>
      <Link href={"/test/test3"} style={{ color: "red" }}>
        <p>hello</p>
      </Link>
      {blog.map((item) => (
        <div key={item.id}>
          <Link href={`/test/${item.id}`}>
            <h1>{item.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default page;
