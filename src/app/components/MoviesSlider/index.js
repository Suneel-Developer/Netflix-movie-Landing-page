"use client"
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

const SliderImages = [
  "/assets/original-1.webp",
  "/assets/original-2.webp",
];

const MoviesSlider = () => {
  useEffect(() => {
    new Swiper(".moviesSlider", {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        // disableOnInteraction: false,
      },
 
    });
  }, []);

  return (
    <div className="px-4 lg:px-20 mt-24 ">
      <div className="mb-6 text-center flex justify-center flex-col">
        <h2 className="text-[#DA1B32] font-semibold mb-5">Popular Movies & Series</h2>
        <h1 className="text-4xl font-bold mb-4">Stream full season & featured shows</h1>
      </div>

      {/* ============================ Carousel  */}

      <div className="swiper moviesSlider">
        <div className="swiper-wrapper">
          {SliderImages.map((image, index) => (
            <div key={index} className="swiper-slide box">
              <img src={image} alt={`Client Review ${index + 1}`} className=" rounded " />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MoviesSlider;
