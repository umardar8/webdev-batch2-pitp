import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

const App = () => {
  
  return (
    <div>
      <Navbar title='Text Tools' />
      <TextForm />
    </div>
  )
}

export default App
