import Navbar from "../Navbar"

import classes from "./header.module.css"

const Header = () => {
  return (
    <header className={classes.header}>
      <Navbar />
    </header>
  )
}

export default Header
