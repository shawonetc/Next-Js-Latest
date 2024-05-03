import React from "react";
import Hello from "../components/hi";

export const metadata = {
  title: "Static data - know and share",
};

function page() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default page;
