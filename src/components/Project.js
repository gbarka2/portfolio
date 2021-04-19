import React from "react"

import "./Project.css"

const Project = (props) => {
  const techs = props.project.technologies
  const url = props.project.url
  const github = props.project.github
  const heroku = props.project.heroku

  const viewWebsite = (url) => {
    window.open(url)
  }

  return (
    <div className="project-div">
      <video id="project-video" width="100%" height="100%" autoPlay muted loop>
        <source src={props.project.video} type="video/mp4">
        </source>
      </video>
      <div className="project-tech-div">
        {
          techs !== undefined ?
          techs.map((tech, index) => (
            <p key={index} className="tech-p">{tech}</p>
          ))
          : <h3>Loading...</h3>
        }
      </div>
      <div className="project-header-div">
        <h3>{props.project.name}</h3>
        <p>{props.project.date}</p>
      </div>
      <div className="project-buttons-div">
        <button onClick={() => viewWebsite(url)}>View Website</button>
        <button onClick={() => viewWebsite(github)}>View Github</button>
        {
          props.project.heroku !== "" ?
          <button onClick={() => viewWebsite(heroku)}>View Heroku</button>
          : ""
        }
      </div>
    </div>
  )
}

export default Project