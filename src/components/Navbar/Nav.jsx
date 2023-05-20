import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import NavLink from "./NavLink"

const Nav = () => {
  const navRef = useRef()
  const sectionTitles = ["portfolio", "skills", "contact"]

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.3, dureation: 0.5 }
    )
  }, [])

  return (
    <nav className="nav" ref={navRef}>
      {sectionTitles.map((sectionTitle) => (
        <NavLink sectionTitle={sectionTitle} key={sectionTitle} />
      ))}
    </nav>
  )
}

export default Nav
