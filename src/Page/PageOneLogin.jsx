import React from 'react'
import { TbMailFilled } from "react-icons/tb";
import { Link } from 'react-router';


function PageOneLogin() {
  return (
    <div className="w-[794px] px-[50px] pt-[44px] pb-[120px] m-auto rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] text-center sm:px-[118px] mb-[60px]">
      <h2 className="text-[33px] font-bold mb-[52px]">
        Log in to your account
      </h2>
      <div>
        <div className="relative mb-[30px]">
          <TbMailFilled className="absolute text-[16px] text-[#7F7F7F] top-[16px] left-[22px]" />
          <input
            type="text"
            className="w-full h-[45px] text-[16px] rounded-[10px] font-semibold border text-[#948E8A] pl-[47px] border-[#7F7F7F] focus:outline-0"
            placeholder="Email address"
          />
        </div>
        <div className="relative mb-[35px]">
          <TbMailFilled className="absolute text-[16px] text-[#7F7F7F] top-[16px] left-[22px]" />
          <input
            type="text"
            className="w-full h-[45px] text-[16px] rounded-[10px] font-semibold border text-[#948E8A] pl-[47px] border-[#7F7F7F] focus:outline-0"
            placeholder="Password"
          />
        </div>
      </div>

      <button className="bg-[#FF4C4A] w-full h-[45px] rounded-[100px] text-white text-[16px] mb-[28px]">
        Login
      </button>
      <h2 className="text-[16px]">
        Don’t have account?
        <Link to={'/signup'} className="text-[#FF4C4A]">Sign up</Link>
      </h2>
    </div>
  )
}

export default PageOneLogin
