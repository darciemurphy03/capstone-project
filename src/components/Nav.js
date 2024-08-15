import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='flex justify-between items-center bg-white'>
        <div className='flex items-center'><img src={logo} alt="logo" className='h-20 p-1 pl-12 pr-7 '/>
        <h1 className='font-marker text-3xl text-green-800'>Little Lemon</h1></div>
        <ul className='flex'>
        <li className='mr-4'>
            <Link to="/" >Home</Link>
        </li>
        <li className='mr-4'>
          <a href="#">About</a>
        </li>
        <li className='mr-4'>
          <a href="#">Menu</a>
        </li>
        <li className='mr-4'>
        <Link to="/booking-page" >Reservations</Link>
        </li>
        <li className='mr-4'>
          <a href="#">Order Online</a>
        </li>
        <li className='mr-8'>
          <a href="#">Login</a>
        </li>
      </ul>

    </div>
  )
}
