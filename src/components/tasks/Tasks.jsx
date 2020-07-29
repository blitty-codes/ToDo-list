import React, { useEffect, useState } from 'react'

import TaskCard from './TaskCard'

import '../../assets/card.css'
import '../../config/config'

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
    const storage = JSON.parse(localStorage.getItem(global.nameStorage))
    if (storage !== null && storage !== undefined && storage.length !== 0) { setTasks(storage) }
    // console.log(tasks, storage);
  }, [update])

  return (
    <div className="tasks-container">
      {tasks !== null && tasks.map((task) => (
        <TaskCard
          task={task.msg}
          id={task.id}
          key={task.id}
        />
      ))}
    </div>
  )
}

export default Tasks
