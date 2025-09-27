import React from 'react'
import imager from './../../assets/img/Frame1.png';
import Nav from '../Nav/Nav'
import Banner2 from '../Banner2/Banner2';
const Header = () => {
  return (
    <header className='m-auto'>
      <div className='max-w-[1220px] m-auto'>
        <Nav />
      </div >
      <div className='bg py-[15px]'>

        <div className='max-w-[1220px] m-auto flex justify-between lg:flex-row items-center max-md-text-center flex-col-reverse max-md:px-[16px]'>

          <div className='text-white'>
            <h1 className=' text-[43px] max-w-[690px] font-bold max-md:text-4xl max-lg:text-5xl max-md:text-center'>Join world’s best market place</h1>
            <p className='max-w-[647px] text-[16px] max-md:text-center'>Find the best Talent and best works based on your skills from around the world.</p>
            <div className='mt-[28px] max-md:justify-center flex gap-4 max-sm:justigy-center'>
              <button id='run' className='outline px-[36px] py-[12px] rounded-3xl'>Find Talent</button>
              <button id='run' className='outline px-[36px] py-[12px] rounded-3xl'>Find Work</button>
            </div>
          </div>

          <img src={imager} alt="" />

        </div>


      </div>
      <Banner2 />
    </header >
  )
}

export default Header