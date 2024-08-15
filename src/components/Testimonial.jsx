import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faStar } from '@fortawesome/free-solid-svg-icons';


export default function Testimonial({name, star, children}) {
  return (
    <div className='bg-slate-500 m-2 p-3 rounded-md shadow-lg'>
        <div className='my-4 flex justify-center '>
        {[...Array(star)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500 mr-1 size-6" />
        ))}
        </div>
        <div  className='flex items-center justify-between mr-6 mb-7'>
        <FontAwesomeIcon icon={faCircleUser} className="text-white text-4xl" />
        <p className='font-semibold'>{name}</p>
        </div>
        {children}
    </div>
  )
}
