import React from "react"
import {Link} from "react-router-dom"
import BrandStatement from "../components/BrandStatement"
import Education from "../components/Edcuation"
import Skills from "../components/Skills"
import Image from "../components/Image"
import Title from "../components/Title"
import Button from "../components/Button"
import WorkHistory from "../components/WorkHistory"
import Footer from "../components/Footer"
import "./About.css"

const About = () => {
  return (
    <div className="about-container">
      <div className="content-container">
        <div className="about-header-container">
          <Image />
          <div id="about-title-container">
            <Title />
          </div>
          <div id="about-brand-container">
            <BrandStatement />          
            <Link to="/">
              <Button destination="To Main"/>
            </Link>
          </div>
        </div>
        <div id="about-skills-container">

          <Skills />
        </div>
        <div id="about-history-container">
          <WorkHistory />
          <Education /> 
          <Link to="/">
            <Button destination="To Main"/>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About