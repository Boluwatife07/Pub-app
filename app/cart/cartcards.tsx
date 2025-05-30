"use client";

import React, { useEffect, useState } from "react";

export default function cartcards({cart} :any) {
 

  return (
    <div>
      {cart && (
        <div className="  w-full flex flex-col justify-evenly gap-5 pt-7">
          {cart.map((item: any) => (
            <div
              key={item?.id}
              className=" text-gray-700 font-medium  border rounded-lg w-full p-3 border-gray-200 "
            >
              <div className=" flex justify-between items-center h-[90px] ">
                <div className=" flex gap-3 h-full items-center  ">
                  <img
                    src={item?.image}
                    alt=""
                    className=" h-full w-[100px] rounded-lg object-center object-cover "
                  />
                  <h1 className="  ">{item?.name}</h1>
                </div>

                <div className="font-semibold ">#{item?.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
