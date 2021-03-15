import React from "react"
import BrandStatement from "../components/BrandStatement"
import Education from "../components/Edcuation"
import Skills from "../components/Skills"

const About = () => {
  return (
    <div>
      <h1>About component</h1>
      <BrandStatement />
      <Skills />
      <Education /> 
    </div>
  )
}

export default About