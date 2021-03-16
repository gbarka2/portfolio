import React from "react"
import BrandStatement from "../components/BrandStatement"
import Title from "../components/Title"
import Image from "../components/Image"
import Nav from "../components/Nav"
import "./Main.css"

const Main = (props) => {
  return (
    <div className="main-div">
      <div className="main-header">
        <Image />
        <div className="main-text">
          <Title />
          <BrandStatement />
        </div>
      </div>
      <Nav />
    </div>

  )
}

export default Main