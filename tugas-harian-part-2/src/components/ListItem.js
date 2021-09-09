import React from 'react'
import "./styles/ListItem.css"

function ListItem(props) {
  let {label} = props

  return (
    <label className="litem">
      <input type="checkbox"></input>
      <span className="checkmark"></span>
      <span>{label}</span>
    </label>
  )
}

export default ListItem
