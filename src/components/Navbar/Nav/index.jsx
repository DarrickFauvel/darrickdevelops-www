import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

import classes from "./nav.module.css"
import NavLink from "../../shared/NavLink"

import sectionTitles from "../../shared/sectionTitles"

const Nav = () => {
  const navRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.3, dureation: 0.5 }
    )
  }, [])

  return (
    <nav className={classes.nav} ref={navRef}>
      {sectionTitles.map((sectionTitle) => (
        <NavLink sectionTitle={sectionTitle} key={sectionTitle} />
      ))}
    </nav>
  )
}

export default Nav
