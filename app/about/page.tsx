import SideNav from '@/components/SideNav'
import Profile from '@/components/profile'
import React from 'react'

function About() {
    return (
        <div className='flex justify-center pt-3'>
            <SideNav/>
            <div className='w-[90vh] h-[95vh] ml-3 p-6 rounded-md bg-primary-foreground shadow-md mr-3'>
                {/* about section */}
                <h3 className='text-lg font-semibold my-6'>About</h3>
                <div className='bg-background bg-opacity-10 p-5 rounded-md'>
                    <p>Hello! I am Muhammed Rabeeh from Malappuram, Kerala. I am a full-stack developer using Python and Django, and I am proficient in MERN stack as well. I completed my secondary education from NIOS (National Institute of Open School). I pursued my graduation in BA Arabic from Calicut University, and for the previous 8 years, I studied at Islamic College named Jamia Mahiriyya, affiliated with Jamia Nooriya. Unfortunately, I didn't complete my graduation as I focused on self-learning coding during this period. After that, I joined Brocamb.</p>
                </div>
            </div>
            <Profile/>
        </div>
    )
}

export default About