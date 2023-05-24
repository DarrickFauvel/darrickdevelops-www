import Icon from "../../shared/Icon"
import classes from "./burger.module.css"

const Burger = ({ showMenu, setShowMenu }) => {
  // if (showMenu) {
  //   return (
  //     <span
  //       className={classes.burger}
  //       onClick={() => setShowMenu((prevState) => !prevState)}>
  //       <Icon name="close" />
  //     </span>
  //   )
  // }
  return (
    <span
      className={classes.burger}
      onClick={() => setShowMenu((prevState) => !prevState)}>
      <Icon name="bars" />
    </span>
  )
}

export default Burger
