import React, { useState } from 'react'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

import '../../assets/options.css'

// eslint-disable-next-line react/prop-types
const Options = ({ stateTask }) => {
  const [ShadowOutDone, setShadowOutDone] = useState(true)
  const [ShadowOutNotDone, setShadowOutNotDone] = useState(true)

  const handleStateDone = () => {
    setShadowOutDone(!ShadowOutDone)
    if (!ShadowOutNotDone) setShadowOutNotDone(!ShadowOutNotDone)
    // if it is pressed then the task is 1
    if (ShadowOutDone) stateTask(1)
    else stateTask(-1)
  }
  const handleStateNotDone = () => {
    setShadowOutNotDone(!ShadowOutNotDone)
    if (!ShadowOutDone) setShadowOutDone(!ShadowOutDone)
    if (ShadowOutNotDone) stateTask(0)
    else stateTask(-1)
  }

  return (
    <div className="container-buttons">
      <button
        className={`button-done ${ShadowOutDone ? 'shadowOut' : 'shadowIn donePress'}`}
        onClick={handleStateDone}
      >
        <AiFillLike className={`option sizeIcons ${ShadowOutDone ? 'done' : 'donePress'}`} />
        <p className={`option ${ShadowOutDone ? 'txt' : 'donePress'}`}>Done</p>
      </button>
      <button
        className={`button-notDone ${ShadowOutNotDone ? 'shadowOut' : 'shadowIn'}`}
        onClick={handleStateNotDone}
      >
        <AiFillDislike className={`option sizeIcons ${ShadowOutNotDone ? 'notDone' : 'delPress'}`} />
        <p className={`option ${ShadowOutNotDone ? 'txt' : 'delPress'}`}>Not Done</p>
      </button>
    </div>
  )
}

export default Options
