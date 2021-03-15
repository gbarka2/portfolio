import React from "react"
import {Link} from "react-router-dom"
import Button from "./Button"

const Nav = () => {
  return (
    <div>
      <Link to="/about">
        <Button destination="About Me" />
      </Link>
      <Link to="/projects">
        <Button destination="Projects"/>
      </Link>
    </div>
  )
}

export default Nav