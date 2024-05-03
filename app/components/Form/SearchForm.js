"use client";
import React, { useState } from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term, like submitting it to a search API
    console.log("Search term:", searchTerm);
  };

  return (
    <div className="flex items-center">
      <div className="grow self-stretch my-auto relative">
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 border border-solid border-gray-200 rounded-2xl px-4"
              value={searchTerm}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center px-3"
            >
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.879-4.879M9 15c3.313 0 6-2.687 6-6s-2.687-6-6-6-6 2.687-6 6 2.687 6 6 6z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
