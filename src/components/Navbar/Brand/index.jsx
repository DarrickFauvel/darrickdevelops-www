import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

import classes from "./brand.module.css"

const Brand = () => {
  const brandRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      brandRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.3, duration: 0.5 }
    )
  }, [])

  return (
    <div className={classes.brand} ref={brandRef}>
      <a href="#about">Darrick Fauvel</a>
    </div>
  )
}

export default Brand
