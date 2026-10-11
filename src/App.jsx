import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import TechStack from "./components/TechStack"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App () {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TechStack/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}
export default App
