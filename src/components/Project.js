import React from "react"

import "./Project.css"

const Project = (props) => {
  const techs = props.project.technologies
  const url = props.project.url
  const github = props.project.github
  const heroku = props.project.heroku

  // const herokuTest = () => {
  //   const herokuButton = document.getElementById("heroku")
  //   console.log(herokuButton)
  //   herokuButton.className += "hide"
  //   // if (herokuButton.className === "none") {
  //     // herokuButton.className = "heroku"
  //     console.log('this works')
  //   // }
  // }

  const viewWebsite = (url) => {
    window.open(url)
  }

  const viewGithub = (github) => {
    window.open(github)
  }

  const viewHeroku = (heroku) => {
    window.open(heroku)
  }

  return (
    <div className="project-div">
      <video id="project-video" width="100%" height="100%" autoPlay muted loop>
        <source src={props.project.video} type="video/mp4">
        </source>
      </video>
      <div className="project-header-div">
        <h3>{props.project.name}</h3>
        <p>{props.project.date}</p>
      </div>
      <div className="project-tech-div">
        {
          techs !== undefined ?
          techs.map((tech, index) => (
            <p key={index} className="tech-p">{tech}</p>
          ))
          : <h3>Loading...</h3>
        }
      </div>
      {/* <div>
        <p>{props.project.idea}</p>
        <p>{props.project.goal}</p>
        <p>{props.project.features}</p>
      </div> */}
      <div className="project-buttons-div">
        <button onClick={() => viewWebsite(url)}>View Website</button>
        <button onClick={() => viewGithub(github)}>View Github</button>
        {
          props.project.heroku !== "" ?
          <button onClick={() => viewHeroku(heroku)}>View Heroku</button>
          : ""
        }
      </div>
    </div>
  )
}

export default Project