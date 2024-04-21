import Image from 'next/image'
import React from 'react'
import Cutout from '../public/Images/cutout.png'
import ProjectCard from './ProjectCart'
import projectData from '../utils/projectData';
import Link from 'next/link';
import { ScrollArea } from "@/components/ui/scroll-area"
// https://media.istockphoto.com/id/476098860/vector/wonderful-morning-in-the-blue-mountains.jpg?s=612x612&w=0&k=20&c=0nuLvsWKXPReu01RvbXTKIwlUYxOQvoXD_qVBrsapxc=
function HomePage() {
  return (
    <ScrollArea className='h-[95vh] w-[90vh] ml-3 p-6 rounded-md bg-primary-foreground shadow-md mr-3'>
      {/* banner section */}
      <div className='h-[350px] relative flex justify-end align-bottom'>
        <Image className='absolute right-0 opacity-10 w-[80%] h-[300px] rounded-md' width={100} height={100} src={"/Images/mala2.jpg"} alt='bgImg1' />  
        <div className='absolute bottom-6 opacity-15 rounded-md right-0 h-[300px] w-[90%] bg-white border border-t-2 '></div>
        <Image className='absolute bottom-0 w-[100%] h-[300px] rounded-md' width={100} height={100} src={"/Images/mala2.jpg"} alt='bgImg1' />
        <Image className='absolute bottom-0 left-0 w-[38%] rounded-md' src={Cutout} alt='bgImg1' />
        <h1 className='absolute top-0 right-4 text-[2rem] font-mono [text-shadow:0_1px_0_rgba(255,_255,_255,_0.4)] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black' >Hy, i am Rabeeh PK</h1>
      </div>
      {/* projects */}
      <div className='flex justify-between my-4 mt-4'>
        <h1 className='text-xl font-semibold'>Projects</h1>
        <Link href={'/projects'}>view all</Link>
      </div>
      <div className="snap-x hover:overflow-x-scroll">
        <div className='flex snap-start'>
          {projectData.slice(0, 3).map((project, index) => (
            <div className='flex-none mr-3' key={index} >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

export default HomePage