import React from "react"
import {Link} from "react-router-dom"
import BrandStatement from "../components/BrandStatement"
import Education from "../components/Edcuation"
import Skills from "../components/Skills"
import Image from "../components/Image"
import Button from "../components/Button"

const About = () => {
  return (
    <div>
      <h1>About component</h1>
      <Link to="/">
        <Button destination="To Main"/>
      </Link>
      <Image />
      <BrandStatement />
      <Skills />
      <Education /> 
    </div>
  )
}

export default About