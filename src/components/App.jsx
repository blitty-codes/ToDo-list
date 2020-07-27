import React from 'react'
import Container from './Container'
import Add from './Add'
import Tasks from './Tasks'

import '../assets/app.css'

// TODO Best thing? With the div and the class or without it?
const App = () => (
  <div className="center">
    <Container>
      <Add />
      <hr />
      <Tasks />
    </Container>
  </div>
)

export default App
