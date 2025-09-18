import React from 'react'
import great from './../../assets/img/banner img.png';

const Greatworks = () => {
    return (
        <div className={`bg-[url(./assets/img/bgImg.png)] bg-cover bg-center bg-no-repeat pt-[72px] pb-[50px] max-md:px-[40px] max-md:text-center mt-[73px]`}>
            <div className={"flex gap-[23px] items-center justify-center max-md:flex-col"}>

                <img className="w-[394px] " src={great} alt="" />

                <div>

                    <p className={"mb-[30px] text-[20px] font-bold"}>
                        Find great works in your way
                    </p>
                    <p className='text-black max-w-[500px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>

                    <button className='mt-[20px] px-[32px] py-[12px] rounded-[100px] text-white bg-[#4260DA] border-none'>
                        Find opportunities
                    </button>

                </div>



            </div>

        </div>
    )
}

export default Greatworks