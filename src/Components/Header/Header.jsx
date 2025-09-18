import React from 'react'
import imager from './../../assets/img/Frame.png';
import Nav from '../Nav/Nav'
import Banner2 from '../Banner2/Banner2';

const Header = () => {
  return (
    <header className=' m-auto'>
      <div className='max-w-[1220px] m-auto'>
        <Nav />


      </div >
      <div className='bg flex justify-between lg:flex-row items-center max-md-text-center flex-col-reverse'>
        <div className='text-white'>
          <h1 className=' text-[43px] max-w-[690px] font-bold max-md:text-4xl max-lg:text-5xl max-md:text-center'>Join world’s best market place</h1>
          <div className=''>
            <p className='max-w-[647px] text-[16px] max-md:text-center'>Find the best Talent and best works based on your skills from around the world.</p>
          </div>
          <div className='mt-[28px] max-md:justify-center flex max-sm:justigy-center'>
            <button id='run' className='px-[36px] py-[12px] rounded-3xl'>Find Talent</button>
            <button id='run' className='px-[36px] py-[12px] rounded-3xl'>Find Work</button>
          </div>
        </div>
        <div className=''>
          <img src={imager} alt="" />

        </div>
      </div>
      <Banner2 />
    </header>
  )
}

export default Header