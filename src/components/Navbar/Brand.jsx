import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Brand = () => {
  const brandRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      brandRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.3, duration: 0.5 }
    )
  }, [])

  return (
    <div className='navbar-brand' ref={brandRef}>
      <a href='#about' className='navbar-brand__link'>
        Darrick Fauvel
      </a>
    </div>
  )
}

export default Brand
