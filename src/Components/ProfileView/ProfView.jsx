import React from 'react'
import logo from './../../assets/img/UtLogo.svg'
import search from './../../assets/icons/search2.svg'
import bell from './../../assets/icons/Bell.svg'
import guy from './../../assets/img/Guy.svg'
import BlueDiv from './BlueDiv'
const ProfView = () => {
    return (
        <>
            <header>
                <div className='bg-[#1F1F1F] '>
                    <nav className='mx-auto max-w-[1220px] flex items-center py-[20px] justify-between'>
                        <div className='flex gap-[34px] items-center'>
                            <img src={logo} alt="" />
                            <div className='relative'>
                                <input className='max-w-[249px] bg-[#494A4D] rounded-[100px] outline-none text-white pl-[18px] py-[12px]' type="text" placeholder='Search' />
                                <img className='absolute left-[170px] bottom-[15px]' src={search} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center gap-[37px]'>
                            <ul className='flex gap-[28px]'>
                                <li className='text-[#F2F2F2] font-semibold'>Browse projects</li>
                                <li className='text-[#F2F2F2] font-semibold'>My Jobs</li>
                                <li className='text-[#F2F2F2] font-semibold'>Messages</li>
                            </ul>
                            <div className='flex items-center gap-[41px]'>
                                <img src={bell} alt="bell" />
                                <img src={guy} alt="guy" />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <BlueDiv/>
            <main className='bg-[#F7F7F5]'>

            </main>
        </>
    )
}

export default ProfView