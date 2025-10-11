import React from 'react'
import Logo from './../../assets/img/UPTECHUNT.png';
import { Link } from 'react-router';
const LoginNav = ({ className }) => {
  return (
    <nav className={`w-[100%] h-[88px] flex items-center pl-[120px] border-b-1 border-[#E5E5E3] ${className}`}>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </nav>
  )
}

export default LoginNav
