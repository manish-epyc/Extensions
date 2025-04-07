import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExtensionsList from './components/ExtensionsList'

function App() {

  return (
    <div className="app-container">
      <Header />
      <ExtensionsList />
    </div >
  )
}

export default App
