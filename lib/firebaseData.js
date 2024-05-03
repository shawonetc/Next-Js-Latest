import { realdb } from "@/utils/firebase";
import { get, ref } from "firebase/database";
import React from "react";

export default async function firebaseData() {
  const fetchedData = await (
    await get(ref(realdb, "Users/Profile/status"))
  ).val();
  // console.log(fetchedData); // This will log the actual value

  const convartArray = Object.keys(fetchedData);
  const valuesArray = convartArray.map((key) => fetchedData[key]);
  // console.log(valuesArray);
}
