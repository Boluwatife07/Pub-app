"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function page() {
      const router = useRouter();

  return (
    <div className="bg-gray-100 ">
      <div className=" p-6 ">
        <div onClick={() => router.back()} className="text-gray-700 text-4xl">
          <IoIosArrowRoundBack />
        </div>

        <div className=" flex flex-col gap-7 pt-5">
          <div className=" text-3xl text-gray-600 font-medium">
            {" "}
            Filet Mignon
          </div>
          <img
            src="/filet mignon.jpg"
            alt=""
            className=" h-[290px] object-center object-cover border rounded-xl shadow-sm"
          />

          <div className=" flex flex-col gap-4">
            <h1 className=" text-2xl font-medium text-gray-500">
              Filet Mignon
            </h1>
            <h2 className="text-gray-600 text-lg">
              Tender cut of beef, perfectly seared and seasoned.
            </h2>
            <h2 className="text-gray-600 text-lg">#12,000</h2>
          </div>
        </div>

        <Link className=" flex items-end justify-center pt-5 w-full" href={""}>
          <Button size={"lg"} variant={"default"}>
            Add to Cart
          </Button>
        </Link>
      </div>
    </div>
  );
}
