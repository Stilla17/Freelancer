import React, { useEffect, useState } from 'react'
import backgroundInFilterPage from './../assets/img/backgroundInFilterPage.png';
import Filter from '../Components/Filter/Filter';
import { Rating } from "primereact/rating";

function FilterPage() {


  const [value, setValue] = useState(null);

  return (
    <div>
      <div className="w-full py-[47px] relative">
        <div className='absolute w-full h-[500px] z-[-01] top-[-120px] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${backgroundInFilterPage})` }}></div>
        <div className='w-[1216px] mx-auto'>
            <div>
                <div className='w-full flex'>
                    <input type="text" className='w-full rounded-l-[10px] bg-white py-[17px] pl-[20px] text-[12px]' placeholder='Ux design'/>
                    <button className='px-[24px] bg-[#FF4C4A] text-white rounded-r-[10px]'>Search</button>
                </div>
                <div></div>
            </div>

                    <div className='w-full gap-[20px] flex justify-center mt-[67px] '>
                        <div>
                            <h2 className='text-white text-[14px]'>Advanced Search</h2>
                            <div className='mt-[47px]'>
                                <Filter />
                            </div>
                        </div>
                        <div className='mt-[34px]'>
                            <h2 className='text-white'>Top results</h2>

                            <div className='mt-[47px] shadow-[0px_4px_45px_0px_#0000001F] py-[48px] px-[30px] w-full max-w-[904px] rounded-[10px] bg-white'>


                                <div className='border-b-[#0000001A] border-b-1 h-[200px]'>
                                    <h2>Russian Preschool Content - Categorisation</h2>
                                    <p className='text-[14px] text-[#00000099] my-[9px]'>Fixed-price - Intermediate - Est. Budget: $2,000 - Posted 8 hours ago</p>
                                    <h2 className='text-[14px] text-[#000000B2] '>Hi, *This post is to search for Russian Preschool Lesson Planner* I am looking for someone who has good experience in formulating lesson plans for formative years (Kindergarten/Preschool). We have a set of 100s of works sheets and study materials for 3-6yrs age group and we need help to look at those worksheets and group them in lessons/ categories which the kid's of parents can identify with. <span className='text-[#FF4C4A]'>more</span></h2>
                                    <div className='flex items-center gap-[15px] mt-[9px]'>
                                        <h2 className='text-[12px] text-[#2A1E17]'><span className='text-[#FF4C4A]'>$</span> Fixed Rate</h2>
                                        <div className='flex gap-[9px] '>
                                            <Rating value={value} className='text-xs' onChange={(e) => setValue(e.value)} cancel={false} />
                                            <h2 className='text-[12px] text-[#2A1E1780]'>{value}/5</h2>
                                            <h2 className='text-[12px] text-[#2A1E1780]'>Manhattan, USA</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-[#0000001A] border-b-1 h-[200px]'>
                                    <h2>Russian Preschool Content - Categorisation</h2>
                                    <p className='text-[14px] text-[#00000099] my-[9px]'>Fixed-price - Intermediate - Est. Budget: $2,000 - Posted 8 hours ago</p>
                                    <h2 className='text-[14px] text-[#000000B2] '>Hi, *This post is to search for Russian Preschool Lesson Planner* I am looking for someone who has good experience in formulating lesson plans for formative years (Kindergarten/Preschool). We have a set of 100s of works sheets and study materials for 3-6yrs age group and we need help to look at those worksheets and group them in lessons/ categories which the kid's of parents can identify with. <span className='text-[#FF4C4A]'>more</span></h2>
                                    <div className='flex items-center gap-[15px] mt-[9px]'>
                                        <h2 className='text-[12px] text-[#2A1E17]'><span className='text-[#FF4C4A]'>$</span> Fixed Rate</h2>
                                        <div className='flex gap-[9px] '>
                                            <Rating value={value} className='text-xs' onChange={(e) => setValue(e.value)} cancel={false} />
                                            <h2 className='text-[12px] text-[#2A1E1780]'>{value}/5</h2>
                                            <h2 className='text-[12px] text-[#2A1E1780]'>Manhattan, USA</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-[#0000001A] border-b-1 h-[200px]'>
                                    <h2>Russian Preschool Content - Categorisation</h2>
                                    <p className='text-[14px] text-[#00000099] my-[9px]'>Fixed-price - Intermediate - Est. Budget: $2,000 - Posted 8 hours ago</p>
                                    <h2 className='text-[14px] text-[#000000B2] '>Hi, *This post is to search for Russian Preschool Lesson Planner* I am looking for someone who has good experience in formulating lesson plans for formative years (Kindergarten/Preschool). We have a set of 100s of works sheets and study materials for 3-6yrs age group and we need help to look at those worksheets and group them in lessons/ categories which the kid's of parents can identify with. <span className='text-[#FF4C4A]'>more</span></h2>
                                    <div className='flex items-center gap-[15px] mt-[9px]'>
                                        <h2 className='text-[12px] text-[#2A1E17]'><span className='text-[#FF4C4A]'>$</span> Fixed Rate</h2>
                                        <div className='flex gap-[9px] '>
                                            <Rating value={value} className='text-xs' onChange={(e) => setValue(e.value)} cancel={false} />
                                            <h2 className='text-[12px] text-[#2A1E1780]'>{value}/5</h2>
                                            <h2 className='text-[12px] text-[#2A1E1780]'>Manhattan, USA</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-center items-center mt-[40px]'>
                                    <button className='px-[36px] py-[12px] text-[#FF4C4A] border-[#FF4C4A] border rounded-[100px]'>Load more</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterPage
