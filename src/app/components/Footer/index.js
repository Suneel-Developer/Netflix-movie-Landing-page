import React from "react";

const Footer = () => {
  return (
    <div className=" mt-16">
      <div className="flex justify-between bg-[#101010] lg:px-20 px-4 py-5">
        <img src="/assets/Logo.png" alt="Logo" className="w-12 md:w-24" />
        <img
          src="/assets/payment-icons.svg"
          alt="Payment Icon"
          className=" w-32 md:w-60"
        />
      </div>
      <div className="flex lg:justify-between justify-center lg:px-20 px-4 py-5 flex-wrap gap-5">
        <ul className="flex justify-between gap-3 text-center">
          <li>
            <a href="#" className=" text-sm hover:text-[#EF233C] ">
              TERMS OF SERVICE
            </a>
          </li>
          <li>
            <a href="#" className=" text-sm hover:text-[#EF233C] ">
              PRIVACY POLICY
            </a>
          </li>
          <li>
            <a href="#" className=" text-sm hover:text-[#EF233C] ">
              REFUND & RETURNS POLICY
            </a>
          </li>
        </ul>
        <p className="text-sm text-center">
          Copyright © 2023 IPTVy4K - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
