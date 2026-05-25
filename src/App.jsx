
import './App.css'
import About from './components/home/About'
import Hero from './components/home/Hero'
import Projects from './components/home/Projects'
import Services from './components/home/Services'
import Skills from './components/home/Skills'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'

function App() {

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <Hero/>

      <About/>

      <Skills/>

      <Services/>

      <Projects/>

      <Footer/>

    </div>
  )
}

export default App
