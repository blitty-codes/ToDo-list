/* eslint-disable prefer-const */
import React, { useState } from 'react'
import Error from './Error'

const Container = ({ children }) => {
  const [update, setUpdate] = useState(0)
  const [state, setState] = useState(-1)

  if (!children) {
    return <Error />
  }

  const increment = () => setUpdate(update + 1)
  const changeState = (a) => setState(a)

  const _children = React.Children.map(children, (child) => {
    // console.log(child)
    let props = {}

    if (child.type.name === 'Add') {
      props.onUpdate = increment
    }
    if (child.type.name === 'Tasks') {
      props.update = update
      props.state = state
    }
    if (child.type.name === 'Options') {
      props.stateTask = changeState
    }

    return React.cloneElement(child, props)
  })

  return _children
}

export default Container
