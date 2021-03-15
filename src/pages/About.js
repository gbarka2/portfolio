import React from "react"
import BrandStatement from "../components/BrandStatement"
import Education from "../components/Edcuation"
import Skills from "../components/Skills"
import Image from "../components/Image"

const About = () => {
  return (
    <div>
      <h1>About component</h1>
      <Image />
      <BrandStatement />
      <Skills />
      <Education /> 
    </div>
  )
}

export default About