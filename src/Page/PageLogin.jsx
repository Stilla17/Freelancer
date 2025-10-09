import React, { useState } from "react";
import { TbMailFilled } from "react-icons/tb";
import { IoMdKey } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import axios from "axios";


function PageLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginApi = 'https://job-portal-production-294a.up.railway.app/api/v1/users/log-in'

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await axios.post(loginApi, {
        email: email,
        password: password
      })
      console.log("true:", res.data.data);
      if (res.data.data.accessToken) {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        console.log("Access token saqlandi ✅");
      } else {
        console.log("Access token yo‘q ❌");
      }

      if (res.data.data.refreshToken) {
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        console.log("Refresh token saqlandi ✅");
      } else {
        console.log("Refresh token yo‘q ❌");
      }

      navigate("/user");

    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
    }
  }



  return (
    <div className='flex justify-center items-center'>
      <div className="w-full max-w-[794px] px-[50px] pt-[44px] pb-[120px] mx-[10px] rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] text-center sm:px-[118px] mb-[60px]">
        <h2 className="text-[33px] font-bold mb-[52px]">
          Log in to your account
        </h2>
        <div>
          <div className="relative mb-[30px]">
            <TbMailFilled className="absolute text-[16px] text-[#7F7F7F] top-[16px] left-[22px]" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[45px] text-[16px] rounded-[10px] font-semibold border text-[#948E8A] pl-[47px] border-[#7F7F7F] focus:outline-0"
              placeholder="Email address"
            />
          </div>
          <div className="relative mb-[30px]">
            <IoMdKey className="absolute text-[20px] text-[#7F7F7F] top-[13px] left-[22px]" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[45px] text-[16px] rounded-[10px] font-semibold border text-[#948E8A] pl-[47px] border-[#7F7F7F] focus:outline-0"
              placeholder="Password"
            />
            {showPassword ? (
              <FaEye onClick={() => setShowPassword(false)} className="absolute text-[18px] text-[#7F7F7F] top-[15px] right-[15px] cursor-pointer" />
            ) : (
              <FaEyeSlash onClick={() => setShowPassword(true)} className="absolute text-[18px] text-[#7F7F7F] top-[15px] right-[15px] cursor-pointer" />
            )}
          </div>
        </div>

        <button onClick={handleLogin} className="bg-[#FF4C4A] w-full h-[45px] rounded-[100px] text-white text-[16px] mb-[28px]">
          Login
        </button>
        <h2 className="text-[16px]">
          Don’t have account?
          <Link to={'/signup'} className="text-[#FF4C4A]"> Sign up</Link>
        </h2>
      </div>
    </div>
  )
}

export default PageLogin
