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
      <Image src={logo} alt='fitgreen-logo' height={42} priority={true} style={{width: '200px'}}/>
    </Link>
  </div>
  
  <div className={`menu-contents ${openMenu ? 'opened': 'closed'}`}>
    <div className="menu-items">
      <Link href={'/about-us'} className="nav-link">About Us</Link>
      <Link href={'/corporate'} className="nav-link">Corporate</Link>
      
      <div className="menu-group">
        <button className="menu-group-trigger">
          Menu <i className="ri-arrow-down-s-line dropdown-icon"></i>
        </button>
        <div className="sub-menu">
          <a href={'/curatedbowl.jpeg'} target='_blank' rel="noopener noreferrer" className="sub-menu-link">
            <span>Curated Bowls</span>
            <i className="ri-external-link-line"></i>
          </a>
          <a href={'/makeYourOwnBowl.png'} target='_blank' rel="noopener noreferrer" className="sub-menu-link">
            <span>Make Your Own Bowl</span>
            <i className="ri-external-link-line"></i>
          </a>
        </div>
      </div>
      
      <Link href={'/fitgreen-bowls'} className="nav-link">FitGreen Bowls</Link>
      <Link href={'/blogs'} className="nav-link">Blogs</Link>
      <Link href={'/contact-us'} className="nav-link">Contact Us</Link>
    </div>
    
    <Link href={'https://order.fitgreen.in/'} target='_blank' className="btn-primary nav order-now-btn">
      <span>order now</span>
      <i className="ri-arrow-right-line"></i>
    </Link>
    
  </div>
  
  <div className="hamburger-button">
    {openMenu ?        
      <i className="ri-close-line close-icon" onClick={()=>handleOpenMenu(false)}></i> :
      <i className="ri-menu-line menu-icon" onClick={()=>handleOpenMenu(true)}></i>   
    }
  </div>
</div>
  )
}
