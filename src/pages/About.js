import React from "react"
import {Link} from "react-router-dom"
import BrandStatement from "../components/BrandStatement"
import Education from "../components/Edcuation"
import Skills from "../components/Skills"
import Image from "../components/Image"
import Title from "../components/Title"
import Button from "../components/Button"
import WorkHistory from "../components/WorkHistory"

const About = () => {
  return (
    <div>
      <Link to="/">
        <Button destination="To Main"/>
      </Link>
      <Image />
      <Title />
      <BrandStatement />
      <Skills />
      <WorkHistory />
      <Education /> 
    </div>
  )
}

export default About