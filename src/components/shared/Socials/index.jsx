import classes from "./socials.module.css"

const Socials = () => {
  return (
    <div className={classes.container}>
      <a
        className={classes.link}
        href="https://www.linkedin.com/in/DarrickFauvel"
        target="_blank"
        rel="noopener noreferrer"
        title="Find me on LinkedIn">
        <i className="fa-brands fa-linkedin fa-xl"></i>
      </a>

      <a
        className={classes.link}
        href="https://github.com/DarrickFauvel"
        target="_blank"
        rel="noopener noreferrer"
        title="See me on GitHub">
        <i className="fa-brands fa-github fa-xl"></i>
      </a>
    </div>
  )
}

export default Socials
