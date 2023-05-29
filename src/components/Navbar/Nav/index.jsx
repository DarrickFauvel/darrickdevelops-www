import classes from "./nav.module.css"
import NavLink from "../../shared/NavLink"

import sectionTitles from "../../shared/sectionTitles"

const Nav = () => {
  return (
    <nav className={classes.nav}>
      {sectionTitles.map((sectionTitle) => (
        <NavLink sectionTitle={sectionTitle} key={sectionTitle} />
      ))}
    </nav>
  )
}

export default Nav
