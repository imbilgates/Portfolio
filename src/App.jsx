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
import FloatingIcons from './theme/FloatingIcons'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <FloatingIcons>
        <Header />

        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <ScrollToTop />
        <Footer />
      </FloatingIcons>
    </div>
  )
}

export default App
