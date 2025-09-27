import React from 'react'
import LoginNav from './../Components/RegistrNav/LoginNav.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import { Outlet } from 'react-router';
const Layout = () => {
  return (
    <div>
      <LoginNav className={"mb-[50px]"} />

      <Outlet />

      <Footer />
    </div>
  )
}

export default Layout
