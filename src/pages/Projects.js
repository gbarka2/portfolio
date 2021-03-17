import React from "react"
import {Link} from "react-router-dom"
import Button from "../components/Button"
import Project from "../components/Project"
import Footer from "../components/Footer"
import "./Projects.css"

const Projects = (props) => {
  console.log('props', props.projects)
  return (
    <div className="projects-div">
      <div className="projects-title-div">
        <h2>My Projects</h2>
        <Link to="/">
          <Button destination="To Main"/>
        </Link>
      </div>
      <div className="projects-container">
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
      <div className="projects-bottom-button">
        <Link to="/">
          <Button destination="To Main"/>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Projects