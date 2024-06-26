import React from "react";
export const metadata = {
  title: "Jefred - know and share",
  description: "Generated by create next app",
};
export default async function Home() {
  const fatchdata = await fetch("https://jsonplaceholder.typicode.com/todos/");
  console.log(fatchdata);
  const todo = await fatchdata.json();
  return (
    <div>
      <div className="text-3xl font-bold flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold flex min-h-screen flex-col items-center justify-center p-24">
          {todo[2].title}
        </h1>
      </div>
    </div>
  );
}
