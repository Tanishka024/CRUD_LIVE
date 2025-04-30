import React from 'react'
import Register from './Components/Register'
import View from './Components/View'
import Update from './Components/Update'
import Delete from './Components/Delete'
import './App.css'
const App = () => {
  return (
    <div className="app-container">
      <h1 className='app-header'>USER APP</h1>
      <div className='components-wrapper'>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
      </div>
  )
}

export default App