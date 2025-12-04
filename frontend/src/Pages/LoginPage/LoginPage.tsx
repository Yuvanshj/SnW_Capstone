import ShootingStarComp from "../../components/comps/ShootingStarComp"
import Starfield from "../../components/comps/Starfield"
import LoginForm from "../../components/LoginForm"
import { Link } from "react-router-dom";


const LoginPage = () => {
  return (
    <>
    <Starfield />
    <ShootingStarComp />

    <div className="flex h-screen w-full flex-col justify-center items-center px-4 relative overflow-hidden">
    <Link to={"/"}>Back to Home</Link>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-linear-to-br from-[#06b6d4]/12 via-[#7c3aed]/8 to-[#061826]/12 blur-3xl opacity-80 -z-20" />

      <div className="w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl py-12 px-8">
          <LoginForm />
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginPage