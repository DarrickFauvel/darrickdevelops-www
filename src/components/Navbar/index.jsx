import { useState } from "react"
import useToggle from "../../hooks/useToggle"

import Brand from "./Brand"
import Nav from "./Nav"
import Socials from "../../components/shared/Socials"
import Burger from "./Burger"

import classes from "./navbar.module.css"
import Menu from "./Burger/Menu"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isShowMenu, setIsShowMenu] = useToggle(showMenu)

  return (
    <div className={classes.container}>
      <Brand />
      <Nav />
      <div className={classes.socials}>
        <Socials />
      </div>

      <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default Navbar
