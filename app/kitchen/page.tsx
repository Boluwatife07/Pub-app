import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

const kitchenOrders = [
  {
    table: "Table 1",
    items: "Rice, Beans, Turkey",
    price: "#20,000",
    notes: "",
    status: "Served",
  },
  {
    table: "Table 4",
    items: "Jollof Rice, Plantain, Chicken",
    price: "#15,000",
    notes: "Extra spicy",
    status: "Pending",
  },
  {
    table: "Table 6",
    items: "Yam Porridge, Fish",
    price: "#12,000",
    notes: "Less oil",
    status: "Pending",
  },
]

const statusStyles = {
  Served: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
}

export default function KitchenOrdersPage() {
  return (
    <div className='bg-gray-100 p-5 min-h-screen md:p-10'>
      <div className='flex justify-between pb-10 items-center'>
        <h1 className='text-gray-700 text-2xl md:text-3xl font-semibold'>
          Kitchen Orders
        </h1>
        <div></div>
      </div>

      <div className="rounded-xl">
        <Table className='text-sm bg-white'>
          <TableCaption className='text-gray-500 pt-4'>
            A list of your recent kitchen orders.
          </TableCaption>
          <TableHeader>
            <TableRow className='bg-gray-50 text-gray-800 font-semibold'>
              <TableHead>Table Number</TableHead>
              <TableHead>Food Ordered</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {kitchenOrders.map((order, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? 'bg-white text-gray-400' : 'bg-gray-50 text-gray-400'}
              >
                <TableCell className="font-medium">{order.table}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>{order.notes || "-"}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      statusStyles[order.status]
                    )}
                  >
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
