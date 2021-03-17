import React from "react"
import "./Button.css"

const Button = (props) => {
  return (
    <button className="routing-button">{props.destination}</button>
  )
}

export default Button