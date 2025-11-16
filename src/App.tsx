import Navbar from "./components/Navbar"
import MainHeading from "./components/MainHeading"
import { BouncingBalls } from "./components/ui/bouncing-balls"

function App() {

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <MainHeading />
      
      <BouncingBalls/>
    </div>
  )
}

export default App