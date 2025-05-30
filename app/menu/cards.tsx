import { MenuItem } from "@/api/db";
import Link from "next/link";
import React from "react";


export default function Cards({ items }: { items: MenuItem[] }) {
  return (
    <div className=" grid grid-cols-2 gap-5 md:grid-cols-4">
      {items.map((item) => (
        <Link href={`/single_product/${item.id}`}
          key={item.id}
          className="bg-white cursor-pointer rounded-lg p-3 h-[250px] flex flex-col gap-2 text-gray-600"
        >
          <img
            src={item.image}
            alt=""
            className=" h-[50%] object-center object-cover rounded-t-xl"
          />
          <h1 className=" font-serif font-medium text-lg">{item.name}</h1>
          <h1 className="font-serif font-medium text-lg">#{item.price}</h1>
        </Link>
      ))}
    </div>
  );
}
