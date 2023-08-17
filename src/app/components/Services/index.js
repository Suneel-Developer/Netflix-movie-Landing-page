import React from "react";
import { BsGlobe } from "react-icons/bs";
import { FaAward, FaSatelliteDish } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="px-4 lg:px-20 my-10">
      <div className="mb-6 text-center ">
        <h2 className="text-[#DA1B32] font-semibold mb-5">Our great service</h2>
        <h1 className="text-4xl font-bold mb-10">
          Why Subscribe to our Services
        </h1>
      </div>
      <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
        <div className="bg-[#191919] border-[#5F5F5F] border-2  p-5 rounded-lg shadow-md flex text-center justify-center flex-col">
          <FaSatelliteDish className="text-[1px] p-5 w-[70px] h-[70px] text-center flex items-center justify-center rounded-full bg-[#DA1B32] text-white m-auto" />
          <h3 className="text-[20px] my-4 font-semibold ">IPTV</h3>
          <p className="text-white">
            Our server can be accessed from anywhere in the world. An internet
            connection is all you need. Recommended speed +50 Mbps
          </p>
        </div>
        <div className="bg-[#191919] border-[#5F5F5F] border-2  p-5 rounded-lg shadow-md flex text-center justify-center flex-col">
          <RiComputerLine className="text-[1px] p-5 w-[70px] h-[70px] text-center flex items-center justify-center rounded-full bg-[#DA1B32] text-white m-auto" />
          <h3 className="text-[20px] my-4 font-semibold ">Channels & VOD​ </h3>
          <p className="text-white">
            IPTV subscription includes more than 22,000 channels and more than
            120,000 movies and TV shows from 50 different countries. With
            channels for movies, music, sports.
          </p>
        </div>
        <div className="bg-[#191919] border-[#5F5F5F] border-2  p-5 rounded-lg shadow-md flex text-center justify-center flex-col">
          <FaAward className="text-[1px] p-5 w-[70px] h-[70px] text-center flex items-center justify-center rounded-full bg-[#DA1B32] text-white m-auto" />
          <h3 className="text-[20px] my-4 font-semibold ">
            7 days money back guarantee
          </h3>
          <p className="text-white">
            Within 7 days of your purchase you have the option to cancel our
            IPTV subscription if you are not satisfied. Then you will receive a
            full refund from us.
          </p>
        </div>
        <div className="bg-[#191919] border-[#5F5F5F] border-2  p-5 rounded-lg shadow-md flex text-center justify-center flex-col">
          <BsGlobe className="text-[1px] p-5 w-[70px] h-[70px] text-center flex items-center justify-center rounded-full bg-[#DA1B32] text-white m-auto" />
          <h3 className="text-[20px] my-4 font-semibold "> Watch Channels </h3>
          <p className="text-white">
            Watch your favorite programs and series back up to 72 hours.
            Countries that support it: USA / Canada / Australia / UK / Spain /
            Portugal / Poland / Italy / France / Hindi / Arabic / Turkey.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;
