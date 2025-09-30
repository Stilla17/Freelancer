import React from 'react'
import Hey from './../../assets/img/Frame (1).png';


function PagethreeSign() {
  return (
<div className="w-[794px] px-[50px] pt-[44px] pb-[50px] rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] sm:px-[118px] mx-[50px]">
        <div>
          <img src={Hey} className='mx-auto mb-[20px]' alt="" />
          <h2 className="text-[20px] font-bold mb-[37px] sm:text-[33px] text-center">
            Hey Adam. Ready for your next big opportunity?
          </h2>
          <div className=" border-[#000000] w-full flex flex-wrap items-center mb-[20px]">


          </div>
                <div className="mb-[28px] w-full text-center">
                    <h2 className="mb-[26px] text-[14px] content-center sm:text-[16px]">Build a profile to show the world what you can do</h2>
                    <hr className="border-[#E6E6E6] w-full"/>
                </div>
                <div className="mb-[28px] w-full text-center">
                    <h2 className="mb-[26px] text-[14px] content-center sm:text-[16px]">Apply on jobs posted from clients, around the world</h2>
                    <hr className="border-[#E6E6E6] w-full"/>
                </div>
                <div className="mb-[28px] w-full text-center">
                    <h2 className="mb-[26px] text-[14px] content-center sm:text-[16px]">Get paid safely and know we’re here to help</h2>
                </div>

           <div>
            
        </div>

        <div className="flex justify-center items-center">
          <button className="text-[14px] text-center mt-[46px] bg-[#FF4C4A] text-white font-semibold px-[92px] py-[12px] rounded-[100px] text-nowrap sm:text-[16px]">
            Create Your Profile
          </button>
        </div>
        </div>
      </div>
  )
}

export default PagethreeSign
