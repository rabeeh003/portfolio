import SideNav from '@/components/SideNav'
import Profile from '@/components/profile'
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from 'next/image'
import profile from "@/public/Images/rabeeh.jpeg"

function About() {
    return (
        <div className='flex justify-center pt-3'>
            <SideNav />
            <ScrollArea className='w-[90vh] h-[95vh] ml-3 p-6 pt-0 rounded-md bg-primary-foreground shadow-md mr-3'>
                {/* about section */}
                <div className='absolute w-[100%] p-2 px-6 h-[50px] bg-o backdrop-filter backdrop-blur-md border-b-2'>
                    <span className='text-lg font-bold'>About</span>
                </div>
                <div className='mt-16'>
                    <Image alt='rabeeh-pk' src={profile} className='w-[150px] object-cover h-[150px] md:w-[200px] md:h-[200px] [box-shadow:rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-full m-auto mb-4' />
                </div>
                <div className='bg-background bg-opacity-10 p-5 rounded-md'>
                    <p>Hello! I am Muhammed Rabeeh from Malappuram, Kerala. I am a full-stack developer using Python and Django, and I am proficient in MERN stack as well. I completed my secondary education from NIOS (National Institute of Open School). I pursued my graduation in BA Arabic from Calicut University, and for the previous 8 years, I studied at Islamic College named Jamia Mahiriyya, affiliated with Jamia Nooriya. Unfortunately, I didn&apos;t complete my graduation as I focused on self-learning coding during this period. After that, I joined Brocamb.</p>
                </div>
            </ScrollArea>
            <Profile />
        </div>
    )
}

export default About