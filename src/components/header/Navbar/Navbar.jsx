import React from 'react'
import { FaFacebookF } from  '@react-icons/all-files/fa/FaFacebookF'
import { FaLinkedinIn } from  '@react-icons/all-files/fa/FaLinkedinIn'
import {BiDotsHorizontalRounded} from '@react-icons/all-files/bi/BiDotsHorizontalRounded'

export default function Navbar() {
  return (
    <nav className='w-full px-20 transparent flex justify-between items-center py-6'>
        <div className='logo'>
            Technophiles
        </div>
        <ul className='links flex font-[roboto] flex-2 pl-20 items-center justify-center'>
                <li className='lnk text-sm font-medium p-5'>Company</li>
                <li className='lnk text-sm font-medium p-5'>Services</li>
                <li className='lnk text-sm font-medium p-5'>Portfolio</li>
                <li className='lnk text-sm font-medium p-5'>Careers</li>
        </ul>
        <div className='socials flex items-center space-between max-w-[300px]'>
                <FaFacebookF/>
                <FaLinkedinIn className='mx-5'/>
                <a href='123' className='bg-[#D7415D] text-white p-3 flex items-center space-between  px-10 justify-center text-center rounded-md text-xs font-[roboto]'>
                  Hire Us <BiDotsHorizontalRounded className='ml-1'/>
                  </a>
        </div>
    </nav>
  )
}
