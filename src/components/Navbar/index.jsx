import { useRef } from 'react'
import Brand from './Brand'
import Nav from './Nav'
import Button from './Button'

const Navbar = () => {
  const buttonRef = useRef()

  return (
    <div className='container navbar-container'>
      <Brand />

      <Nav />

      <Button />
    </div>
  )
}

export default Navbar
