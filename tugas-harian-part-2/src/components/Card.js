import React from 'react'
import './styles/Card.css'

function Card(props) {
  return (
    <div className="card">
      {props.children.map((child, i) => {
        return <div className="child-container" key={i}>{child}</div>
      })}
    </div>
  )
}

export default Card
