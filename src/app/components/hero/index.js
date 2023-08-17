import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/background-1.webp')] bg-slate-400 bg-cover -z-10 relative bg-center h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]"></div>

      <div className="container flex justify-center items-center flex-col gap-3 mx-auto text-center max-w-full md:max-w-[50%]">
        <h2 className="text-4xl md:text-6xl font-[600] text-white mb-2 md:mb-4 leading-[50px]">
          Best <u>IPTV</u> SUBSCRIPTION PROVIDER
        </h2>
        <p className="text-lg md:text-md text-white">
          With our service, you can access thousands of channels from around the
          world,&nbsp;thousands of movies, and hundreds of series!
        </p>
        <button className="bg-[#d90429] rounded px-4 py-2 cursor-pointer transform transition-transform hover:-translate-y-1">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Hero;
