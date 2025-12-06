import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "../blocks/Sidebar"
import ShootingStarComp from "../comps/ShootingStarComp"
import Starfield from "../comps/Starfield"

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
        <Starfield />
        <ShootingStarComp />

        <header className="lg:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              className="p-2 rounded-md bg-black/40 backdrop-blur text-white"
              onClick={() => setMenuOpen(true)}
            >
              <span className="block w-5 h-0.5 bg-white mb-1"></span>
              <span className="block w-5 h-0.5 bg-white mb-1"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </button>
            <div className="text-white font-semibold">Tomodachi</div>
          </div>
        </header>

        <div className="app-layout h-screen overflow-hidden lg:grid lg:grid-cols-12 lg:gap-4 flex flex-col">

            <aside className="hidden lg:block lg:col-span-2">
              <div className="sticky top-0 h-screen w-60 overflow-auto">
                <Sidebar />
              </div>
            </aside>


            <main className="main col-span-12 lg:col-span-8 lg:col-start-3 h-screen overflow-y-auto flex justify-center relative z-50 opacity-100 visible">
              <div className="w-full max-w-4xl px-4 mx-auto">
                <Outlet />
              </div>
            </main>

        </div>

        {menuOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
            <div className="absolute top-0 left-0 h-full w-72 bg-white dark:bg-slate-900 shadow-xl overflow-auto">
              <div className="p-3 flex justify-end">
                <button onClick={() => setMenuOpen(false)} className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-800">Close</button>
              </div>
              <div className="p-4">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
    </>
  )
}
