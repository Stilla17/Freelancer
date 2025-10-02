import React, { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { IoMdKey } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";
import LogoM from "./../assets/img/Group 36.png";
import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function PageSignUp() {
  const api =
    "https://job-portal-production-294a.up.railway.app/api/v1/users/sign-up";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");

  const options = ["jobseeker", "employer"];
  const [value, setValue] = useState(options[0]);

  const notify = () =>
    toast.error("the emile and name is registred !", {
      position: "top-center",
    });

  const handlePosT = async () => {
    try {
      const fullName = `${name} ${surName}`;
      const res = await axios.post(api, {
        email: email,
        fullName: fullName,
        password: password,
        role: value,
      });

      console.log("true:", res.data);
      navigate("/user");
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      notify();
    }
  };

  const openGoogleAuth = () => {
    window.location.href =
      "https://job-portal-production-294a.up.railway.app/api/v1/users/google";
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[794px] mx-[10px] mb-[60px] px-[50px] pt-[44px] pb-[120px] rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] text-center sm:px-[118px] ">
        <div>
          <h2 className="text-[25px] font-bold mb-[37px] sm:text-[33px]">
            Sign Up
          </h2>
          <button
            onClick={openGoogleAuth}
            className="bg-[#4260DA] w-full h-[45px] border flex items-center justify-center font-semibold gap-[21px] rounded-[100px] text-white text-[16px] mb-[20px]"
          >
            <img src={LogoM} alt="LogoM" /> Continue with Gmail
          </button>
          <div className="my-[32px] relative flex justify-center content-center">
            <hr className="border-[#E6E6E6] w-full" />
            <h2 className="absolute bg-white w-[27px] h-[20px] text-[16px] content-center top-[-13px]">
              or
            </h2>
          </div>
          <div>
            <div className="w-full flex flex-wrap gap-[23px] mb-[20px] sm:gap-[43px] sm:flex-nowrap">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-[11px] border border-[#7F7F7F] rounded-[10px] py-[12px] focus:outline-0"
                placeholder="First Name"
              />
              <input
                type="text"
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
                className="w-full pl-[11px] border border-[#7F7F7F] rounded-[10px] py-[12px] focus:outline-0"
                placeholder="Last Name"
              />
            </div>
            <div className="relative mb-[30px]">
              <TbMailFilled className="absolute text-[16px] text-[#7F7F7F] top-[16px] left-[22px]" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                value={email}
                className="w-full h-[45px] text-[16px] rounded-[10px] font-semibold border text-[#948E8A] pl-[47px] border-[#7F7F7F] focus:outline-0"
                placeholder="Email address"
              />
            </div>
            <div className="relative mb-[30px]">
              <IoMdKey className="absolute text-[20px] text-[#7F7F7F] top-[13px] left-[22px]" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[45px] text-[16px] rounded-[10px] font-semibold border text-[#948E8A] pl-[47px] border-[#7F7F7F] focus:outline-0"
                placeholder="Password"
              />
              {password.length >= 8 || password === "" ? (
                <p></p>
              ) : (
                <p className="text-red-500">require pasword legh min 8</p>
              )}
            </div>
            <div className="flex justify-center ">
              <SelectButton
                value={value}
                onChange={(e) => setValue(e.value)}
                options={options}
                className="rounded-md overflow-hidden mb-[36px] mx-auto"
              />
            </div>
          </div>

          <button
            to={"/signin/"}
            onClick={handlePosT}
            className="bg-[#FF4C4A] w-full h-[45px] rounded-[100px] text-white text-[16px] mb-[28px]"
          >
            Create accaunt
          </button>
          <h2 className="text-[16px]">
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#FF4C4A]">
              Log in
            </Link>
          </h2>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PageSignUp;
