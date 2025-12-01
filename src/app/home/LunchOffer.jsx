import React from 'react';
import banner from '@/assets/images/20off.png';
import Image from 'next/image';
import Link from 'next/link';
export const LunchOffer = () => {
  return (
    <section className="container section1">
      <h3 className="stroke-title">Launch Offer</h3>
      <div className="banner">
        <Link href={'https://order.fitgreen.in/'} target='_blank'>
          <Image src={banner} alt="" />
        </Link>
      </div>
    </section>
  )
}
