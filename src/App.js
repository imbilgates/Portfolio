import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Admin from './components/Admin/Admin'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      {/* Routes definition */}
      <Routes>
        {/* Main route for the portfolio (homepage) */}
        <Route 
          path="/Portfolio" 
          element={
            <>
              <Header />
              <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
              </main>
              <ScrollToTop />
              <Footer />
            </>
          } 
        />

        {/* Admin route */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
