import React, { useState } from 'react'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

import '../../assets/options.css'

const Options = () => {
  const [ShadowOutDone, setShadowOutDone] = useState(true)
  const [ShadowOutNotDone, setShadowOutNotDone] = useState(true)

  return (
    <div className="container-buttons">
      <button
        className={`button-done ${ShadowOutDone ? 'shadowOut' : 'shadowIn donePress'}`}
        onClick={() => {
          setShadowOutDone(!ShadowOutDone)
          if (!ShadowOutNotDone) setShadowOutNotDone(!ShadowOutNotDone)
        }}
      >
        <AiFillLike className={`option sizeIcons ${ShadowOutDone ? 'done' : 'donePress'}`} />
        <p className={`option ${ShadowOutDone ? 'txt' : 'donePress'}`}>Done</p>
      </button>
      <button
        className={`button-notDone ${ShadowOutNotDone ? 'shadowOut' : 'shadowIn'}`}
        onClick={() => {
          setShadowOutNotDone(!ShadowOutNotDone)
          if (!ShadowOutDone) setShadowOutDone(!ShadowOutDone)
        }}
      >
        <AiFillDislike className={`option sizeIcons ${ShadowOutNotDone ? 'notDone' : 'delPress'}`} />
        <p className={`option ${ShadowOutNotDone ? 'txt' : 'delPress'}`}>Not Done</p>
      </button>
    </div>
  )
}

export default Options
