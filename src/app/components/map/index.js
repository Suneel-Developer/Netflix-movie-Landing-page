import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Map = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4  my-5 md:my-10 px-4 md:px-20">
        <div className="w-full md:p-10 p-2">
          <h1 className="text-1xl md:text-3xl font-bold mb-4">
            Total 2K Server in <u>198</u> Countries
          </h1>
          <p className="text-[#D1D1D1] text-sm md:text-lg">
            These speed excellent. It’s a fast connection safety Internet
            leading speeds across its network.
          </p>
        </div>
        <div className="mb-4 md:mb-0 p-4 md:p-10">
          <img src="/assets/map.webp" alt="Image" className="w-full h-auto" />
        </div>
      </div>
      <div className=" flex justify-center">
        <button className="m-auto text-center flex justify-center items-center gap-2 bg-[#08D37C] text-white px-8 py-2 rounded hover:bg-[#00d084] ">
          <AiOutlineWhatsApp className=" text-lg " />{" "}
          <a href="#"> REACH US ON WHATSHAP</a>
        </button>
      </div>
    </div>
  );
};

export default Map;
