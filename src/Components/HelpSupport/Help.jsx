import React from 'react'
import background from './../../assets/img/backgroundInFilterPage.png';
import { IoIosArrowBack } from "react-icons/io";
function Help() {
    return (
        <div>
            <div className="relative">
                <div className="absolute bg-center bg-cover w-full h-[415px] z-[-10]" style={{ backgroundImage: `url(${background})` }}></div>
            </div>
            <div className="max-w-[1240px] mx-auto pt-[80px]">
                <div className="w-[804px] h-[280px] bg-white rounded-md p-[10px] shadow-2xl mx-auto mt-[30px] mb-[100px]">
                    <div className="flex items-center gap-[280px] pt-[20px]">
                        <div className="flex items-center gap-[10px]">
                            <IoIosArrowBack />
                            <h2>Back</h2>
                        </div>
                        <h2 className='text-[#2A1E17] font-bold text-center'>Help & support</h2>
                    </div>
                    <hr className="w-full border-gray-400 mt-[10px] pt-[20px]" />
                    <h2 className='text-[#2A1E17] text-center pt-[20px]'>For any kind of help and suuport please write us on the below mention mail id. Thanks</h2>
                    <h2 className='text-[#2A1E17] font-bold text-center pt-[30px]'>Help@Uptechhunt.com</h2>
                </div>
            </div>
        </div>
    )
}

export default Help