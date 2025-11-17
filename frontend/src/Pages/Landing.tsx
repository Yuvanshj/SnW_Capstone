import Starfield from '../components/comps/Starfield'
import ShootingStarComp from '../components/comps/ShootingStarComp'
import { HeroDemo } from '../components/comps/MainHeader'

// type Props = {} 

const Landing = () => {
  return (
    <>
        <Starfield />
        <ShootingStarComp />
        <div className="h-screen w-screen flex items-center justify-center relative">
            <HeroDemo />
        </div>
    </>
  )
}

export default Landing