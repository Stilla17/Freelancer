import React from 'react'
import LoginNav from './../Components/UserHeader/UserHeader.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import { Outlet } from 'react-router';
const Layout = () => {
  return (
    <div>
      <LoginNav className={" mt-[50px]"} />

      <Outlet />

      <Footer />
    </div>
  )
}

export default Layout
