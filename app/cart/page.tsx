"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Cartcards from "./cartcards";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
      const router = useRouter();

  const [activeTab, setActiveTab] = useState("Tip");
  const tips = ["10%", "15%", "20%", "25%"];
  return (
    <div className="bg-gray-100 ">
      <div className=" p-6 ">
        <div onClick={() => router.back()} className="text-gray-700 text-4xl">
          <IoIosArrowRoundBack />
        </div>
        <div className=" text-4xl text-gray-600 font-medium pt-7"> Cart</div>
        <div>
          <Cartcards />
        </div>

        <div className=" flex flex-col gap-7 pt-7">
          <h1 className="text-3xl text-gray-700 font-medium">Tip</h1>
          <div className="grid grid-cols-4 gap-5 ">
            {tips.map((tip) => (
              <button
                key={tip}
                onClick={() => setActiveTab(tip)}
                className={` text-gray-700 bg-gray-300 py-2  rounded-lg text-center text-xl font-medium  ${
                  activeTab === tip ? "  bg-gray-900 text-white" : ""
                }`}
              >
                {tip}
              </button>
            ))}
          </div>
        </div>

        <div className=" pt-14 flex flex-col gap-5">
          <div className=" flex justify-between text-gray-700 font-medium">
            <h1>Subtotal</h1>
            <h1>#34,000</h1>
          </div>

          <Link className=" flex justify-center" href={"/summary"}>
            <Button variant={"default"} size={"lg"}>
              {" "}
              Proceed to Order
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
