import React from 'react'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <div className="bg-black/30 text-black p-4 mt-auto">
            <div className='flex justify-between '>
                <img src={logo} alt="logo" className='h-32 p-1 pl-12 pr-6' />
                <ul className='flex-col'>
                    <p className='font-bold'>Doormat Navigation</p>
                    <li className=''>
                        <a href="#">Home</a>
                    </li>
                    <li className=''>
                        <a href="#">About</a>
                    </li>
                    <li className=''>
                        <a href="#">Menu</a>
                    </li>
                    <li className=''>
                        <a href="#">Reservations</a>
                    </li>
                    <li className=''>
                        <a href="#">Order Online</a>
                    </li>
                    <li className=''>
                        <a href="#">Login</a>
                    </li>
                </ul>
                <ul>
                    <p className='font-bold'>Contact</p>
                    <li>Address: 1 Lemon Lane, L Street</li>
                    <li>Tel: 123 456 789</li>
                    <li>Email: littlelemon@admin.org</li>
                </ul>
                <ul className='pr-6'>
                    <p className='font-bold pb-4'>Social Media Links</p>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='pr-5'>
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='pr-5'>
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='pr-5'>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </ul>
            </div>
        </div>
    )
}
