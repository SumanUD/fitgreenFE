import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import facebook from '../assets/icons/facebook.webp';
import instagram from '../assets/icons/instagram.webp';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="socials">
          <Link href={''}>
            <Image src={facebook} alt='facebook-icon'/>            
          </Link>
          <Link href={''}>
            <Image src={instagram} alt='instagram-icon'/>
          </Link>
        </div>
        <p>© Copyright FitGreen 2025</p>
      </div>
    </footer>
  )
}
