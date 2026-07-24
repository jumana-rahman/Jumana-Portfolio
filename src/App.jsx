
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/home/About'
import Hero from './components/home/Hero'
import Projects from './components/home/Projects'
import Services from './components/home/Services'
import Skills from './components/home/Skills'
import Experience from './components/home/Experience'
import ProjectDetail from './components/home/ProjectDetail'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'

function Portfolio() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar theme={theme} setTheme={setTheme}/>

      <Hero theme={theme}/>

      <About theme={theme}/>

      <Skills theme={theme}/>

      <Experience theme={theme}/>

      <Services theme={theme}/>

      <Projects theme={theme}/>

      <Footer theme={theme}/>

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
