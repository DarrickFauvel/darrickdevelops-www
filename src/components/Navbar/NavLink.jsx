import React from 'react'

const NavLink = ({ sectionTitle }) => {
  const link = `#${sectionTitle}`
  const title = sectionTitle[0].toUpperCase() + sectionTitle.slice(1)

  return (
    <a href={link} className='nav__link'>
      {title}
    </a>
  )
}

export default NavLink
