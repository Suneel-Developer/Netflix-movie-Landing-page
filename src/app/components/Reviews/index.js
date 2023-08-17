"use client"
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaBusinessTime, FaLaughBeam } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const SliderImages = [
  "/assets/rev1.webp",
  "/assets/rev2.webp",
  "/assets/rev3.webp",
  "/assets/rev4.webp",
  "/assets/rev5.webp",
  "/assets/rev6.webp",
];

const Reviews = () => {
  useEffect(() => {
    new Swiper(".reviews-slider", {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <div className="px-4 lg:px-20 my-10">
      <div className="mb-6 text-center flex justify-center flex-col">
        <h2 className="text-[#DA1B32] font-semibold mb-5">Our Customers</h2>
        <h1 className="text-4xl font-bold mb-4">Feedback from our customers</h1>
        <img
          src="/assets/Trustpilot.png"
          alt="Trustpilot"
          className="w-60 md:w-96 text-center mx-auto mb-10"
        />
      </div>

      {/* ============================ Carousel  */}

      <div className="swiper reviews-slider">
        <div className="swiper-wrapper">
          {SliderImages.map((image, index) => (
            <div key={index} className="swiper-slide box">
              <img src={image} alt={`Client Review ${index + 1}`} className=" rounded " />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-5 flex text-center justify-center flex-col">
          <FaBusinessTime className="mx-auto text-[#EF233C] text-6xl" />
          <h1 className="text-4xl my-3 font-bold">5 Years</h1>
          <span className="text-white">In Business</span>
        </div>
        <div className="p-5 flex text-center justify-center flex-col">
          <FaLaughBeam className="mx-auto text-[#EF233C] text-6xl" />
          <h1 className="text-4xl my-3 font-bold">3,000 +</h1>
          <span className="text-white">Satisfied Customers</span>
        </div>
        <div className="p-5 flex text-center justify-center flex-col">
          <AiFillPlayCircle className="mx-auto text-[#EF233C] text-6xl" />
          <h1 className="text-4xl my-3 font-bold">1,00,000+</h1>
          <span className="text-white">Films & Series</span>
        </div>
        <div className="p-5 flex text-center justify-center flex-col">
          <RiComputerLine className="mx-auto text-[#EF233C] text-6xl" />
          <h1 className="text-4xl my-3 font-bold">17,000 +</h1>
          <span className="text-white">Channels</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
