import React from "react"
import "./Education.css"

const Education = () => {
  return (
    <div className="education-div">Education
      <div className="education-container"> 
        <article className="education-article">
          <p className="education-content playball">General Assembly</p>
          <p className="education-content mid">December 2020 - March 2021</p>
          <p className="education-content mid">Full Stack Software Development Immersive</p>
        </article>
        <article className="education-article">
          <p className="education-content playball">University of Illinois Urbana-Champaign</p>
          <p className="education-content mid">August 2018 - May 2012</p>
          <p className="education-content mid">Bachelor of Arts - Political Science & History</p>
        </article>
      </div>
    </div>
  )
}

export default Education