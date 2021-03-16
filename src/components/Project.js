import React from "react"

import "./Project.css"

const Project = (props) => {
  const techs = props.project.technologies
  const url = props.project.url
  const github = props.project.github

  const viewWebsite = (url) => {
    window.open(url)
  }

  const viewGithub = (github) => {
    window.open(github)
  }

  return (
    <div className="project-div">
      <video id="project-video" width="640" height="480" autoPlay muted loop>
        <source src={props.project.video} type="video/mp4">
        </source>
      </video>
      <div>
        <h3>{props.project.name}</h3>
        <p>{props.project.date}</p>
      </div>
      <div>
        {
          techs !== undefined ?
          techs.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))
          : <h3>Loading...</h3>
        }
      </div>
      <div>
        <button onClick={() => viewWebsite(url)}>View Website</button>
        <button onClick={() => viewGithub(github)}>View Github</button>
      </div>
    </div>
  )
}

export default Project