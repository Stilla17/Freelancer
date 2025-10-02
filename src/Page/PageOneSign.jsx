import React, { useState } from "react";
import { IoMdKey } from "react-icons/io";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import LogoM from "./../assets/img/Group 36.png";
import { Link } from "react-router-dom"; // ✅ to‘g‘ri import

function PageOneSign() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-[794px] mx-auto mb-[60px] px-[50px] pt-[44px] pb-[120px] rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] text-center sm:px-[118px] ">
      <div>
        <h2 className="text-[25px] font-bold mb-[37px] sm:text-[33px]">
          Sign Up
        </h2>

        {/* Gmail button */}
        <div className="bg-[#4260DA] w-full h-[45px] flex items-center justify-center font-semibold gap-[21px] rounded-[100px] text-white text-[16px] mb-[20px] cursor-pointer">
          <img src={LogoM} alt="LogoM" /> Continue with Gmail
        </div>

        {/* Divider */}
        <div className="my-[32px] relative flex justify-center content-center">
          <hr className="border-[#E6E6E6] w-full" />
          <h2 className="absolute bg-white w-[27px] h-[20px] text-[16px] content-center top-[-13px]">
            or
          </h2>
        </div>

        {/* Email input */}
        <div className="relative mb-[30px]">
          <TbMailFilled className="absolute text-[16px] text-[#7F7F7F] top-[16px] left-[22px]" />
          <input
            type="text"
            className="w-full h-[45px] text-[16px] rounded-[10px] font-semibold border text-[#948E8A] pl-[47px] border-[#7F7F7F] focus:outline-0"
            placeholder="Email address"
          />
        </div>

        {/* Password input */}
        <div className="relative mb-[30px]">
          <IoMdKey className="absolute text-[20px] text-[#7F7F7F] top-[13px] left-[22px]" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full h-[45px] text-[16px] rounded-[10px] font-semibold border text-[#948E8A] pl-[47px] border-[#7F7F7F] focus:outline-0"
            placeholder="Password"
          />
          {showPassword ? (
            <FaEye
              onClick={() => setShowPassword(false)}
              className="absolute text-[18px] text-[#7F7F7F] top-[15px] right-[15px] cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(true)}
              className="absolute text-[18px] text-[#7F7F7F] top-[15px] right-[15px] cursor-pointer"
            />
          )}
        </div>

        {/* Continue button */}
        <button className="bg-[#FF4C4A] w-full h-[45px] rounded-[100px] text-white text-[16px] mb-[28px]">
          Continue with Email
        </button>

        {/* Link to login */}
        <h2 className="text-[16px]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FF4C4A]">
            Log in
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default PageOneSign;
