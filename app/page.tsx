import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {

  
  return (
    <div className=' h-screen bg-white p-5 pb-15'>
      <div className='flex justify-center items-center h-full'>
       <h1 className=' text-4xl text-gray-700'>Welcome</h1>
      </div>

      <Link className=' justify-center items-end w-full flex  ' href={'/menu'}>
        <Button variant={'outline'} size={'lg'}>Start Order</Button>


      </Link>
    </div>
  )
}
