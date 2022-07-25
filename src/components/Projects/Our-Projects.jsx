import React from 'react'
import Project from './Project'

export default function OurProjects() {
  return (
    <div className='h-screen  '>
            <h1 className="text-center font-bold pt-16 pb-8 text-2xl">Our Projects</h1>
            <div className=' w-3/5 grid grid-cols-2 gap-4 m-auto bg-blue-500'>
              <Project/>
              <Project/>
              <Project/>
              <Project/>
            </div>
      <div className='py-8 text-center'>
    <button className='bg-green-500 p-2 px-8 rounded-sm text-sm text-white font-[roboto]"'>
      More projects
    </button>
      </div>
      </div>
  )
}
