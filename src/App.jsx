import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Resume from './components/Resume'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contacts/>
    <Resume/>
    </div>
    <Toaster/>
    </>
  )
}

export default App