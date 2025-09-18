import React, { useState } from "react";
import { TbMailFilled } from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import LogoM from "./../assets/img/Group 36.png";
import { Link } from "react-router";
import axios from "axios";

function PageOneSign() {
  const api =
    "https://job-portal-production-294a.up.railway.app/api/v1/users/sign-up";
  const [emile, setemile] = useState("");

  const handlePosT = async () => {
    try {
      const res = await axios.post(api, {
        email: emile,
        fullName: "BKDR",
        password: "123456789",
        confirmPassword: "123456789",
        role: "candidate",
      });
      console.log("Success:", res.data);
      setemile("");
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
    }
  };

  return (
   <div className="flex justify-center items-center">
     <div className="w-full max-w-[794px] mx-[10px] mb-[60px] px-[50px] pt-[44px] pb-[120px] rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] text-center sm:px-[118px] ">
      <div>
        <h2 className="text-[25px] font-bold mb-[37px] sm:text-[33px]">
          Get your free account
        </h2>
        <div className="bg-[#4260DA] w-full h-[45px] flex items-center justify-center font-semibold gap-[21px] rounded-[100px] text-white text-[16px] mb-[20px]">
          <img src={LogoM} alt="LogoM" /> Continue with gmail
        </div>
        <div className="my-[32px] relative flex justify-center content-center">
          <hr className="border-[#E6E6E6] w-full" />
          <h2 className="absolute bg-white w-[27px] h-[20px] text-[16px] content-center top-[-13px]">
            or
          </h2>
        </div>
        <div>
          <div className="relative mb-[30px]">
            <TbMailFilled className="absolute text-[16px] text-[#7F7F7F] top-[16px] left-[22px]" />
            <input
              onChange={(e) => setemile(e.target.value)}
              type="text"
              className="w-full h-[45px] text-[16px] rounded-[10px] font-semibold border text-[#948E8A] pl-[47px] border-[#7F7F7F] focus:outline-0"
              placeholder="Email address"
            />
          </div>
        </div>

        <button
          to={"/signin/"}
          onClick={handlePosT}
          value={emile}
          className="bg-[#FF4C4A] w-full h-[45px] rounded-[100px] text-white text-[16px] mb-[28px]"
        >
          Continue with Email
        </button>
        <h2 className="text-[16px]">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#FF4C4A]">
            Log in
          </Link>
        </h2>
      </div>
    </div>
   </div>
  );
}

export default PageOneSign;
