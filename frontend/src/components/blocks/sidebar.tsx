import Hoverbtn from "../ui/Hoverbtn.tsx"
import { BellDot, Compass, Home as HomeIcon, MessageCircleHeart, Settings } from "lucide-react"
import Profilecomp from "../Profilecomp.tsx"
import { Link } from "react-router"



// type Props = {}

const Sidebar = () => {
  return (
    <div className="sidebar h-full flex flex-col justify-between  items-start">

                <div className="up flex flex-col items-start gap-5 mt-20 ml-2 ">
                    <div>
                        <Link to={"/app"}>
                            <Hoverbtn icon={<HomeIcon />}> Home </Hoverbtn>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/app/explore"}>
                            <Hoverbtn icon={<Compass />}> Explore </Hoverbtn>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/app/chat"}>
                            <Hoverbtn icon={<MessageCircleHeart />}> Chat </Hoverbtn>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/app/notifications"}>
                            <Hoverbtn icon={<BellDot />}> Notifications </Hoverbtn>
                        </Link>
                    </div>
                </div>
                <div className="down mb-2 ml-2 flex flex-col items-start gap-5">
                       
                        <Hoverbtn>  
                            <div className="flex gap-5 items-center">
                                <Profilecomp /> 

                                <div className="flex flex-col justify-center items-center gap-1">
                                    <h4>Profile</h4>
                                    <h4>Section</h4>
                                </div>
                            </div>
                        </Hoverbtn>

                            <Hoverbtn icon={<Settings />}> Settings </Hoverbtn>

                </div>

            </div>

  )
}

export default Sidebar