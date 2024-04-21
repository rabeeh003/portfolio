import React from 'react'
import { JSXSource } from 'react/jsx-dev-runtime'
import ToggleMode from './TogleMode'
import { Button } from './ui/button'
import Link from 'next/link'
import { FolderGit2, Home, UserRound } from 'lucide-react'

function SideNav(): JSX.Element {
  return (
    <div className='w-10 rounded-md bg-primary-foreground shadow-md ml-3'>
        <ToggleMode />
        <div className='mt-5 [transition:.6s] hover:translate-x-[10%] hover:font-bold hover:-translate-y-[0]'><Link href={'/'}><Home className='m-auto' /></Link></div>
        <div className='mt-5 [transition:.6s] hover:translate-x-[10%] hover:font-bold hover:-translate-y-[0]'><Link href={'/projects'}><FolderGit2 className='m-auto' /></Link></div>
        <div className='mt-5 [transition:.6s] hover:translate-x-[10%] hover:font-bold hover:-translate-y-[0]'><Link href={'/about'}><UserRound className='m-auto' /></Link></div>
    </div>
  )
}

export default SideNav