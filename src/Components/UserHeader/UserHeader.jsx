import React, { useState } from "react";
import Logo from "../../assets/img/UtLogo.svg";
import qongiroq from "../../assets/icons/Bell.svg";
import search from "../../assets/icons/search2.svg";
import user from "../../assets/img/userPhoto.jpg";
import { IoLogInOutline, IoClose } from "react-icons/io5";
import { MdOutlineDensitySmall } from "react-icons/md";
import { useNavigate } from "react-router";
import axios from "axios";

function UserHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const logOut =
    "https://job-portal-production-294a.up.railway.app/api/v1/users/log-out";

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const accessToken = localStorage.getItem("accessToken");
      if (!refreshToken) {
        console.error("❌ Refresh token topilmadi");
        return;
      }

      const res = await axios.post(
        logOut,
        { refreshToken },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("✅ Logout muvaffaqiyatli:", res.data);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    } catch (error) {
      console.error(
        "Logout xatosi:",
        error.response?.status,
        error.response?.data || error.message
      );
    }
  };

  const goToProfile = () => navigate("/profile");
  const goToHelp = () => navigate("/help");

  return (
    <div className="bg-[#1F1F1F] relative">
      <div className="max-w-[1220px] mx-auto flex items-center justify-between py-[10px] h-[79px] px-4">
        <div className="flex items-center gap-[20px]">
          <img src={Logo} alt="logo" className="w-[100px]" />

          <div className="relative w-[300px] max-[950px]:hidden">
            <input type="text" placeholder="Search"className="w-full border-none pl-3 py-2 rounded-[50px] text-white bg-[#494A4D]"/>
            <img src={search} alt="search" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-[25px] relative">
          <div className="flex items-center gap-[25px] max-[950px]:hidden">
            <h1 className="text-white cursor-pointer">Browse projects</h1>
            <h1 className="text-white cursor-pointer">My Jobs</h1>
            <h1 className="text-white cursor-pointer">Messages</h1>
          </div>

          <img src={qongiroq} alt="bell" className="cursor-pointer" />
          <div className="relative">
            <img className="w-[42px] h-[42px] rounded-full cursor-pointer" src={user} alt="user" onClick={() => setMenuOpen(!menuOpen)} />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-[167px] bg-white rounded-[10px] shadow-lg z-50">
                <p onClick={goToProfile}className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">My profile</p>
                <hr className="border-gray-300 mt-[8px]" />
                <p className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">My wallet</p>
                <hr className="border-gray-300 mt-[8px]" />
                <p className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">Setting</p>
                <hr className="border-gray-300 mt-[8px]" />
                <p onClick={goToHelp}className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">Help & support</p>
                <hr className="border-gray-300 mt-[8px]" />
                <p onClick={handleLogout}className="text-black pt-[8px] pl-[15px] flex items-center gap-[40px] cursor-pointer hover:bg-gray-100">Log out <IoLogInOutline className="w-[28px] h-[28px]" /></p>
              </div>
            )}
          </div>
          <MdOutlineDensitySmall className="text-white text-[30px] cursor-pointer hidden max-[950px]:block" onClick={() => setSidebarOpen(true)}/>
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-full w-[270px] bg-[#2B2B2B] text-white transform transition-transform duration-300 z-[1000] rounded-l-2xl shadow-xl ${sidebarOpen ? "translate-x-0" : "translate-x-full" }`} >
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <h2 className="text-lg font-semibold">Menu</h2>
          <IoClose className="text-[26px] cursor-pointer" onClick={() => setSidebarOpen(false)} />
        </div>

        <div className="flex flex-col gap-4 p-5">
          <div className="relative">
            <input type="text" placeholder="Search" className="w-full border-none pl-3 pr-10 py-2 focus:outline-none rounded-[50px] text-white bg-[#494A4D]"/>
            <img src={search} alt="search" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"/>
          </div>

          <button className="text-left hover:bg-[#3B3B3B] py-2 px-3 rounded-lg">Browse projects</button>
          <button className="text-left hover:bg-[#3B3B3B] py-2 px-3 rounded-lg">My Jobs</button>
          <button className="text-left hover:bg-[#3B3B3B] py-2 px-3 rounded-lg">Messages</button>
        </div>
      </div>
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 "></div>
      )}
    </div>
  );
}

export default UserHeader;
