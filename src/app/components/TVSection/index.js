import React from "react";

const TVSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4  my-5 md:my-10 px-4 md:px-20">
      <div className="w-full flex justify-center flex-col text-center md:p-10 p-2">
        <h1 className="text-1xl md:text-4xl font-bold mb-4">
          COMPATIBLE WITH ALL DEVICES.
        </h1>
        <p className="text-[#D1D1D1] text-sm md:text-lg">
          Our <b>IPTV Service</b> is compatible with all your devices, Smart
          TVs, Android Box and Phone, Apple Devices, Amazon Fire Stick, KODI,
          and MAG Box we literally support all kinds of devices.
        </p>
        <button className="bg-[#d90429] mx-auto mt-4 rounded px-4 py-2 cursor-pointer transform transition-transform hover:-translate-y-1">
          GET STARTED
        </button>
      </div>
      <div className="mb-4 md:mb-0 p-4 md:p-10">
        <img src="/assets/mwaretv.webp" alt="Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default TVSection;
