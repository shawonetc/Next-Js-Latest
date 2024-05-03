"use client";

function Button() {
  console.log("hello");
  return (
    <div className="flex justify-center font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 cursor-pointer">
      <button onClick={() => alert("hi")}>hi</button>
    </div>
  );
}

export default Button;
