import React from 'react'
import Special from './Special'
import greekSalad from '../greeksalad.jpg'
import bruschetta from '../bruschetta.jpg'
import lemon from '../lemon.jpg'
import Testimonial from './Testimonial'
import chef from '../images.jpeg'
import chef2 from '../chef.webp'

export default function Main() {
  return (
    <div>
        <div className='flex justify-between m-6 items-center'>
            <h2 className='ml-16 font-semibold text-4xl'>Specials</h2>
            <button className='mr-16 bg-black text-white p-3 rounded-md pl-6 pr-6'>Online Menu</button>
        </div>
        <div className='flex mx-16'>
            <Special title="Greek Salad" price="£10.00" image={greekSalad}/>
            <Special title="Bruschetta" price="£7.50" image={bruschetta}/>
            <Special title="Lemon Dessert" price="£8.00" image={lemon}/>
        </div>

        <div className='bg-black/70 text-white py-12 my-8'>
            <h2 className='font-semibold text-4xl flex justify-center my-6'>Testimonials</h2>
            <div className='flex mx-16'>
            <Testimonial star={5} name="Jane Doe">
                Fugiat labore id consequat ex. Elit ex exercitation aliqua et non in occaecat fugiat ut aliqua Lorem.
            </Testimonial>
            <Testimonial star={4} name="John Murphy">
                Fugiat labore id consequat ex. Elit ex exercitation aliqua et non in occaecat fugiat ut aliqua Lorem.
            </Testimonial>
            <Testimonial star={5} name="Rachel Smith">
                Fugiat labore id consequat ex. Elit ex exercitation aliqua et non in occaecat fugiat ut aliqua Lorem.
            </Testimonial>
            </div>
        </div>

        <div className='flex justify-center mb-10'>
        <div className='flex-col w-1/2 px-10 '>
            <div className=' my-6'>
            <h2 className='font-semibold text-4xl flex '>Little Lemon</h2>
            <p className='text-xl font-semibold'>Chicago</p>
            </div>
            <p>Cupidatat sunt cillum dolore laboris pariatur fugiat aliquip aliqua elit excepteur adipisicing labore. Commodo deserunt adipisicing ullamco deserunt aliquip enim sit qui. Aliquip dolor sunt amet elit voluptate aliqua. Labore officia cupidatat nisi in anim cillum id cupidatat laboris voluptate eu.</p>
        </div>
        <div className="relative w-72 h-72 overflow-hidden">
            <img src={chef} className="absolute w-48 h-48 object-cover z-10 top-0 left-0 border-4 border-white rounded-lg" />
            <img src={chef2} className="absolute w-48 h-48 object-cover z-20 top-20 left-28 rounded-lg"/>
        </div>
        </div>
    </div>
  )
}
