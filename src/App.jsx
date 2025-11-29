import AboutUs from "./components/AboutUs"
import Playful from "./components/Playful"
import Landing from "./components/Landing "
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import RatingsCards from "./components/RatingsCards"

function App() {

  return (
    <div className="w-full h-screen bg-zinc-900 text-white ">
      <Navbar/>
      <Landing />
      <Marquee />
      <AboutUs />
      <Playful />
      <Features />
      <RatingsCards />
    </div>
  )
}

export default App
