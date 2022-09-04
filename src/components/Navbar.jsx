import { useEffect, useRef } from 'react'
import { ArrowDownIcon } from '@heroicons/react/solid'
import { gsap } from 'gsap'

const Navbar = () => {
  const brandRef = useRef()
  const navRef = useRef()
  const buttonRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      brandRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.3, duration: 0.5 }
    )

    gsap.fromTo(
      navRef.current,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.3, dureation: 0.5 }
    )

    gsap.fromTo(
      buttonRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, delay: 1, duration: 0.5 }
    )
  }, [])

  return (
    <div className='container navbar-container'>
      <div className='navbar-brand'>
        <a href='#about' className='navbar-brand__link' ref={brandRef}>
          Darrick Fauvel
        </a>
      </div>

      <nav className='nav' ref={navRef}>
        <a href='#portfolio' className='nav__link'>
          Portfolio
        </a>
        <a href='#skills' className='nav__link'>
          Skills
        </a>
        <a href='#contact' className='nav__link'>
          Contact
        </a>
      </nav>

      <a href='#contact' className='nav-contact__link' ref={buttonRef}>
        <div className='nav-contact__link--text'>
          <div>Hire Me</div>
          <div>
            <ArrowDownIcon className='nav-arrow' />
          </div>
        </div>
      </a>
    </div>
  )
}

export default Navbar
