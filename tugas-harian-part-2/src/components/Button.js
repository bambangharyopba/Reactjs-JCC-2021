import React from 'react'
import "./styles/Button.css"

function Button(props) {
  var {label} = props

  return (
    <div className="button">
      <p>{label}</p>
    </div>
  )
}

export default Button
