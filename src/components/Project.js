import React from "react"
import "./Project.css"

const Project = (props) => {
  const techs = props.project.technologies

  return (
    <div className="project-div">
      <video id="project-video" width="640" height="480" autoPlay muted loop>
        <source src={props.project.video} type="video/mp4">
        </source>
      </video>
      <h3>{props.project.name}</h3>
      <div>
        {
          techs !== undefined ?
          techs.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))
          : <h3>Loading...</h3>
        }
      </div>
    </div>
  )
}

export default Project