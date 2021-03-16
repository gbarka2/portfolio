import React from "react"
import "./Project.css"

const Project = (props) => {
  console.log(props.project)
  return (
    <div>
      <video id="project-video" width="640" height="480" autoPlay muted>
        <source src={props.project.video} type="video/mp4">
        </source>
      </video>
      <h1>{props.project.name}</h1>
    </div>
  )
}

export default Project