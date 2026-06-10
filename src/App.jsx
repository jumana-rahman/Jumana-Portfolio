
import { useState } from 'react'
import './App.css'
import About from './components/home/About'
import Hero from './components/home/Hero'
import Projects from './components/home/Projects'
import Services from './components/home/Services'
import Skills from './components/home/Skills'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'

function App() {

  const [theme, setTheme] = useState("dark");

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar theme={theme} setTheme={setTheme}/>

      <Hero theme={theme}/>

      <About theme={theme}/>

      <Skills theme={theme}/>

      <Services theme={theme}/>

      <Projects theme={theme}/>

      <Footer theme={theme}/>

    </div>
  )
}

export default App
