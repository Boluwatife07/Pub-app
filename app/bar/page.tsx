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
import { cn } from "@/lib/utils" // optional utility for class merging if needed

const barOrders = [
  {
    table: "Table 3",
    items: "Heineken, Smirnoff Ice",
    price: "#7,500",
    notes: "Chilled",
    status: "Served",
  },
  {
    table: "Table 5",
    items: "Jack Daniels, Coke",
    price: "#18,000",
    notes: "No ice in Coke",
    status: "Pending",
  },
  {
    table: "Table 2",
    items: "Red Wine (1 bottle)",
    price: "#12,000",
    notes: "",
    status: "Served",
  },
]

const statusStyles = {
  Served: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
}

export default function BarOrdersPage() {
  return (
    <div className='bg-gray-100 p-5 min-h-screen md:p-10'>
      <div className='flex justify-between pb-10 items-center'>
        <h1 className='text-gray-700 text-2xl md:text-3xl font-semibold'>
          Bar Orders
        </h1>
        <div></div>
      </div>

      <div className="rounded-xl ">
        <Table className=' text-sm bg-white'>
          <TableCaption className='text-gray-500 pt-4'>A list of your recent bar orders.</TableCaption>
          <TableHeader>
            <TableRow className='bg-gray-50 text-gray-800 font-semibold'>
              <TableHead className="">Table Number</TableHead>
              <TableHead className="">Drinks Ordered</TableHead>
              <TableHead className="">Price</TableHead>
              <TableHead className="">Notes</TableHead>
              <TableHead className="">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {barOrders.map((order, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-white text-gray-400' : 'bg-gray-50 text-gray-400'}>
                <TableCell className="font-medium">{order.table}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>{order.notes || "-"}</TableCell>
                <TableCell>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}>
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
