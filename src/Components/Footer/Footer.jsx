import React, { useState } from "react";
import AppStore from "./../../assets/icons/appstr.png";
import PlayMar from "./../../assets/icons/playmrkt.png";

const sections = [
    {
        title: "For clients",
        items: [
            "How to Hire",
            "Talent Marketplace",
            "Project Catalog",
            "Talent Scout",
            "Enterprise",
            "Payroll Services",
            "Direct Contracts",
            "Hire Worldwide",
            "Hire in the USA",
        ],
    },
    {
        title: "For Talent",
        items: [
            "For Talent",
            "How to Find Work",
            "Direct Contracts",
            "Find Freelance Jobs Worldwide",
            "Find Freelance Jobs in the USA",
        ],
    },
    {
        title: "Resources",
        items: [
            "Help & Support",
            "Success Stories",
            "Upwork Reviews",
            "Resources",
            "Blog",
            "Community",
            "Affiliate Program",
        ],
    },
    {
        title: "Company",
        items: [
            "About Us",
            "Leadership",
            "Investor Relations",
            "Careers",
            "Our Impact",
            "Press",
            "Contact Us",
            "Trust, Safety & Security",
            "UK Modern Slavery Statement",
        ],
    },
];

const Footer = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <footer className="bg-[#1F1F1F] text-white">
                <div className="max-w-[1210px] w-full mx-auto pt-[40px] pb-[30px] px-4">
                    <div className="hidden sm:flex flex-wrap gap-[40px] pb-[40px] border-b border-white">
                        {sections.map((sec, i) => (
                            <div key={i} className="leading-[28px] min-w-[150px] flex-1">
                                <p className="font-extrabold text-[12px]">{sec.title}</p>
                                <div className="mt-2 space-y-1">
                                    {sec.items.map((item, j) => (
                                        <p key={j} className="font-semibold text-[12px]">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="min-w-[150px] flex-1">
                            <p className="font-extrabold text-[12px]">Download our App</p>
                            <div className="flex mt-[20px] gap-[8px]">
                                <img src={PlayMar} alt="Play Market" />
                                <img src={AppStore} alt="App Store" />
                            </div>
                        </div>
                    </div>

                    <div className="sm:hidden pb-[30px] border-b border-white">
                        {sections.map((sec, i) => (
                            <div key={i} className="border-b border-gray-700">
                                <button
                                    className="w-full flex justify-between items-center py-3"
                                    onClick={() => toggleSection(i)}
                                >
                                    <span className="font-extrabold text-[14px]">{sec.title}</span>
                                    <span className="text-[18px]">
                                        {openIndex === i ? "−" : "+"}
                                    </span>
                                </button>
                                {openIndex === i && (
                                    <div className="pl-2 pb-3 space-y-1">
                                        {sec.items.map((item, j) => (
                                            <p key={j} className="font-semibold text-[12px]">
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="mt-4">
                            <p className="font-extrabold text-[14px]">Download our App</p>
                            <div className="flex mt-[12px] gap-[8px]">
                                <img src={PlayMar} alt="Play Market" />
                                <img src={AppStore} alt="App Store" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-[40px] mt-[20px] text-center sm:text-left">
                        <p className="text-[10px]">2021-2022 uptechunt</p>
                        <p className="text-[10px]">Terms of Service</p>
                        <p className="text-[10px]">Privacy Policy</p>
                        <p className="text-[10px]">CA Notice at Collection</p>
                    </div>
                </div>
            </footer>


        </>
    );
}



export default Footer;
