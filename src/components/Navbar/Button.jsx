import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDownIcon } from '@heroicons/react/solid'

const Button = () => {
  const buttonRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, delay: 1, duration: 0.5 }
    )
  }, [])

  return (
    <a href='#contact' className='nav-contact__link' ref={buttonRef}>
      <div className='nav-contact__link--text'>
        <div>Hire Me</div>
        <div>
          <ArrowDownIcon className='nav-arrow' />
        </div>
      </div>
    </a>
  )
}

export default Button
