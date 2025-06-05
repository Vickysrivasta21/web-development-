import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src="src/components/react-logo@3x.svg" alt="" />
      </div>
    </div>
  )
}

export default Card
