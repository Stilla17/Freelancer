import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import card1 from "./../../assets/img/Rectangle 28.png";
import card3 from "./../../assets/img/Rectangle 32.png";
import card4 from "./../../assets/img/Rectangle 34.png";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function TopSkils() {
  const [active, setActive] = useState(null);

  const cards = [
    { img: card1, button: "304k designer", title: "User experience designers", category: "Design & Creative" },
    { img: card3, button: "210k developers", title: "Frontend Developers", category: "Development & IT" },
    { img: card4, button: "150k writers", title: "Content Writers", category: "Writing & Translation" },
    { img: card3, button: "180k marketers", title: "Digital Marketers", category: "Sales & Marketing" },
    { img: card4, button: "120k translators", title: "Translators", category: "Writing & Translation" },
  ];

  const tabs = [
    "Development & IT",
    "Design & Creative",
    "Sales & Marketing",
    "Writing & Translation",
  ];

  // filter qilingan kartalar
  const filteredCards = cards.filter((card) => !active || card.category === active);

  return (
    <div className="max-w-[1240px] mx-auto pt-[80px]">
      <h1 className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[43px] font-bold text-center">
        Top skills categories
      </h1>

      {/* Tabs */}
      <div className="mt-6">
        {/* mobile */}
        <div className="flex sm:hidden overflow-x-auto whitespace-nowrap px-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="inline-block relative pb-2 group mr-6 last:mr-0 flex-shrink-0"
            >
              <span
                className={`transition-colors duration-300 ${active === tab
                  ? "text-[#D22F26]"
                  : "text-[#6F6F6F] group-hover:text-[#D22F26]"
                  }`}
              >
                {tab}
              </span>
              <span
                className={`absolute left-0 right-0 -bottom-[1px] h-[2px] transition-all duration-300 ${active === tab
                  ? "bg-[#D22F26]"
                  : "bg-transparent group-hover:bg-[#D22F26]"
                  }`}
              ></span>
            </button>
          ))}
        </div>

        {/* desktop */}
        <div className="hidden sm:flex justify-center gap-6 md:gap-10 text-[14px] sm:text-[16px] md:text-[18px] font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="relative pb-2 group"
            >
              <span
                className={`transition-colors duration-300 ${active === tab
                  ? "text-[#D22F26]"
                  : "text-[#6F6F6F] group-hover:text-[#D22F26]"
                  }`}
              >
                {tab}
              </span>
              <span
                className={`absolute left-0 right-0 -bottom-[1px] h-[2px] transition-all duration-300 ${active === tab
                  ? "bg-[#D22F26]"
                  : "bg-transparent group-hover:bg-[#D22F26]"
                  }`}
              ></span>
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-[535px] mx-auto text-center text-[#2A1E17] mt-2 sm:mt-3 md:mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>

      {/* Swiper */}
      <div className="mt-[61px] relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mt-[200px]"
        >
          {filteredCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-[#253D9C] w-[285px] h-[235px] rounded-[18px] p-5 cursor-pointer shadow-md pt-[129px] mx-auto">
                <img
                  src={card.img}
                  alt=""
                  className="transition-transform duration-300 hover:-translate-y-2 absolute top-[-160px]"
                />
                <button className="text-[12px] text-white bg-[#3859BF] px-4 rounded-[4px]">
                  {card.button}
                </button>
                <h2 className="text-white text-[23px]">{card.title}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <hr className="w-auto mx-[30px] border-[#D7D7D6] mt-[64px] mb-[50px] border-[1px]" />

        {/* Navigation buttons faqat filteredCards > 4 bo‘lsa */}
        {filteredCards.length > 4 && (
          <div>
            <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-2 md:left-2 lg:-left-6 xl:-left-10 z-10">
              <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-full bg-blue-500 cursor-pointer custom-prev">
                <FiChevronLeft className="text-white text-[20px] md:text-[24px]" />
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-2 md:right-2 lg:-right-6 xl:-right-10 z-10">
              <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-full bg-blue-500 cursor-pointer custom-next">
                <FiChevronRight className="text-white text-[20px] md:text-[24px]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopSkils;
