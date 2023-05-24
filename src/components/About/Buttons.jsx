import classes from "./buttons.module.css"

const Buttons = () => {
  return (
    <div className={classes.buttons}>
      <a href="#contact" className={`${classes.button} ${classes.contact}`}>
        Work With Me
      </a>
      <a href="#portfolio" className={`${classes.button} ${classes.projects}`}>
        See My Work
      </a>
    </div>
  )
}
export default Buttons
