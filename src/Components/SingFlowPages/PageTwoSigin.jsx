import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { TbMailFilled } from "react-icons/tb";
import LogoM from './../../assets/img/Group 36.png';
import Drop from "../DropdownCountry/Drop";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";


function PageTwoSigin() {
    const options = ['Freelancer', 'Client'];
    const [value, setValue] = useState(options[0]);

  return (
<div className="w-[794px] px-[50px] pt-[44px] pb-[120px] rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] sm:px-[118px] mx-[10px]">
        <div>
          <h2 className="text-[20px] font-bold mb-[37px] sm:text-[33px] text-center">
            Complete your free account setup
          </h2>
          <div className="w-full h-[45px] flex items-center justify-center font-semibold gap-[21px] rounded-[100px] text-[#6A625D] text-[16px] mb-[20px]">
            <img src={LogoM} alt="" /> xyz123@gmail.com
          </div>
          <div className=" border-[#000000] w-full flex flex-wrap items-center mb-[20px]">
            <div className='w-full flex flex-wrap gap-[23px] mb-[20px] sm:gap-[43px] sm:flex-nowrap'>
                <input type="text" className='w-full pl-[11px] border border-[#7F7F7F] rounded-[10px] py-[12px] focus:outline-0' placeholder='First Name'/>
                <input type="text" className='w-full pl-[11px] border border-[#7F7F7F] rounded-[10px] py-[12px] focus:outline-0' placeholder='Last Name'/>
            </div>

            <Drop />
          </div>
          <div className="my-[32px] relative flex justify-center content-center">
            <hr className="border-[#E6E6E6] w-full"/>
            <h2 className="absolute bg-white w-[68px] h-[20px] text-[16px] content-center top-[-13px]">I am a :</h2>
          </div>

            <div className="flex justify-center ">
                <SelectButton
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    options={options}
                    className="rounded-md overflow-hidden mb-[36px] mx-auto"
                />
            </div>

            <div>
                <div className="flex items-center justify-between gap-[18px]">
                    <input type="checkbox"  className="w-[24px] h-[24px] accent-[#FF4C4A] rounded-lg" />
                    <p className="text-[14px] text-[#7F7F7F]">Yes! Send me genuinely useful emails every now and then to help me get the most out of Upwork.</p>
                </div>
            </div>

        <div className="flex justify-center items-center">
          <button className="text-[16px] text-center mt-[46px] bg-[#FF4C4A] text-white font-semibold px-[92px] py-[12px] rounded-[100px] text-nowrap">
            Create My Account
          </button>
        </div>
        </div>
      </div>
  )
}

export default PageTwoSigin
