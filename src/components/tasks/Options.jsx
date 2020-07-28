import React from 'react'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

const Options = () => {
  return (
    <div>
      <div className="containerButtons">
        <div>
          <AiFillLike className="done" />
          <p>Done</p>
        </div>
        <div>
          <AiFillDislike className="delete" />
          <p>Deleted</p>
        </div>
      </div>
    </div>
  )
}

export default Options
