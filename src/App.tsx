import Header from "./components/partials/Header"
import Sidebar from "./components/partials/Sidebar"
import About from "./section/About"
import Education from "./section/Education"
import Expirience from "./section/Expirience"
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
        <Expirience></Expirience>
        <Education></Education>
      </div>
    </>
  )
}

export default App
