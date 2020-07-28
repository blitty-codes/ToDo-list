import React from 'react'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

import '../../assets/card.css'

// eslint-disable-next-line react/prop-types
const TaskCard = ({ task }) => {
  const prueba = () => {
    console.log('UwU')
  }

  return (
    <div className="card-container">
      <div className="task-place">
        <p>{task}</p>
      </div>
      <div className="buttons">
        <AiFillLike className="done" onClick={prueba} />
        <AiFillDislike className="delete" />
      </div>
    </div>
  )
}

export default TaskCard
