import React from 'react'
import { JSXSource } from 'react/jsx-dev-runtime'
import ToggleMode from './TogleMode'

function SideNav(): JSX.Element {
  return (
    <div className='w-10 rounded-md bg-primary-foreground shadow-md ml-3'>
        <ToggleMode />
    </div>
  )
}

export default SideNav