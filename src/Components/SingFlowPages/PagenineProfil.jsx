import React, { useState } from 'react'
import { InputNumber } from 'primereact/inputnumber';
import { RiArrowLeftWideLine } from "react-icons/ri";

function PagenineProfil() {
    const [value1, setValue1] = useState();

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
                        <h2>6/8</h2>
                    </div>
                    <div className='bg-[#F2F2F2] rounded-[100px] mt-[42px]'><div className='w-[80%] border-[5px] border-[#FF4C4A] rounded-[100px]'></div></div>
                </div>
                <h2 className='text-[16px] font-semibold mb-[18px] text-[#2A1E17] sm:text-[26px]'>Add Hourly Rate.</h2>
                <p className='text-[10px] mb-[19px] text-[#554B45] sm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.</p>

                <div>
                    <h2>Hourly Rate</h2>
                    <div className='flex items-center gap-[8px] mt-[20px]'>
                        <InputNumber inputId="currency-us" value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
                        <h2 className='text-[14px] text-[#B4B3B3] sm:text-[16px]'>/hr</h2>
                    </div>
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

export default PagenineProfil
