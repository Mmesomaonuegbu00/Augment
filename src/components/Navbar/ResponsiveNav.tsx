'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

const [isMobile, setIsMobile] = useState(false);

const handleToggle = () => {
  setIsMobile(!isMobile);
}


  return (
    <div>
      <Nav  openNav={handleToggle}/>
      {isMobile&&  <MobileNav isMobile={isMobile} closeNav={handleToggle} />}
     
    </div>
  )
}

export default ResponsiveNav
