import React from 'react'

export default function cartcards() {
     const cardData = [
            {
                id: 1,
                img: "/chocolate cupcake.jpg",
                name: "chocolate cupcake",
                Price: 12000,
            },
    
            {
                id: 2,
                img: "/filet mignon.jpg",
                name: "filet mignon",
                Price: 22000,
            }
        ]
  return (
    <div>

        <div className=' w-full flex flex-col gap-5 pt-7'>

          {cardData.map((item) => (
            <div key={item.id} className=' text-gray-700 font-medium  border rounded-lg w-full p-3 border-gray-200 '>
                <div className=' flex justify-between h-[90px] items-center'>
                    <div className=' flex gap-3 h-full items-center  '>
                        <img src={item.img} alt="" className=' h-full w-[120px] object-center object-cover ' />
                        <h1 className='  '>{item.name}</h1>

                    </div>

                    <div className='font-semibold '>
                        #{item.Price}
                    </div>

                </div>

                
            </div>

          ))}
        </div>
      
    </div>
  )
}
