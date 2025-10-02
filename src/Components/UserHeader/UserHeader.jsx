import React, { useState } from "react";
import Logo from "../../assets/img/UtLogo.svg";
import qongiroq from "../../assets/icons/Bell.svg";
import search from "../../assets/icons/search2.svg";
import user from "../../assets/img/userPhoto.jpg";
import { IoLogInOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function UserHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); 
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
          <h1 className="text-white">Browse projects</h1>
          <h1 className="text-white">My Jobs</h1>
          <h1 className="text-white">Messages</h1>
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
                <p className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">My profile</p>
                <hr className="border-gray-300 mt-[8px]" />
                <p className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">My wallet</p>
                <hr className="border-gray-300 mt-[8px]" />
                <p className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">Setting</p>
                <hr className="border-gray-300 mt-[8px]" />
                <p className="text-black pt-[8px] pl-[15px] cursor-pointer hover:bg-gray-100 rounded-[10px]">Help & support</p>
                <hr className="border-gray-300 mt-[8px]" />
                <p 
                  onClick={handleLogout} 
                  className="text-black pt-[8px] pl-[15px] flex items-center gap-[40px] cursor-pointer hover:bg-gray-100"
                >
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
