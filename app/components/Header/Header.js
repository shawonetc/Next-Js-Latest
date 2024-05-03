import React from "react";
import { AiOutlineHome, AiOutlineQuestion } from "react-icons/ai"; // Importing AiOutlineQuestion icon from React Icons
import Link from "next/link";
import SearchForm from "../Form/SearchForm";

function Header() {
  return (
    <div>
      <>
        <div className="bg-white shadow-md fixed w-full items-center top-0 left-0 right-0 ">
          <div className="flex justify-normal items-center max-w-5xl mx-auto px-2 py-2">
            <div className=" space-x-3 px-2 hidden md:flex">
              <div></div>
            </div>
            <div className=" justify-star space-x-3 items-center flex-grow hidden md:flex">
              <Link href="/" className="flex items-center gap-1  font-semibold">
                <AiOutlineHome /> Home
              </Link>
              <Link
                href="/interest"
                className="flex items-center gap-1  font-semibold"
              >
                Interest
              </Link>
              <Link href="" className="flex items-center gap-1 font-semibold">
                Chat
              </Link>
              <Link
                href="/notifications"
                className="flex items-center gap-1 font-semibold"
              >
                Notification
              </Link>
              <SearchForm />
              <div className="relative">
                <div className="bg-[#45B09E] text-white rounded-2xl">
                  <button className="px-3 py-1">
                    <h1>Add Your Question </h1> {/* Including the icon */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* add a mobile responsive */}
        <div className="gap-2 justify-between items-center py-2 px-2 bg-[#f1f2f2] shadow-md fixed w-full top-0 left-0 right-0 md:hidden">
          <div className="flex gap-2 justify-between items-center py-2 px-2 bg-[#45B09E] shadow-md fixed w-full top-0 left-0 right-0 md:hidden">
            <div className="flex items-center   w-full">
              <h1 className="text-white">Search</h1>
            </div>
            <div>
              <div className="flex items-center  w-full"></div>
            </div>
            <div className="flex gap-2 items-center justify-end  w-full ">
              <Link
                href="/ask"
                className="flex gap-2  justify-end   items-center text-white w-full border-gray-300"
              >
                Add
              </Link>
            </div>
          </div>

          {/* Category */}
          <div className="mt-12">
            <div className="flex justify-between gap-2 items-center">
              <Link
                href="/home"
                className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300"
              >
                <AiOutlineHome className="w-6 h-6" />
              </Link>
              <Link
                href="/chat"
                className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300"
              >
                <AiOutlineHome className="w-6 h-6" />
              </Link>
              <Link
                href="/notification"
                className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300"
              ></Link>
              <Link
                href="/interest"
                className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300"
              ></Link>
              {/* User Image */}
              <div className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300">
                <div className="bg-[#45B09E] text-white rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Header;
