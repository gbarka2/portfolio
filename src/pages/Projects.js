import React from "react"
import {Link} from "react-router-dom"
import Button from "../components/Button"
import Project from "../components/Project"

const Projects = (props) => {
  console.log('props', props.projects)
  return (
    <div>
      <h3>My Projects</h3>
      <Link to="/">
        <Button destination="To Main"/>
      </Link>
      {
        props.projects !== undefined ?
        props.projects.map((project, index) => (
          <Project 
            key={index}
            project={project}
          />
        ))
        : <h3>Loading...</h3>
      }
    </div>
  )
}

export default Projects