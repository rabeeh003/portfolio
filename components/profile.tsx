import React from 'react'
import { Button } from './ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import ToggleMode from './TogleMode'
import { Instagram, Github, Code2Icon, LinkedinIcon } from "lucide-react";

function Profile() {
  return (
    <div className='w-[300px] h-[95vh] rounded-md bg-primary-foreground shadow-md'>
      <ToggleMode />
      <div className="profile flex justify-center py-3">
        <img className='rounded-full w-2/4' src='https://rabeeh003.github.io/rabeeh.com/images/rabeeh.webp' alt="Profile" />
      </div>
      <h2 className='text-center font-mono text-xl'>Muhammed Rabeeh PK</h2>
      <h5 className='text-center font-mono text-gray-600'>Full-stach devloper</h5>
      <div className="social">
        <div className='flex justify-center'>
          <HoverCard>
            <HoverCardTrigger className='relative block w-[40px] h-[40px] text-center [transition:.6s] hover:translate-x-[0] hover:-translate-y-[10%]' ><a href="" className='flex justify-center pt-3'><LinkedinIcon size={20} className='text-sky-600' /></a></HoverCardTrigger>
            <HoverCardContent className='text-center'>
              <a href="" className='flex justify-center pt-3'><LinkedinIcon size={40} className='text-sky-600' /></a>
              <h2 className='text-center font-medium text-xl'>rabeeh pk</h2>
              <Button variant="outline" className='py-1'>follow</Button>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className='relative block w-[40px] h-[40px] text-center [transition:.6s] hover:translate-x-[0] hover:-translate-y-[10%]' ><a href="" className='flex justify-center pt-3'><Instagram size={20} className='text-sky-600' /></a></HoverCardTrigger>
            <HoverCardContent className='text-center'>
              <a href="" className='flex justify-center pt-3'><Instagram size={40} className='text-sky-600' /></a>
              <h2 className='text-center font-medium text-xl'>rabeeh pk</h2>
              <Button variant="outline" className='py-1'>follow</Button>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className='relative block w-[40px] h-[40px] text-center [transition:.6s] hover:translate-x-[0] hover:-translate-y-[10%]' ><a href="" className='flex justify-center pt-3'><Github size={20} className='text-sky-600' /></a></HoverCardTrigger>
            <HoverCardContent className='text-center'>
              <a href="" className='flex justify-center pt-3'><Github size={40} className='text-sky-600' /></a>
              <h2 className='text-center font-medium text-xl'>rabeeh pk</h2>
              <Button variant="outline" className='py-1'>follow</Button>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className='relative block w-[40px] h-[40px] text-center [transition:.6s] hover:translate-x-[0] hover:-translate-y-[10%]' ><a href="" className='flex justify-center pt-3'><Code2Icon size={20} className='text-sky-600' /></a></HoverCardTrigger>
            <HoverCardContent className='text-center'>
              <a href="" className='flex justify-center pt-3'><Code2Icon size={40} className='text-sky-600' /></a>
              <h2 className='text-center font-medium text-xl'>rabeeh pk</h2>
              <Button variant="outline" className='py-1'>follow</Button>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}

export default Profile