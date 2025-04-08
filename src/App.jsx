import { useState } from 'react'
// import './App.css'
import Header from './components/Header'
import ExtensionsList from './components/ExtensionsList'

function App() {

  return (
    <div className="max-w-[1220px] mx-auto px-8 py-8">
      <Header />
      <ExtensionsList />
    </div >
  )
}

export default App
