import React from 'react'
import Logo from './../../assets/img/UPTECHUNT.png';
const LoginNav = ({ className }) => {
  return (
    <nav className={`w-[100%] h-[88px] flex items-center pl-[120px] border-b-1 border-[#E5E5E3] ${className}`}>
        <img src={Logo} alt="" />
    </nav>
  )
}

export default LoginNav
