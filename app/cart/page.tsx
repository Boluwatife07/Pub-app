"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Cartcards from "./cartcards";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BottomNav from "../components/BottomNav";

export default function Page() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [activeTab, setActiveTab] = useState("10%");
  const tips = ["10%", "15%", "20%", "25%"];

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    const total = storedCart.reduce((acc: number, item: any) => {
      return acc + (item.price || 0) * (item.quantity || 1);
    }, 0);
    setSubtotal(total);
  }, []);

  const tipPercentage = parseFloat(activeTab.replace("%", ""));
  const tipAmount = Math.round((tipPercentage / 100) * subtotal);
  const totalAmount = subtotal + tipAmount;

  return (
    <div className="bg-gray-100 min-h-full">
      <div className="p-6">
        <div onClick={() => router.back()} className="text-gray-700 text-4xl cursor-pointer">
          <IoIosArrowRoundBack />
        </div>

        <div className="text-4xl text-gray-600 font-medium pt-7">Cart</div>

        <div>
          <Cartcards cart={cart} />
        </div>

        <div className="flex flex-col gap-7 pt-7">
          <h1 className="text-3xl text-gray-700 font-medium">Tip</h1>
          <div className="grid grid-cols-4 gap-5">
            {tips.map((tip) => (
              <button
                key={tip}
                onClick={() => setActiveTab(tip)}
                className={`text-gray-700 bg-gray-300 py-2 rounded-lg text-center text-xl font-medium ${
                  activeTab === tip ? "bg-gray-900 text-white" : ""
                }`}
              >
                {tip}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-14 flex flex-col gap-5">
          <div className="flex justify-between text-gray-700 font-medium">
            <h1>Subtotal</h1>
            <h1>#{subtotal.toLocaleString()}</h1>
          </div>
          <div className="flex justify-between text-gray-700 font-medium">
            <h1>Tip ({activeTab})</h1>
            <h1>#{tipAmount.toLocaleString()}</h1>
          </div>
          <div className="flex justify-between text-gray-700 font-medium">
            <h1>Total</h1>
            <h1>#{totalAmount.toLocaleString()}</h1>
          </div>
          <Link className="flex justify-center" href="/summary">
            <Button variant="default" size="lg">
              Proceed to Payment
            </Button>
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
