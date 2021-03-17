import React from "react"
import Button from "./Button"
import "./Skills.css"

const Skills = () => {
  return (
    <ul className="skills-container">
      <p className="skills-title">Skills</p>
      <div className="skills-item-container">
        <li className="skills-item">Javascript</li>
        <li className="skills-item">React.js</li>
        <li className="skills-item">Angular.js</li>
        <li className="skills-item">Typescript</li>
        <li className="skills-item">jQuery</li>
        <li className="skills-item">Git</li>
        <li className="skills-item">Node.js</li>
        <li className="skills-item">Express.js</li>
        <li className="skills-item">MongoDB</li>
        <li className="skills-item">Ruby On Rails</li>
        <li className="skills-item">PostgresQL</li>
        <li className="skills-item">HTML / CSS</li>
      </div>
      <div className="skills-button">
        <Button destination="To Projects"/>
      </div>
    </ul>
  )
}

export default Skills