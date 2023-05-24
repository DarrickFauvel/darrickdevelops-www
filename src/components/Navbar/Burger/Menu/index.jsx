import { useRef } from "react"
import useOnClickOutside from "../../../../hooks/useOnClickOutside"
import NavLink from "../../../shared/NavLink"
import sectionTitles from "../../../shared/sectionTitles"
import Icon from "../../../shared/Icon"
import Socials from "../../../shared/Socials"

import classes from "./menu.module.css"

const Menu = ({ showMenu, setShowMenu }) => {
  const navRef = useRef()
  useOnClickOutside(navRef, () => setShowMenu(false))

  return (
    <div
      className={`${classes.menu} ${showMenu && classes.active}`}
      ref={navRef}>
      <div className={classes.close} onClick={() => setShowMenu(false)}>
        <Icon name="close" />
      </div>

      {sectionTitles.map((sectionTitle) => (
        <NavLink
          sectionTitle={sectionTitle}
          key={sectionTitle}
          setShowMenu={() => setShowMenu(false)}
        />
      ))}

      <Socials />
    </div>
  )
}

export default Menu
