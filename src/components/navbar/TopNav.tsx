import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'
import { GiMatchTip } from 'react-icons/gi'
import NavLink from './NavLink'

export default function TopNav() {
  return (
    <Navbar
      maxWidth='xl'
      className='bg-gradient-to-r from-purple-400 to-purple-700'
      classNames={{
        item: [
          'text-xl',
          'text-white',
          'uppercase',
          'data-[active=true]:text-yellow-200',
        ]
      }}
    >
      <NavbarBrand as={Link} href='/'>
        <GiMatchTip size={40} className='text-gray-200' />
        <div className='font-bold text-3xl flex'>
          <span className='text-gray-900'>Next</span>
          <span className='text-gray-200'>Match</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavLink href='/members' label='Matches' />
        <NavLink href='/lists' label='Lists' />
        <NavLink href='/messages' label='Messages' />

        {/* <NavbarItem as={Link} href='/members' isActive>Matches</NavbarItem>
        <NavbarItem as={Link} href='/lists'>Lists</NavbarItem>
        <NavbarItem as={Link} href='/messages'>Messages</NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button variant='bordered' className='text-white' as={Link} href='/login'>Login</Button>
        <Button variant='bordered' className='text-white' as={Link} href='/register'>Register</Button>
      </NavbarContent>
    </Navbar>
  )
}
