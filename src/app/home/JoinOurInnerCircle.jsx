import React from 'react';
import Image from 'next/image';
import banner from '@/assets/images/join-community.jpg';

export const JoinOurInnerCircle = () => {
  return (
    <section className="section5">
      <div className="container">
        <div className="stroke-title">join our inner circle</div>
        <div className="content-split">
          <div className="group1">
            <p>Be the first to taste Kolkata’s smartest bowls.</p>
          </div>
          <div className="group2">
            <h3>Sign up now and enjoy:</h3>
            <ul className="health-stats">
              <li>Exclusive launch offers</li>
              <li>Priority invites to tasting events</li>
              <li>Early access to new bowls & combos</li>
            </ul>
          </div>
        </div>
        <div className="banner-image">
          <Image src={banner} alt='people-eating-together'/>
        </div>
      </div>
    </section>
  )
}
