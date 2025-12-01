import React, { Fragment } from 'react'
import { AboutBanner } from './AboutBanner'
import { About } from './About'
import { ContactUs } from '../home/ContactUs'

const page = () => {
  return (
    <div className='about-page'>
      <AboutBanner/>
      <About/>
      <ContactUs/>
    </div>
  )
}

export default page