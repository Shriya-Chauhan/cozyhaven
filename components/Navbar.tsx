"use client";
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { useState } from 'react';


const Navbar = () => {
   // State to manage the visibility of the menu
   const [menuOpen, setMenuOpen] = useState(false);

   // Function to toggle the menu visibility
   const toggleMenu = () => {
     setMenuOpen(!menuOpen);
   };
  return (
   <nav className=' flexBetween max-container padding-container relative z-30 py-5'>
    <Link href="/">
    <Image src="/hilink-logo.svg" alt='logo' width={74} height={29}/>
    </Link>
    
    <ul className='hidden gap-12 lg:flex'>
      
      {NAV_LINKS.map((link)=>(
        <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter
        cursor-pointer pb-1.5 transition-all hover:font-bold'>{link.label}
        </Link>
        
      ))}
    </ul>
    <div className='lg:flexCenter hidden'>
      <Button
      type="button"
      title="Book Now"
      icon="/phone-call.png"
      variant="btn_dark_green"/>

    </div>
   {/* Menu icon for mobile view */}
    <Image 
    src="menu.svg"
    alt='menu'
    width={32}
    height={32}
    className='lg:hidden inline-block cursor-pointer'
    onClick={toggleMenu}
    /> 
{/* Mobile Menu */}
{menuOpen && (
  <div className='absolute top-0 left-0 w-full h-screen bg-custom-green flex flex-col items-center justify-center lg:hidden'>
    <ul className='flex flex-col items-center gap-6'>
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className='regular-16 text-white-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' onClick={toggleMenu}>
          {link.label}
        </Link>
      ))}
    </ul>
    <Button
      type="button"
      title="Book Now"
      icon="/phone-call.png"
      variant="btn_dark_green"
      className="px-6 py-3 text-sm lg:px-4 lg:py-2 lg:text-base" // Add responsive classes for button size
    />
    {/* Close button or click outside to close */}
    <Image 
      src="/close.svg"
      alt='close'
      width={32}
      height={32}
      className='mt-8 cursor-pointer'
      onClick={toggleMenu}
    />
  </div>
)}

   </nav>
  )
}

export default Navbar
