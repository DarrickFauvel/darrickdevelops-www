import React from "react"

import classes from "./navlink.module.css"

const NavLink = ({ sectionTitle, setShowMenu }) => {
  const link = `#${sectionTitle}`
  const title = sectionTitle[0].toUpperCase() + sectionTitle.slice(1)

  return (
    <a
      href={link}
      className={classes.navLink}
      onClick={setShowMenu ? () => setShowMenu(false) : null}>
      {title}
    </a>
  )
}

export default NavLink
