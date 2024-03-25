import React from 'react'
import Image from 'next/image'
import Cutout from '../public/Images/cutout.png'
import ProjectCard from '../../components/ProjectCart'
import projectData from '../../utils/projectData';
import SideNav from '@/components/SideNav';
import Profile from '@/components/profile';
import { ScrollArea } from "@/components/ui/scroll-area"

function page() {
  return (
    <div className="flex justify-center pt-3 ">
      <SideNav/>
      <ScrollArea className='relative w-[90vh] h-[95vh] mx-3 rounded-md bg-primary-foreground shadow-md '>
        <div className='absolute w-[100%] p-2 px-6 h-[50px] bg-o backdrop-filter backdrop-blur-md border-b-2'>
          <span className='text-lg font-bold'>Projects</span>
        </div>
        <div className='p-6 mt-6 flex justify-evenly flex-wrap '>
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </ScrollArea>
      <Profile/>
    </div>
  )
}

export default page