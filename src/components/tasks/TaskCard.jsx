/* eslint-disable no-undef */
import React from 'react'
import { AiFillLike, AiFillDislike, AiFillDelete } from 'react-icons/ai'

import '../../assets/card.css'
import '../../config/config'

// eslint-disable-next-line react/prop-types
const TaskCard = ({ task, id }) => {
  // TODO when the task is done, eliminated or notFone, Tasks (father) has to be updated

  // eliminates the TODO from one place
  const transferTODO = () => {
    const todos = JSON.parse(localStorage.getItem(global.nameStorage))

    if (Array.isArray(todos)) {
      todos.map((elem) => {
        const idElem = elem.id
        if (idElem > id) { // move elements
          console.log(idElem)
          todos[idElem - 1] = todos[idElem] // change position to the newest
          elem.id--
        }
      })
      todos.pop() // eliminate the last elem, that is the only copy
    }
    console.log(todos)
    localStorage.setItem(global.nameStorage, JSON.stringify(todos))
  }

  const done = () => {
    let todosDone = localStorage.getItem(global.todosDone)

    transferTODO()

    if (todosDone !== null) {
      todosDone = JSON.parse(todosDone)
      todosDone.push({
        id: todosDone.length,
        msg: task
      })
    } else {
      todosDone = [
        {
          id: 0,
          msg: task
        }
      ]
    }

    localStorage.setItem(global.todosDone, JSON.stringify(todosDone))
  }

  return (
    <div className="card-container" value={id}>
      <div className="task-place">
        <p>{task}</p>
      </div>
      <div className="buttons">
        <span onClick={done} >
          <AiFillLike className="done" />
        </span>
        <AiFillDislike
          className="notDone"
          // onClick={prueba}
        />
        <AiFillDelete
          className="delete"
          // onClick={prueba}
        />
      </div>
    </div>
  )
}

export default TaskCard
