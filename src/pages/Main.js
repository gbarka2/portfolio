import React from "react"
import BrandStatement from "../components/BrandStatement"
import Title from "../components/Title"
import Image from "../components/Image"
import Nav from "../components/Nav"
import "./Main.css"
import Footer from "../components/Footer"

const Main = (props) => {
  return (
    <div className="main-div">
      <div className="main-header">
        <div className="main-image">
          <Image />
        </div>
        <div className="main-title">
          <Title />
        </div>
        <div className="brand-text">
          <BrandStatement />
        </div>
      </div>
      <div className="main-nav">
        <Nav />
      </div>
      <div className="main-footer-div">
        <Footer />
      </div>
    </div>

  )
}

export default Main