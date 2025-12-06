import Starfield from '../components/comps/Starfield'
import ShootingStarComp from '../components/comps/ShootingStarComp'
import { HeroDemo } from '../components/comps/MainHeader'
import "./Landing.css"



const Landing = () => {
  return (
    <>
        <Starfield />
        <ShootingStarComp />
        <div className="landing-viewport h-screen w-screen flex items-center justify-center relative">
          <HeroDemo />
        </div>
    </>
  )
}

export default Landing