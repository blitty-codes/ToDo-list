/* eslint-disable prefer-const */
import React, { useState } from 'react'
import Error from './Error'

const Container = ({ children }) => {
  const [update, setUpdate] = useState(0)

  if (!children) {
    return <Error />
  }

  const increment = () => setUpdate(update + 1)

  const _children = React.Children.map(children, (child) => {
    // console.log(child)
    let props = {}

    if (child.type.name === 'Add') {
      props.onUpdate = increment
    }
    if (child.type.name === 'Tasks') {
      props.update = update
    }

    return React.cloneElement(child, props)
  })

  return _children
}

export default Container
