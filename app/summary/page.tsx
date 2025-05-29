"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function page() {
      const router = useRouter();

  return (
    <div className="bg-white ">
      <div className=" p-6 ">
        <div onClick={() => router.back()} className="text-gray-700 text-4xl">
          <IoIosArrowRoundBack />
        </div>

        <div className=" flex flex-col gap-7 pt-5">
          <div className=" text-3xl text-gray-600 font-medium">
            {" "}
            Order Summary
          </div>

          <div className=" flex flex-col gap-4   p-5 text-gray-700">
            <div className=" flex justify-between w-full bg-white shadow-xs p-3">
              <h1>Filet Mignon</h1>
              <h1>#5000</h1>
            </div>
            <div className=" flex justify-between w-full bg-white shadow-xs p-3">
              <h1>Filet Mignon</h1>
              <h1>#5000</h1>
            </div>
          </div>

          <div className=" flex justify-between w-full  p-3 text-gray-700">
            <h1>Total</h1>
            <h1>#10000</h1>
          </div>
        </div>

        <div className=" flex  flex-col gap-10 items-center justify-end w-full">
          <div className=" flex flex-col justify-center items-center text-center w-full gap-5">
            <div className=" text-7xl text-gray-700 font-bold ">
              <CiCircleCheck />
            </div>
            <h1 className=" text-gray-500 text-3xl font-serif font-light">
              Payment Confirmed
            </h1>
            <h1 className="text-gray-700 text-lg font-medium">
              Estimated prep time 30-35mins
            </h1>
          </div>

          <div className=" text-center gap-4 items-center flex w-full flex-col">
            <h1 className="text-center text-gray-400 text-xs max-w-xs">
              if you have any questions or have any issues, please click the
              button below to silently call a waiter
            </h1>
            <Button variant={"outline"} size={"lg"}>
              Call Waiter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
