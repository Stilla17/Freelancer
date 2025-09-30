import React from 'react'
import bgguy from './../../assets/img/BgGuy.png'
import Profile from './PVComponents/Profile'
import Verification from './PVComponents/Verification'

const BlueDiv = () => {
  return (
    <div className='bg-[#2942A5] flex justify-end max-w-full h-[308px]'>
        <img className='absolute' src={bgguy} alt="" />
        <div>
            <Profile/>
            <Verification/>
        </div>
    </div>
  )
}

export default BlueDiv