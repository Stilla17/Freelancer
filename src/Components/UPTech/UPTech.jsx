import React from 'react'
import Quality from './../../assets/img/Character.png';
import until from './../../assets/img/Frame (1).png';
import safe from './../../assets/img/Group 41.png';
import UPTechProps from '../Props/UPTechProps';
const UPTech = () => {
    return (
        <div className='flex flex-col items-center bg-[#FFFBF3] max-md:text-center'>
            <h1 className='font-bold text-[53px] mt-[70px] mb-[20px] max-md:text-[30px]'>
                Why UPTechunt
            </h1>

            <p className='text-gray-400 text-center max-w-[500px] text-[20px] mb-[60px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center gap-[70px] mb-[90px] max-md:flex-col">
                <UPTechProps className={"w-[87px]"} title={"Quality work"} img={Quality} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."} />
                <UPTechProps className={"w-[136px]"} title={"No cost until you hire"} img={until} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."} />
                <UPTechProps className={"w-[130px]"} title={"Safe and secure"} img={safe} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."} />
            </div>
        </div>
    )
}

export default UPTech