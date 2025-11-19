// import React from 'react'
// import { Outlet, NavLink } from 'react-router-dom'
import Sidebar from "../blocks/Sidebar"
import ShootingStarComp from "../comps/ShootingStarComp"
import Starfield from "../comps/Starfield"

export default function MainLayout() {
  return (
    <>
        <Starfield />
        <ShootingStarComp />

        <div className="layout grid grid-cols-12 gap-4">
            <Sidebar />
            <main className="main"><Starfield />Main Content</main>
                
            <section className="trending"><Starfield />Trending</section>
        </div>
    </>
  )
}
