import { Outlet } from 'react-router-dom'
import Sidebar from "../blocks/Sidebar"
import ShootingStarComp from "../comps/ShootingStarComp"
import Starfield from "../comps/Starfield"

export default function MainLayout() {
  return (
    <>
        <Starfield />
        <ShootingStarComp />

        <div className="layout grid grid-cols-12 gap-4 h-screen overflow-hidden">
            <aside className="col-span-3">
              <div className="sticky top-0 h-screen w-60 overflow-auto">
                <Sidebar />
              </div>
            </aside>

            <main className="main fixed top-0 left-61 w-320 col-span-6 h-screen overflow-y-auto">
              <Outlet />
            </main>

            
        </div>
    </>
  )
}
