/* eslint-disable no-undef */
import React, { useLayoutEffect, useState } from 'react'

import TaskCard from './TaskCard'

import '../../assets/card.css'
import '../../config/config'

// eslint-disable-next-line react/prop-types
const Tasks = ({ update, state }) => {
  const [tasks, setTasks] = useState()
  const [less, setLess] = useState(0)

  useLayoutEffect(() => {
    let storage
    if (state === 0) { storage = JSON.parse(localStorage.getItem(global.todosNotDone)) }
    if (state === 1) { storage = JSON.parse(localStorage.getItem(global.todosDone)) }
    if (state === -1) { storage = JSON.parse(localStorage.getItem(global.nameStorage)) }

    if (Array.isArray(storage) && storage.length !== 0) { setTasks(storage) } else setTasks(null)
  }, [update, less, state])

  // eliminates the TODO from any localstorage
  const transferTODO = (id) => {
    let nameStor
    if (state === -1) { nameStor = global.nameStorage }
    if (state === 0) { nameStor = global.todosNotDone }
    if (state === 1) { nameStor = global.todosDone }
    const todos = JSON.parse(localStorage.getItem(nameStor))

    if (Array.isArray(todos)) {
      todos.map((elem) => {
        const idElem = elem.id
        if (idElem > id) { // move elements
          todos[idElem - 1] = todos[idElem] // change position to the newest
          elem.id--
        }
      })
      todos.pop() // eliminate the last elem, that is the only copy
    }
    localStorage.setItem(nameStor, JSON.stringify(todos))
    setLess(less + 1)
  }

  return (
    <div className="tasks-container">
      {state === -1 &&
        !Array.isArray(tasks) && (
        <h1>
          Here you can add any <span className="task-txt">task</span>
        </h1>
      )}
      {state === 0 && !Array.isArray(tasks) && (
        <h1>
          No tasks has been <span className="failed-txt">failed</span>
        </h1>
      )}
      {state === 1 && !Array.isArray(tasks) && (
        <h1>
          No tasks has been <span className="acomp-txt">acomplished</span>
        </h1>
      )}
      {Array.isArray(tasks) &&
        tasks.length !== 0 &&
        tasks.map((task) => (
          <TaskCard
            transferTODO={transferTODO}
            task={task.msg}
            id={task.id}
            state={state}
            key={task.id}
          />
        ))}
    </div>
  )
}

export default Tasks
