import React from 'react'
import ListItem from './ListItem'
import "./styles/List.css"

function List(props) {
  let {items} = props 

  return (
    <div className="list">
      {items.map((item, i) =>{
        return <div className="litems" key={item.id}><ListItem label={item.label} id={item.id} /></div>
      })}      
    </div>
  )
}

export default List
