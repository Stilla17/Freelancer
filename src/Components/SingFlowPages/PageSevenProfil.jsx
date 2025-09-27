import React, { useState } from 'react'
import { RiArrowLeftWideLine } from "react-icons/ri";
import SkillsInput from '../Chips/Chips';


function PageSevenProfil() {

    const [skils, setSkils] = useState(false)

  return (
    <div className="w-[794px] px-[50px] pt-[44px] pb-[50px] rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] sm:px-[118px] mx-[50px]">
        <div>
          <h2 className="text-[20px] font-bold mb-[37px] sm:text-[20px] text-center">
            Create profile
          </h2>
            <div>
                <div className='mb-[25px] '>
                    <div className='flex justify-between items-center '>
                        <RiArrowLeftWideLine />
                        <h2>4/8</h2>
                    </div>
                    <div className='bg-[#F2F2F2] rounded-[100px] mt-[42px]'><div className='w-[40%] border-[5px] border-[#FF4C4A] rounded-[100px]'></div></div>
                </div>
                <h2 className='text-[16px] font-semibold mb-[18px] text-[#2A1E17] sm:text-[26px]'>Add your skills.</h2>
                <p className='text-[10px] text-[#554B45] sm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.</p>
                <button onClick={() => setSkils(prev => !prev)} className='w-full py-[12px] text-[14px] border border-[#B3B3B3] text-[#FF4C4A] rounded-[100px] pl-[11px] mt-[29px] mb-[26px] sm:text-[16px]'>+  Add Language</button>
                <div className={`w-full transition-all duration-500 ease-in-out overflow-hidden sm:w-[70%] ${skils ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0" }`}>

                    <SkillsInput />

                </div>
            </div>

        <div className="flex justify-center items-center">
          <button className="text-[14px] text-center mt-[46px] bg-[#FF4C4A] text-white font-semibold px-[92px] py-[12px] rounded-[100px] text-nowrap sm:text-[16px]">
            Next
          </button>
        </div>
        </div>
      </div>
  )
}

export default PageSevenProfil
