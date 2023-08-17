"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

const SliderImages = [
  "/assets/brand1.webp",
  "/assets/brand2.webp",
  "/assets/brand3.webp",
  "/assets/brand4.webp",
  "/assets/brand5.webp",
  "/assets/brand6.webp",
  "/assets/brand7.webp",
  "/assets/brand8.webp",
  "/assets/brand9.webp",
  "/assets/brand10.webp",
  "/assets/brand11.webp",
  "/assets/brand12.webp",
  "/assets/brand13.webp",
  "/assets/brand14.webp",
];

const Reviews = () => {
  useEffect(() => {
    new Swiper(".brand-slider", {
      spaceBetween: 10,
      grabCursor: false,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        0: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 7,
        },
        1024: {
          slidesPerView: 10,
        },
      },
    });
  }, []);

  return (
    <div className="px-4 lg:px-20 my-10">
      <div className="swiper brand-slider">
        <div className="swiper-wrapper">
          {SliderImages.map((image, index) => (
            <div key={index} className="swiper-slide box">
              <img src={image} alt={`Client Review ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
