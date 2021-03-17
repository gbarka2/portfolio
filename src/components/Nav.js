import React from "react"
import {Link} from "react-router-dom"
import Button from "./Button"
import "./Nav.css"

const Nav = () => {
  return (
    <div className="nav-div">
      <Link to="/about">
        <Button destination="About Me" />
      </Link>
      <Link to="/projects">
        <Button destination="Projects" />
      </Link>
    </div>
  )
}

export default Nav