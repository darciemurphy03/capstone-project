import React from 'react'

export default function Special({title, price, image}) {
  return (
    <div className='bg-gradient-to-tl from-lime-700 to-lime-100  m-5 rounded-md shadow-md pb-4'>
        <img src={image} alt="" className='rounded-t-md w-full h-48 object-cover' />
        <div className='font-bold flex justify-between mx-2 m-3 px-3'>
            <p>{title}</p>
            <p className='text-red-900'>{price}</p>
        </div>
        <p className='m-2 px-3'>Est esse culpa nisi velit proident sit consequat velit. Eiusmod adipisicing irure pariatur sint adipisicing exercitation eu sint ea. Aliquip magna culpa laboris qui laborum ut dolor non occaecat veniam ea laborum nisi quis.</p>
        <a href="https://www.twitter.com" className='font-semibold m-2 px-3'>Order a delivery</a>
    </div>
  )
}
