import ShootingStarComp from "../../components/comps/ShootingStarComp"
import Starfield from "../../components/comps/Starfield"
import SignupForm from "../../components/SignupForm"
import { Button } from "../../components/ui/button"
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <>
    <Starfield />
    <ShootingStarComp />
  
    <div className="flex h-screen w-full flex-col justify-center items-center px-4 relative overflow-hidden">
    <Link to={"/"}>Back to Home</Link>
      <div className="w-full max-w-md relative ">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-linear-to-br from-[#06b6d4]/12 via-[#7c3aed]/8 to-[#061826]/12 blur-3xl opacity-80 -z-20" />

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl py-12 px-8">
          <SignupForm />
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup