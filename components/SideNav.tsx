import React from 'react'
import { JSXSource } from 'react/jsx-dev-runtime'
import ToggleMode from './TogleMode'
import { Button } from './ui/button'
import Link from 'next/link'

function SideNav(): JSX.Element {
  return (
    <div className='w-10 rounded-md bg-primary-foreground shadow-md ml-3'>
        <ToggleMode />
        <div className='mt-10 rotate-[90deg] [transition:.6s] hover:translate-x-[10%] hover:font-bold hover:-translate-y-[0]'><Link href={'/'}>Home</Link></div>
        <div className='mt-16 rotate-[90deg] [transition:.6s] hover:translate-x-[10%] hover:font-bold hover:-translate-y-[0]'><Link href={'/about'}>About</Link></div>
    </div>
  )
}

export default SideNav