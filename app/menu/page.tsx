"use client";
import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosSearch } from "react-icons/io";
import Cards from "./cards";
import { useRouter } from "next/navigation";
import { MenuItem, menuItems } from "@/api/db";
import BottomNav from "../components/BottomNav";


export default function Page() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");
  const [searchItem, setSearchItem] = useState("");
  const tabs = ["All","Starters", "Main", "Dessert", "Drinks"];

  const tabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredMenu = menuItems.filter(
  (item) =>
    (activeTab === "All" || item.type?.toLowerCase() === activeTab.toLowerCase()) &&
    item.name.toLowerCase().includes(searchItem.toLowerCase())
);

  return (
    <div className="bg-gray-100">
      <div className="p-4">
        <div className="flex justify-between text-gray-700 text-xl pb-5">
          <div className="text-5xl" onClick={() => router.back()}>
            <IoIosArrowRoundBack />
          </div>
          <IoIosSearch />
        </div>

        <div className="flex flex-col gap-7">
          <h1 className="text-3xl text-gray-600">Menu</h1>

          <div className="flex items-center gap-3 border-gray-600 bg-gray-200 text-gray-500 rounded-sm w-full py-2 px-4">
            <IoIosSearch className="text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-5 text-gray-600 text-center text-xl font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => tabClick(tab)}
                className={`py-2 ${
                  activeTab === tab
                    ? "border-b-4 rounded-lg border-gray-900 text-black"
                    : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <Cards items={filteredMenu} />
          
        <BottomNav/>
        </div>
      </div>
    </div>
  );
}
