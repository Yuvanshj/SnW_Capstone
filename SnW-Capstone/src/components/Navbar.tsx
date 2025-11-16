import GlassSurface from './GlassSurface';
import AnimatedLoginModal from './AnimatedLoginModal';
import AnimatedSignupModal from './AnimatedSignupModal';
import { IoPeopleSharp } from "react-icons/io5";


// type Props = {}

const Navbar = () => {
  return (
    <div className='nav-contaner'>
        <GlassSurface 
          width={"90%"} 
          height={100}
          borderRadius={50}
          className="navbar" 
          >
              <div className='navv'>
                <div className='m-auto'>
                  Tomodachi
                  <IoPeopleSharp />
                </div>

                <div className='m-auto'>
                  <a>Home</a>
                  <a>About</a>
                </div>

                <div className='flex gap-3 m-auto'>
                  <AnimatedLoginModal 
                    triggerButtonText="Login" 
                    modalTitle="Login"
                  >
                    <div>
                      <h2>Login Form</h2>
                    </div>
                  </AnimatedLoginModal>

                  <AnimatedSignupModal 
                    triggerButtonText="Signup" 
                    modalTitle="Signup"
                  >
                    <div>
                      <h2>Signup Form</h2>
                    </div>
                  </AnimatedSignupModal>

                </div>

              </div>
          </GlassSurface>
    </div>
  )
}

export default Navbar