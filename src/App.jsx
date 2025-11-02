import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Preloader from './components/layout/Preloader'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <Router>
        {loading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path="/" element={
              <div className="app">
                <Navbar />
                <main>
                  <section id="home" className="min-h-screen">
                    <Hero />
                  </section>
                  <section id="projects" className="min-h-screen">
                    <Projects />
                  </section>
                  <section id="about" className="min-h-screen">
                    <About />
                  </section>
                  <section id="skills" className="min-h-screen">
                    <Skills />
                  </section>
                  <section id="contact" className="min-h-screen">
                    <Contact />
                  </section>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        )}
      </Router>
    </ThemeProvider>
  )
}

export default App
