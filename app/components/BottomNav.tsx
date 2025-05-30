"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaShoppingBag } from "react-icons/fa";

export default function BottomNav() {
  const router = useRouter();

  const navItems = [
    { id: "menu", label: "Menu", icon: <FaHome />, path: "/menu" },
    { id: "cart", label: "Cart", icon: <FaShoppingBag />, path: "/cart" },
  ];

  return (
    <div className=" mt-14 rounded-t-3xl">
      <div className="fixed bottom-0 left-0 right-0 bg-white text-gray-500 z-50 shadow-md">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-sm cursor-pointer"
              onClick={() => router.push(item.path)}
            >
              <div className="text-lg">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="w-1/5 h-1 mx-auto bg-black rounded-full"></div>
      </div>
    </div>
  );
}