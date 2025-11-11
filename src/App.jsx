import Landing from "./components/Landing "
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="w-full h-screen bg-zinc-900 text-white ">
      <Navbar/>
      <Landing />
      <Marquee />
    </div>
  )
}

export default App
