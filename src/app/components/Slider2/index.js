"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import { BiSolidRocket } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";
import { FaTeamspeak } from "react-icons/fa";

const SliderImages = [
  "/assets/image1.webp",
  "/assets/image2.webp",
  "/assets/image3.webp",
  "/assets/image4.webp",
  "/assets/image5.webp",
  "/assets/image1.webp",
  "/assets/image3.webp",
  "/assets/image5.webp",
];

const Slider = () => {
  useEffect(() => {
    new Swiper(".slider", {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 9500,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      },
    });
  }, []);

  return (
    <div className="px-4 lg:px-20 mt-6">
      <div className="swiper slider">
        <div className="swiper-wrapper">
          {SliderImages.map((image, index) => (
            <div key={index} className="swiper-slide box">
              <img
                src={image}
                alt={`Client Review ${index + 1}`}
                className=" rounded "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 hidden md:grid grid-cols-3 gap-1">
        <div className="bg-[#191919] rounded-bl-lg rounded-tl-lg py-10 px-5 flex gap-5 border-l-4 border-l-[#EF233C]">
          <div>
            <BiSolidRocket className="p-4 w-[70px] h-[70px] rounded-full bg-[#282828] text-[#EF233C]" />
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-2">
              Fastest IPTV Service​
            </h3>
            <p className="text-[#C8C8C8]">
              We provide the fastest IPTV service, our servers located in every
              country to ensure the best quality for you.​
            </p>
          </div>
        </div>
        <div className="bg-[#191919] py-10 px-5 flex gap-5">
          <div>
            <RiComputerLine className="p-4 w-[70px] h-[70px] rounded-full bg-[#282828] text-[#EF233C]" />
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-2">
              High Streaming Quality
            </h3>
            <p className="text-[#C8C8C8]">
              We provide the best streaming in 4K/FHD/HD/SD to ensure you get
              the best playback experience on television.​
            </p>
          </div>
        </div>
        <div className="bg-[#191919] rounded-br-lg rounded-tr-lg py-10 px-5 flex gap-5 border-r-4 border-r-[#EF233C]">
          <div>
            <FaTeamspeak className="p-4 w-[70px] h-[70px] rounded-full bg-[#282828] text-[#EF233C]" />
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-2">Live Support</h3>
            <p className="text-[#C8C8C8]">
              We provide different contact method. So you can contact us any
              time. Join us via WhatsApp or email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
