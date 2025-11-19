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

            <aside className="trending col-span-3">
              <div className="fixed top-0 right-0 h-screen overflow-auto p-4">
                Trending
              </div>
            </aside>
        </div>
    </>
  )
}
