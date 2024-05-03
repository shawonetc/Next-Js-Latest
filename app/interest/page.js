import { realdb } from "@/utils/firebase";
import { get, ref } from "firebase/database";
import Image from "next/image";
import React from "react";

export default async function page() {
  const fetchedData = await (
    await get(ref(realdb, "Users/Profile/status"))
  ).val();
  console.log(fetchedData); // This will log the actual value

  const convartArray = Object.keys(fetchedData);
  const valuesArray = convartArray.map((key) => fetchedData[key]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
      {valuesArray.map((item, id) => (
        <div key={id} className="max-w-xs rounded overflow-hidden shadow-lg">
          <div className="relative h-64">
            <img
              src={item.image}
              alt="dfd"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.name}</div>
            <p className="text-gray-700 text-base mb-2">{item.title}</p>
            <p className="text-gray-700 text-base mb-2">{item.post}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.uniqueId}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.uid}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
