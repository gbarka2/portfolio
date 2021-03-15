import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import {faFileAlt} from "@fortawesome/free-regular-svg-icons"
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {

  const openEmail = () => {
    window.open("mailto:gbarka2@gmail.com")
  }

  const openResume = () => {
    window.open("https://docs.google.com/document/d/1bPYce5dfWj5F_gWr1oUAH3zQufldsALexJk5lAceF3E/edit?usp=sharing")
  }

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/gary-barkauski/")
  }
  
  const openGithub = () => {
    window.open("https://github.com/gbarka2")
  }

  return (
    <div>
      <FontAwesomeIcon icon={faFileAlt} onClick={openResume}/>
      <FontAwesomeIcon icon={faLinkedinIn} onClick={openLinkedIn}/>
      <FontAwesomeIcon icon={faGithubAlt} onClick={openGithub}/>
      <FontAwesomeIcon icon={faEnvelope} onClick={openEmail}/>
    </div>
  )
}

export default Footer