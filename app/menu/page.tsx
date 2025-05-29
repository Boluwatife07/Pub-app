"use client";
import React from "react";
import { IoIosArrowRoundBack, IoIosSearch } from "react-icons/io";
import Cards from "./cards";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("Starters");
  const tabs = ["Starters", "Main", "Deserts", "Drinks"];

  return (
    <div className=" bg-gray-100">
      <div className=" p-4">
        <div className=" justify-between flex text-gray-700 text-xl pb-5">
          <div className="text-5xl" onClick={() => router.back()}><IoIosArrowRoundBack /></div>
          <IoIosSearch />
        </div>

        <div className=" flex flex-col gap-7">
          <h1 className=" text-3xl text-gray-600 ">Menu</h1>
          <div className="flex items-center gap-3  border-gray-600 bg-gray-200 text-gray-500 rounded-sm w-full py-2 px-4">
            <IoIosSearch className="text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none "
            />
          </div>
          <div className="grid grid-cols-4  text-gray-600 text-center text-xl font-medium ">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 ${
                  activeTab === tab
                    ? "border-b-4 rounded-lg  border-gray-900 text-black"
                    : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <Cards />
        </div>
      </div>
    </div>
  );
}
