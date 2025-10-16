import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import user from './../../assets/img/userPhoto.jpg';
import flagUSA from './../../assets/img/Rectangle 72.png';
import watch from './../../assets/img/Group 91.png';
import yorliq from './../../assets/img/Group 92.png';
import { Rating } from "primereact/rating";
import money from './../../assets/img/Group 90.png';
import Bank from './../../assets/img/Ellipse 12.png';
import { LuUser } from "react-icons/lu";
import { TfiMoney } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import img1 from './../../assets/img/Rectangle 75.png';
import img2 from './../../assets/img/Rectangle 76.png';
import img3 from './../../assets/img/Rectangle 77.png';
import avatarka from './../../assets/img/Avatar(1).png';
import background from './../../assets/img/backgroundInFilterPage.png';

function HomepageView() {
    const [value, setValue] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowMessage(true), 100);
        const timer2 = setTimeout(() => setShowMessage(false), 3100);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div>
            <div className="relative">
                <div className="absolute bg-center bg-cover w-full h-[415px] z-[-10]" style={{ backgroundImage: `url(${background})` }}></div>
            </div>

            <div className="max-w-[1240px] mx-auto pt-[80px] px-4">
                <div className="relative">
                    <div
                        className={`transition-all duration-700 ease-in-out transform 
                        ${showMessage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} 
                        w-full md:w-[589px] h-[35px] bg-white rounded-md mx-auto flex items-center pl-[15px] shadow-lg`}
                    >
                        <div className="w-full md:w-[560px] flex items-center justify-between">
                            <h1 className="text-[13px] md:text-[15px]">
                                <span className="text-[#FF4C4A] font-bold">Congratulation</span>, you have successfully created your account
                            </h1>
                            <IoClose className="w-[20px] h-[20px]" />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between mt-[50px] gap-5">
                        <div className="w-full lg:w-[804px] bg-white rounded-md shadow-2xl p-4">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-[30px]">
                                <div>
                                    <img className='w-[200px] h-[200px] object-cover rounded-md' src={user} alt="" />
                                    <p className='flex items-center gap-[10px] pl-[10px] pt-[10px] text-[12px]'><img src={flagUSA} alt="" /> Manhattan, USA</p>
                                    <p className='flex items-center gap-[10px] pl-[10px] pt-[10px] text-[12px]'><img src={watch} alt="" />It's currently 4:45 PM here</p>
                                    <p className='flex items-center gap-[10px] pl-[10px] pt-[10px] text-[12px]'><img src={yorliq} alt="" />Joined September 1, 2013</p>
                                </div>
                                <div className="w-full md:w-[512px]">
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                                        <div>
                                            <h1 className='text-[22px] md:text-[26px] font-bold'>Adam Smith</h1>
                                            <p className='text-[#2A1E1780] text-[14px] md:text-[15px]'>User Experience Designer, Graphic Designer</p>
                                        </div>
                                        <button className='rounded-[50px] border-[#FF4C4A] text-[#FF4C4A] border-2 px-[20px] py-[5px] text-[14px]'>Edit Profile</button>
                                    </div>

                                    <div className="mt-[15px] flex flex-col gap-2">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <div>
                                                <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} />
                                                <div className="flex items-center gap-[5px]">
                                                    <h2 className="text-[12px] text-[#2A1E1780]">{value}/5</h2>
                                                    <h2 className="text-[12px] text-[#2A1E1780]">(12 Reviews)</h2>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-[5px]">
                                                <img src={money} alt="" />
                                                <div>
                                                    <p className="text-[12px]">50USD/ Hr</p>
                                                    <p className="text-[#2A1E1780] text-[10px]">Total earnings- 10k USD</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-[5px]">
                                                <img src={Bank} alt="" />
                                                <p className="text-[12px]">24 projects completed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-[14px] mt-[10px]">
                                        <p>I am a talented and experienced Graphic Design Designer looking to be hired. In my work experience I have versatility as a Website Design Developer working on many different projects. I will try to put in my best foot and help you in accomplishing your goals to reach your targeted task. I will involve myself sincerely in your team and can handle as an autonomous person too. You can trust on me for any of your assignments and I will deliver the result in a prompt manner. I am looking forward to be outsourced by you <span className="text-[#FF4C4A]">See more..</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[392px] bg-white rounded-md shadow-2xl p-4">
                            <h2 className="text-[20px] font-bold">Verification</h2>
                            <hr className="w-full border-gray-400 mt-[15px]" />
                            <div className="mt-[25px] flex flex-col gap-5">
                                {[
                                    { icon: <LuUser />, text: "Identity verified" },
                                    { icon: <TfiMoney />, text: "Payment Verified" },
                                    { icon: <IoCallOutline />, text: "Phone Verified" },
                                    { icon: <MdOutlineMail />, text: "Email Verified" },
                                    { icon: <FiFacebook />, text: "Facebook Verified" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-[10px]">
                                            {item.icon}
                                            <p className="text-[16px]">{item.text}</p>
                                        </div>
                                        <button className="text-sm text-blue-600 font-medium hover:underline">Verify</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-[50px] gap-5">
                        <div className="w-full lg:w-[804px] bg-white rounded-md p-[10px] shadow-2xl">
                            <div className="w-full flex items-center justify-between px-[15px] pt-[10px]">
                                <h2 className="font-bold text-[20px]">My Portfolio</h2>
                                <div className="flex items-center gap-[15px]">
                                    <RiDeleteBinLine className="w-[20px] h-[20px]" />
                                    <button className="rounded-[50px] border-[#FF4C4A] text-[#FF4C4A] border-2 px-[20px] py-[5px] text-[14px]">Edit Portfolio</button>
                                </div>
                            </div>

                            <hr className="w-full border-gray-400 mt-[10px]" />

                            <div className="flex flex-wrap justify-center lg:justify-between gap-[15px] p-[10px] mt-[20px]">
                                {[img1, img2, img3].map((img, i) => (
                                    <div key={i} className="w-[240px] h-[160px]">
                                        <img src={img} alt="" className="w-full h-full object-cover rounded-md" />
                                    </div>
                                ))}
                            </div>
                            <h2 className="text-xl text-blue-600 font-medium hover:underline text-center pt-[10px]">View All</h2>
                        </div>

                        <div className="w-full lg:w-[392px] bg-white rounded-md shadow-2xl p-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-[20px] font-bold">Top Skills</h2>
                                <button className="text-[#FF4C4A] border-[#FF4C4A] border-2 rounded-[50px] px-[20px] py-[5px] text-[14px]">Edit Skills</button>
                            </div>
                            <hr className="w-full border-gray-400 mt-[15px]" />
                            <div className="mt-[20px] space-y-3 text-[14px]">
                                <p>User Interface Design</p>
                                <p>Graphics Design</p>
                                <p>Logo Design</p>
                                <p>Animation</p>
                                <p>Branding</p>
                                <h2 className="text-xl text-blue-600 font-medium hover:underline text-center pt-[10px]">See more</h2>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[10px]">
                        <div className="w-full max-w-[804px] bg-white rounded-md p-[10px] shadow-2xl">
                            <div className="w-full flex items-center justify-between px-[15px] pt-[10px]">
                                <h2 className="font-bold text-[20px]">Reviews</h2>
                            </div>

                            <hr className="w-full border-gray-400 mt-[10px]" />
                            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-[20px] sm:ml-[30px] pt-[20px]">

                                <div className="bg-[#F3F3F3] w-full sm:w-[348px] h-auto sm:h-[206px] rounded-md p-[10px]">
                                    <div className="flex flex-col sm:flex-row justify-between gap-[10px] sm:gap-[15px] mt-[10px]">
                                        <img className="w-[70px] h-[58px] mx-auto sm:mx-0" src={avatarka} alt="" />
                                        <p className="text-[#333333] text-[12px] text-center sm:text-left">
                                            The freelance talent we work with are more productive than we ever thought possible.
                                            The freelance talent we work with are more productive than.
                                        </p>
                                    </div>
                                    <div className="sm:ml-[75px] mt-[10px] text-center sm:text-left">
                                        <h2 className="text-[#333333] font-bold">Sam Crockett</h2>
                                        <h2 className="text-[#333333] pt-[5px] sm:pt-[10px] text-[13px]">Independent Web Developer</h2>
                                    </div>
                                </div>

                                <div className="bg-[#F3F3F3] w-full sm:w-[348px] h-auto sm:h-[206px] rounded-md p-[10px]">
                                    <div className="flex flex-col sm:flex-row justify-between gap-[10px] sm:gap-[15px] mt-[10px]">
                                        <img className="w-[70px] h-[58px] mx-auto sm:mx-0" src={avatarka} alt="" />
                                        <p className="text-[#333333] text-[12px] text-center sm:text-left">
                                            The freelance talent we work with are more productive than we ever thought possible.
                                            The freelance talent we work with are more productive than.
                                        </p>
                                    </div>
                                    <div className="sm:ml-[75px] mt-[10px] text-center sm:text-left">
                                        <h2 className="text-[#333333] font-bold">Sam Crockett</h2>
                                        <h2 className="text-[#333333] pt-[5px] sm:pt-[10px] text-[13px]">Independent Web Developer</h2>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-xl text-blue-600 font-medium hover:underline text-center pt-[20px]">View All</h2>
                        </div>
                    </div>

                    <div className="mt-[10px]">
                        <div className="w-full max-w-[804px] bg-white rounded-md p-[10px] shadow-2xl">
                            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between px-[15px] pt-[10px] gap-[10px]">
                                <h2 className="font-bold text-[20px]">Work Experience</h2>
                                <div className="flex items-center gap-[15px] sm:gap-[25px]">
                                    <RiDeleteBinLine className="w-[20px] h-[20px]" />
                                    <button className="rounded-[50px] border-[#FF4C4A] text-[#FF4C4A] border-2 px-[20px] py-[5px] text-[14px] sm:text-[16px]">Experience</button>
                                </div>
                            </div>

                            <hr className="w-full border-gray-400 mt-[10px]" />
                            <div className="ml-[10px] sm:ml-[15px]">
                                <h2 className="text-[#333333] font-bold text-[14px] pt-[20px]">User Experience Designer | TCS</h2>
                                <p className="text-[#333333] text-[14px] pt-[5px]">2019 - 2021</p>
                                <p className="text-[#2A1E17] text-[14px] pt-[15px] sm:pt-[20px] sm:w-[721px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                            <h2 className="text-xl text-blue-600 font-medium hover:underline text-center pt-[20px]"> View All</h2>
                        </div>
                    </div>

                    <div className="mt-[10px] pb-[20px]">
                        <div className="w-full max-w-[804px] bg-white rounded-md p-[10px] shadow-2xl">
                            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between px-[15px] pt-[10px] gap-[10px]">
                                <h2 className="font-bold text-[20px]">Education</h2>
                                <div className="flex items-center gap-[15px] sm:gap-[25px]">
                                    <RiDeleteBinLine className="w-[20px] h-[20px]" />
                                    <button className="rounded-[50px] border-[#FF4C4A] text-[#FF4C4A] border-2 px-[20px] py-[5px] text-[14px] sm:text-[16px]"> Edit Experience</button>
                                </div>
                            </div>
                            <hr className="w-full border-gray-400 mt-[10px]" />
                            <div className="ml-[10px] sm:ml-[15px]">
                                <h2 className="text-[#333333] font-bold text-[14px] pt-[20px]">Master in Design | MIT</h2>
                                <p className="text-[#333333] text-[14px] pt-[5px]">2019 - 2021</p>
                                <p className="text-[#2A1E17] text-[14px] pt-[15px] sm:pt-[20px] sm:w-[721px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                            <h2 className="text-xl text-blue-600 font-medium hover:underline text-center pt-[20px]">View All</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomepageView;
