/* eslint-disable no-undef */
import React, { useRef } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import '../assets/add.css'
import '../config/config'

// eslint-disable-next-line react/prop-types
const Add = ({ onUpdate }) => {
  const taskRef = useRef()

  const isEmpty = str => !str.trim().length

  const addTODO = () => {
    const todo = taskRef.current.value
    if (!isEmpty(todo)) {
      let todos = localStorage.getItem(global.nameStorage)

      if (todos !== null) {
        todos = JSON.parse(todos)
        todos.push({
          id: todos.length,
          msg: todo
        })
      } else {
        todos = [
          {
            id: 0,
            msg: todo
          }
        ]
      }

      console.log(todos)

      localStorage.setItem(global.nameStorage, JSON.stringify(todos))

      onUpdate()
      // blanck after adding a task
      taskRef.current.value = ''
    }
  }

  return (
    <div className="container">
      <input
        ref={taskRef}
        className="addTask"
        type="search"
        placeholder="Add a task"
      />
      <button className="addToList" onClick={addTODO}>
        <IconContext.Provider value={{ className: 'addIcon' }}>
          <AiOutlinePlusCircle />
        </IconContext.Provider>
      </button>
    </div>
  )
}

export default Add
