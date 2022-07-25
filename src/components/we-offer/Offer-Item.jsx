import React from 'react'
 

export default function OfferItem(props) {
  return (
    <div className='p-10 text-center'>
        <div className='flex align-center justify-center'>{props.icon}</div>

        <h1 className='py-4 font-[roboto]'>
            {props.title}
        </h1>
        <p className='text-sm'>{props.desc}</p>
    </div>
  )
}
