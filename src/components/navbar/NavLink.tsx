'use client';

import { NavbarItem } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavLinkProps = {
  href: string
  label: string
}

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <NavbarItem as={Link} href={href} isActive={pathname === href}>{label}</NavbarItem>
  )
}
