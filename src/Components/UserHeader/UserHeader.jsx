import React, { useState } from "react";
import Logo from "../../assets/img/UtLogo.svg";
import qongiroq from "../../assets/icons/Bell.svg";
import search from "../../assets/icons/search2.svg";
import user from "../../assets/img/userPhoto.jpg";
import { IoLogInOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import axios from "axios";
import Help from './../HelpSupport/Help.jsx';

function UserHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const logOut = "https://job-portal-production-294a.up.railway.app/api/v1/users/log-out"

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        console.error("Refresh token topilmadi ❌");
        return;
      }

      const res = await axios.post(
        logOut,
        { refreshToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("logout response:", res.data);

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      console.log("Tokenlar o‘chirildi ✅");

      navigate("/login");
    } catch (error) {
      console.error(
        "Logout xatosi:",
        error.response?.status,
        error.response?.data || error.message
      );
    }
  };


  const goToProfile = () => {
    navigate("/profile");
  };

    const goToHelp = () => {
    navigate("/help");
  };

  return (
    <div className="bg-[#1F1F1F]">
      <div className="max-w-[1220px] mx-auto flex items-center justify-between py-[10px] h-[79px]">
        <div className="flex items-center gap-[30px]">
          <img src={Logo} alt="logo" />
          <div className="relative w-[300px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full border-none pl-3 pr-10 py-2 focus:outline-none rounded-[50px] text-white bg-[#494A4D]"
            />
            <img
              src={search}
              alt="search"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center gap-[30px] relative">
          <h1 className="text-white cursor-pointer">Browse projects</h1>
          <h1 className="text-white cursor-pointer">My Jobs</h1>
          <h1 className="text-white cursor-pointer">Messages</h1>
          <img src={qongiroq} alt="bell" />

          <div className="relative">
            <img
              className="w-[42px] h-[42px] rounded-full cursor-pointer"
              src={user}
              alt="user"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-[167px] bg-white rounded-[10px] shadow-lg z-50">
                <p onClick={goToProfile} className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">
                  My profile
                </p>
                <hr className="border-gray-300 mt-[8px]" />
                <p className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">
                  My wallet
                </p>
                <hr className="border-gray-300 mt-[8px]" />
                <p className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">
                  Setting
                </p>
                <hr className="border-gray-300 mt-[8px]" />
                <p onClick={goToHelp} className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">
                  Help & support
                </p>
                <hr className="border-gray-300 mt-[8px]" />
                <p onClick={handleLogout} className="text-black pt-[8px] pl-[15px] flex items-center gap-[40px] cursor-pointer hover:bg-gray-100">
                  Log out
                  <IoLogInOutline className="w-[28px] h-[28px]" />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
