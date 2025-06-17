import Header from "./components/partials/Header"
import Sidebar from "./components/partials/Sidebar"
import About from "./section/About"
import Contact from "./section/Contact"
import Education from "./section/Education"
import Experience from "./section/Experience"
import Landing from "./section/Landing"
import Project from "./section/Project"

function App() {

  return (
    <>
      <div className="Flex flex-col">
        <Header></Header>
        <Sidebar></Sidebar>
        <Landing></Landing>
        <About></About>
        <Project></Project>
        <Experience></Experience>
        <Education></Education>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
