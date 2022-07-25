import React from 'react'
import {GiAlarmClock} from '@react-icons/all-files/gi/GiAlarmClock'
import {FiCode} from '@react-icons/all-files/fi/FiCode'
import {HiUserGroup} from '@react-icons/all-files/hi/HiUserGroup'
import {GiBeveledStar} from '@react-icons/all-files/gi/GiBeveledStar'

export default function HeaderSection() {
  return (
    <div className='flex   items-center justify-center'>
        <div className='managmnt flex flex-col items-center justify-center p-10'>
          <GiAlarmClock size={30} color='#D7415D'/>
               <p className='text-sm font-[roboto] font-normal'>Management</p> 
        </div>
        |
        <div className='solutions managmnt flex flex-col items-center justify-center p-10'>
            <FiCode size={30} color='#D7415D'/>
            <p className='text-sm font-[roboto] font-normal'> Solutions</p>
        </div>
        |
        <div className='pros managmnt flex flex-col items-center justify-center p-10'>
            <HiUserGroup size={30} color='#D7415D' />
            <p className='text-sm font-[roboto] font-normal'>Professionals</p>
        </div>
        |
        <div className='quality managmnt flex flex-col items-center justify-center p-10'>
           <GiBeveledStar size={30} color='#D7415D' />
           <p className='text-sm font-[roboto] font-normal'>Quality</p>
        </div>

    </div>
  )
}
