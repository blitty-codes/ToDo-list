import React, { useEffect, useState } from 'react'

import TaskCard from './TaskCard'

import '../assets/card.css'
import '../config/config'

// eslint-disable-next-line react/prop-types
const Tasks = ({ update }) => {
  const tasksP = [
    {
      id: 0,
      msg: 'You can add any task'
    },
    {
      id: 1,
      msg: 'This tasks will disapear'
    }
  ]
  const [tasks, setTasks] = useState(tasksP)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let storage = localStorage.getItem(global.nameStorage)
    storage = JSON.parse(storage)

    if (storage !== null && storage !== undefined) { setTasks(storage) }
  }, [update])

  return (
    <div className="tasks-container">
      {tasks !== undefined && tasks.map((task) => (
        <TaskCard
          task={task.msg}
          key={task.id}
        />
      ))}
    </div>
  )
}

export default Tasks
