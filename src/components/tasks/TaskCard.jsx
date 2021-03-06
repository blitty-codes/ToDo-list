/* eslint-disable no-undef */
import React from 'react'
import { AiFillLike, AiFillDislike, AiFillDelete } from 'react-icons/ai'
import { FaRecycle } from 'react-icons/fa'

import '../../assets/card.css'
import '../../config/config'

// eslint-disable-next-line react/prop-types
const TaskCard = ({ task, id, transferTODO, state }) => {
  // state is a property that has 3 states:
  //  -1 is the abstract state, where the task is not done but maybe it is been doing
  //  0 the task is not done
  //  1 the task is done
  // we want to have these states to know when we want to display the tasks done
  // that the only have the delete button, the tasks that has not been done, they
  // have the button done and delete and the abstract state to show the tasks that
  // the person tries to achive

  const taskDone = () => {
    let todosDone = JSON.parse(localStorage.getItem(global.todosDone))

    if (state !== 1) {
      transferTODO(id)
      if (todosDone !== null) {
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
  }
  const taskNotDone = () => {
    let todosNotDone = JSON.parse(localStorage.getItem(global.todosNotDone))

    if (state !== 0) {
      transferTODO(id)
      if (todosNotDone !== null) {
        todosNotDone.push({
          id: todosNotDone.length,
          msg: task
        })
      } else {
        todosNotDone = [
          {
            id: 0,
            msg: task
          }
        ]
      }

      localStorage.setItem(global.todosNotDone, JSON.stringify(todosNotDone))
    }
  }
  const recycleTask = () => {
    let todos = JSON.parse(localStorage.getItem(global.nameStorage))

    if (state !== -1) {
      transferTODO(id)
      if (todos !== null) {
        todos.push({
          id: todos.length,
          msg: task
        })
      } else {
        todos = [
          {
            id: 0,
            msg: task
          }
        ]
      }

      localStorage.setItem(global.nameStorage, JSON.stringify(todos))
    }
  }

  const eliminateTask = () => {
    transferTODO(id)
  }

  return (
    <div className="card-container" value={id}>
      <div className="task-place">
        <p>{task}</p>
      </div>
      <div className="buttons">
        {state !== 1 && (
          <span onClick={taskDone}>
            <abbr title="Done">
              <AiFillLike
                className={`${state === 1 ? 'doneTask' : 'done'}`}
              />
            </abbr>
          </span>
        )}
        {state !== 0 && (
          <span onClick={taskNotDone}>
            <abbr title="Not done">
              <AiFillDislike
                className={`${state === 0 ? 'notDoneTask' : 'notDone'}`}
              />
            </abbr>
          </span>
        )}
        {state !== -1 && (
          <span onClick={recycleTask}>
            <abbr title="Recycle">
              <FaRecycle
                className="recycle"
              />
            </abbr>
          </span>
        )}
        <span onClick={eliminateTask}>
          <abbr title="Eliminate">
            <AiFillDelete
              className="delete"
            />
          </abbr>
        </span>
      </div>
    </div>
  )
}

export default TaskCard
