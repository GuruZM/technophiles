import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full px-20 bg-gray-700 flex justify-between items-center py-6'>
        <div className='logo'>
            Logo
        </div>
        <ul className='links flex'>
                <li className='lnk p-5'>Company</li>
                <li className='lnk p-5'>Services</li>
                <li className='lnk p-5'>Portfolio</li>
                <li className='lnk p-5'>Careers</li>
        </ul>
        <div className='socials'>
                
        </div>
    </nav>
  )
}
