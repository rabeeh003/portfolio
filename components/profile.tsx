import React from 'react'
import { Button } from './ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Instagram, Github, Code2Icon, LinkedinIcon } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

function Profile(): JSX.Element {
  return (
    <div className='w-[300px] h-[95vh] rounded-md bg-primary-foreground shadow-md pt-3 hidden lg:block max-w-[1000px]'>
      
      <div className="profile flex justify-center py-3">
        <Image width={100} height={100} className='rounded-full object-cover w-[150px] h-[150px]' src='/Images/rabeeh.jpeg' alt="Profile" />
      </div>
      <h2 className='text-center font-mono text-xl'>Muhammed Rabeeh PK</h2>
      <h5 className='text-center font-mono text-gray-600'>Full-stach devloper</h5>
      <div className="social">
        <div className='flex justify-center'>
          <HoverCard>
            <HoverCardTrigger className='relative block w-[40px] h-[40px] text-center [transition:.6s] hover:translate-x-[0] hover:-translate-y-[10%]' ><Link href="" className='flex justify-center pt-3'><LinkedinIcon size={20} className='text-sky-600' /></Link></HoverCardTrigger>
            <HoverCardContent className='text-center'>
              <Link href="" className='flex justify-center pt-3'><LinkedinIcon size={40} className='text-sky-600' /></Link>
              <h2 className='text-center font-medium text-xl'>rabeeh pk</h2>
              <Button variant="outline" className='py-1'>follow</Button>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className='relative block w-[40px] h-[40px] text-center [transition:.6s] hover:translate-x-[0] hover:-translate-y-[10%]' ><Link href="" className='flex justify-center pt-3'><Instagram size={20} className='text-sky-600' /></Link></HoverCardTrigger>
            <HoverCardContent className='text-center'>
              <Link href="" className='flex justify-center pt-3'><Instagram size={40} className='text-sky-600' /></Link>
              <h2 className='text-center font-medium text-xl'>rabeeh_pk_</h2>
              <Button variant="outline" className='py-1'>follow</Button>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className='relative block w-[40px] h-[40px] text-center [transition:.6s] hover:translate-x-[0] hover:-translate-y-[10%]' ><Link href="" className='flex justify-center pt-3'><Github size={20} className='text-sky-600' /></Link></HoverCardTrigger>
            <HoverCardContent className='text-center'>
              <Link href="" className='flex justify-center pt-3'><Github size={40} className='text-sky-600' /></Link>
              <h2 className='text-center font-medium text-xl'>rabeeh003</h2>
              <Button variant="outline" className='py-1'>follow</Button>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className='relative block w-[40px] h-[40px] text-center [transition:.6s] hover:translate-x-[0] hover:-translate-y-[10%]' ><Link href="" className='flex justify-center pt-3'><Code2Icon size={20} className='text-sky-600' /></Link></HoverCardTrigger>
            <HoverCardContent className='text-center'>
              <Link href="" className='flex justify-center pt-3'><Code2Icon size={40} className='text-sky-600' /></Link>
              <h2 className='text-center font-medium text-xl'>rabeeh-pk</h2>
              <Button variant="outline" className='py-1'>follow</Button>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}

export default Profile