import React from 'react'
import {Outlet} from "react-router-dom"
import Navber from '../components/navber/Navber'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
