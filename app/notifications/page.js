import { realdb } from "@/utils/firebase";
import { get, ref } from "firebase/database";
import React from "react";

export async function generateMetadata({ params }) {
  return {
    title: "fg",
  };
}
export default async function notifications() {
  const fetchedData = await (
    await get(ref(realdb, "Users/Profile/status"))
  ).val();
  console.log(fetchedData); // This will log the actual value

  const convartArray = Object.keys(fetchedData);
  const valuesArray = convartArray.map((key) => fetchedData[key]);
  console.log(valuesArray);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full md:max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-8">Notifications</h1>
        <div className="space-y-4">
          {valuesArray.map((item, id) => (
            <div key={id} className="bg-gray-200 p-4 rounded-lg">
              <p className="text-xl font-semibold">
                {item.name} - {item.title}
              </p>
              <p
                className="text-gray-700 break-words"
                dangerouslySetInnerHTML={{ __html: item.post }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
