"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { menuItems } from "@/api/db";
import BottomNav from "@/app/components/BottomNav";

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const [menu] = useState(menuItems);

  const id = params?.id;
  const product = menu.find((item) => item.id === id);

  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const cartUpdate = () => {
     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const newItem = {
      id: product?.id,
      name: product?.name,
      price: product?.price,
      image: product?.image,
      quantity: quantity,
    };

    const itemIndex = existingCart.findIndex((item: any) => item.id === newItem.id);

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity = newItem.quantity;
    } else {
      existingCart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Cart updated!");
    console.log(existingCart)
  }

  return (
    <div className="bg-gray-100 w-full">
      <div className="p-6 w-full">
        <div onClick={() => router.back()} className="text-gray-700 text-4xl">
          <IoIosArrowRoundBack />
        </div>

        <div className="flex flex-col gap-7 pt-5">
          <div className="text-3xl text-gray-600 font-medium">
            {product?.name}
          </div>
          <img
            src={product?.image}
            alt=""
            className="h-[290px] object-center object-cover border rounded-xl shadow-sm"
          />

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium text-gray-500">
              {product?.name}
            </h1>
            <h2 className="text-gray-600 text-lg">{product?.description}</h2>
            <h2 className="text-gray-600 text-lg">#{product?.price}</h2>
          </div>
        </div>

        {!addedToCart ? (
          <div className="flex items-end justify-center pt-5 w-full">
            <Button
              size="lg"
              onClick={() => setAddedToCart(true)}
              variant="default"
            >
              Add to Cart
            </Button>
          </div>
        ) : (
          <div className="flex w-full items-center justify-between gap-4 pt-5 ">
            <div className="flex items-center gap-2 border rounded-md px-4 py-2 bg-white">
              <button
                onClick={decrement}
                className="text-2xl text-gray-700 px-2"
              >
                -
              </button>
              <span className="text-lg font-medium text-gray-500">{quantity}</span>
              <button
                onClick={increment}
                className="text-2xl text-gray-700 px-2"
              >
                +
              </button>
            </div>
            <button onClick={() => (cartUpdate())} className=" px-4 py-3 has-[>svg]:px-3 w-full rounded-lg text-sm font-medium bg-gray-700  shadow-xs hover:bg-white hover:border hover:text-black hover:border-gray-700">
              Add to Cart
            </button>
          </div>
        )}
      </div>
      
        <BottomNav/>
    </div>
  );
}
