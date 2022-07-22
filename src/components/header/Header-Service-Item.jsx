import React from 'react'

export default function HeaderServiceItem(props) {
  return (
    <div className='p-16 shadow-md max-h-[400px] max-w-[350px] bg-white'> 
    <h1>{props.title}</h1>
    <p>{props.desc}</p>
    <a href="">Learn More</a>
</div>
  )
}
