import React from "react"
import "./WorkHistory.css"

const WorkHistory = () => {
  return (
    <div className="history-div playball">Experience
      <ul className="history-ul">
        <li className="montserrat">General Assembly</li>
        <li className="montserrat">Full Stack Software Developer</li>
        <li className="small">December 2020 - March 2021</li>
        <li className="small">Denver, Colorado</li>
        <hr></hr>
        <li className="montserrat first mid">Completed 12 week immersive program preparing myself for a full-stack web development career.</li>
        <li className="montserrat mid">Development skills gained include React.js, Angular.js, Typescript, Ruby On Rails, Node.js, Git, among others.</li>
      </ul>
      <ul className="history-ul playball">
        <li className="montserrat">Flight Centre</li>
        <li className="montserrat">Technical Business Analyst</li>
        <li className="small">August 2018 - March 2020</li>
        <li className="small">Denver, Colorado</li>
        <hr></hr>
        <li className="montserrat first mid">Developed and maintained corporate relationships regarding technical products used by employees</li>
        <li className="montserrat mid">Independently researched, implemented, and delivered new technology (Booking Builder) to improve training program and support front-line employees</li>
      </ul>
      <ul className="history-ul">
        <li className="montserrat">FCM Travel Solutions</li>
        <li className="montserrat">Team Leader</li>
        <li className="small">March 2015 - August 2018</li>
        <li className="small">Chicago, Illinois & Denver, Colorado</li>
        <hr></hr>
        <li className="montserrat first mid">Managed business related travel for multinational corporations with travel expenses in excess of $1 million annually</li>
        <li className="montserrat mid">Oversaw in-office operations such as training new employees, launching new accounts, managing existing accounts, and following “one best way” policy in addition to daily duties</li>
      </ul>
      <ul className="history-ul">
        <li className="montserrat">Liberty Travel</li>
        <li className="montserrat">Luxury Travel Consultant</li>
        <li className="small">August 2013 - March 2015</li>
        <li className="small">Chicago, Illinois</li>
        <hr></hr>
        <li className="montserrat first mid">Established rapport with clients and customized vacation packages to suit their individual needs while travelling</li>
        <li className="montserrat mid">Utilized multiple combinations of technologies to ensure the best value for my clients</li>
      </ul>
    </div>
  )
}

export default WorkHistory