import Image from 'next/image'
import React from 'react'
import Cutout from '../public/Images/cutout.png'

function HomePage() {
  return (
    <div className='w-[60%] h-[95vh] ml-3 p-6 rounded-md bg-primary-foreground shadow-md'>
      {/* banner section */}
      <div className='h-[350px] relative flex justify-end align-bottom'>
        <img className='absolute right-0 opacity-10 w-[80%] h-[300px] rounded-md' src='https://media.istockphoto.com/id/476098860/vector/wonderful-morning-in-the-blue-mountains.jpg?s=612x612&w=0&k=20&c=0nuLvsWKXPReu01RvbXTKIwlUYxOQvoXD_qVBrsapxc=' alt='bgImg1' />
        <div className='absolute bottom-6 opacity-15 rounded-md right-0 h-[300px] w-[90%] bg-white border border-t-2 '></div>
        <img className='absolute bottom-0 w-[100%] h-[300px] rounded-md' src='https://media.istockphoto.com/id/476098860/vector/wonderful-morning-in-the-blue-mountains.jpg?s=612x612&w=0&k=20&c=0nuLvsWKXPReu01RvbXTKIwlUYxOQvoXD_qVBrsapxc=' alt='bgImg1' />
        <Image className='absolute bottom-0 left-0 w-[38%] rounded-md' src={Cutout} alt='bgImg1' />
        <h1 className='absolute top-0 font-semibold right-0 text-[2rem] font-mono [text-shadow:0_1px_0_rgba(255,_255,_255,_0.4)]' >Discover my Amazing Art Space!</h1>
      </div>
      {/* projects section */}
      <h3 className='text-lg font-semibold my-6'>Updates</h3>
      
    </div>
  )
}

export default HomePage