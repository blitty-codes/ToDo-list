import React from 'react'

import Container from './Container'
import Add from './tasks/Add'
import Tasks from './tasks/Tasks'
import Options from './tasks/Options'
import Footer from './Footer'

import '../assets/app.css'

// TODO Best thing? With the div and the class or without it?
const App = () => (
  <div className="center">
    <Container>
      <Add />
      <Options />
      <hr />
      <Tasks />
      <Footer />
    </Container>
  </div>
)

export default App
