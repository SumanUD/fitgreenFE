"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import logo from '../../assets/fitgreen-logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {

  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(()=>{
    setOpenMenu(false)
  }, [pathname])
  const handleOpenMenu = (bol) => {
    setOpenMenu(bol)
  }  

  return (
    <div className="navigation">
        <div className="logo">
          <Link href={'/'}>
            <Image src={logo} alt='fitgreen-logo' height={42} priority={true}/>
          </Link>
        </div>
        <div className={`menu-contents ${openMenu ? 'opened': 'closed'}`}>
          <div className="menu-items">
            <Link href={'/about-us'}>About Us</Link>
            <div className="menu-group">
              <p>Menu <i className="ri-arrow-down-s-line"></i></p>
              <div className="sub-menu">
                <a href={'/curatedbowl.jpeg'} target='_blank' rel="noopener noreferrer">Curated Bowls</a>
                <a href={'/makeYourOwnBowl.png'} target='_blank' rel="noopener noreferrer">Make Your Own Bowl</a>
              </div>
            </div>
            <Link href={'/fitgreen-bowls'}>FitGreen Bowls</Link>            
            <Link href={'/contact-us'}>Contact Us</Link>
          </div>
          <Link href={'https://order.fitgreen.in/'} target='_blank' className="btn-primary nav">order now</Link>
        </div>
        <div className="hamburger-button">
          {
            openMenu ?        
            <i className="ri-close-line" onClick={()=>handleOpenMenu(false)}></i>:
            <i className="ri-menu-line" onClick={()=>handleOpenMenu(true)}></i>   
          }
        </div>
    </div>
  )
}
