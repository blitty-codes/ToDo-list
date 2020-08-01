/* eslint-disable prefer-const */
import React, { useState } from 'react'
import Add from './tasks/Add'
import Tasks from './tasks/Tasks'
import Options from './tasks/Options'
import Footer from './Footer'

const Container = () => {
  const [update, setUpdate] = useState(0)
  const [state, setState] = useState(-1)

  const increment = () => setUpdate(update + 1)
  const changeState = (someState) => setState(someState)

  return (
    <>
      <Add onUpdate={increment} />
      <Options stateTask={changeState} />
      <hr />
      <Tasks update={update} state={state}/>
      <Footer />
    </>
  )
}

export default Container
