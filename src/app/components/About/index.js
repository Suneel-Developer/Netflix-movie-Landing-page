import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4  my-5 md:my-10 px-4 md:px-20">
      <div className="mb-4 md:mb-0 p-4 md:p-10">
        <img src="/assets/tv.webp" alt="Image" className="w-full h-auto" />
      </div>
      <div className="w-full flex justify-center flex-col text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">All the TV You're Looking For</h1>
        <p className="text-white text-lg py-3">
          Enjoy the Best IPTV Service at affordable prices! Sign up now &amp; get access to over 22,500+ Worldwide Live TV Channels + VODs EPG, that work on all of your favorite devices.
        </p>
        <button className="bg-[#EF233C] text-white px-5 py-3 rounded mt-4 md:mt-6 hover:bg-[#E8223C] w-auto m-auto transform transition-transform hover:-translate-y-1">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
