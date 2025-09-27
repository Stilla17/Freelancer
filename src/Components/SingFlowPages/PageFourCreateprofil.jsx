import React from 'react'
import { RiArrowLeftWideLine } from "react-icons/ri";

function PageFourCreateprofil() {
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
                        <h2>1/8</h2>
                    </div>
                    <div className='bg-[#F2F2F2] rounded-[100px] mt-[42px]'><div className='w-[10%] border-[5px] border-[#FF4C4A] rounded-[100px]'></div></div>
                </div>
                <h2 className='text-[26px] font-semibold mb-[18px] text-[#2A1E17]'>First, add a title to tell the world what you do.</h2>
                <p className='text-[14px] text-[#554B45]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.</p>
                <input type="text" className='w-full py-[12px] text-[16px] border border-[#B3B3B3] text-[#B4B3B3] rounded-[10px] pl-[11px] mt-[29px]' placeholder='Example: Web developer | Web & Mobile'/>
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

export default PageFourCreateprofil
