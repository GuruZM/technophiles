import React from 'react'
import {AiOutlineArrowRight} from '@react-icons/all-files/ai/AiOutlineArrowRight'

export default function HeaderServiceItem(props) {
  return (
    <div className='p-16 shadow-md max-h-[400px] mx-2 rounded-md max-w-[350px] flex flex-col items-center bg-white'> 
    <h1 className='text-center font-bold text-gray-800'>{props.title}</h1>
    <p className='text-center text-gray-600 text-sm leading-loose py-3 min-h-[140px]'>{props.desc}</p>
    <a href="" className='text-center font-bold m-auto flex items-center '>Learn More <AiOutlineArrowRight className='ml-2'/></a>
</div>
  )
}
