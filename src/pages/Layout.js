import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SideCart from '../components/sideCart'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <SideCart/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout