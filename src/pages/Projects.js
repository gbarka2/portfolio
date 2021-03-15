import React from "react"
import {Link} from "react-router-dom"
import Button from "../components/Button"
import Project from "../components/Project"

const Projects = () => {
  return (
    <div>
      <Project />
      <Link to="/">
        <Button destination="To Main"/>
      </Link>
    </div>
  )
}

export default Projects