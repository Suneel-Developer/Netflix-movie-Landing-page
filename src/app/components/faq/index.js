"use client";
import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question: "WHAT DOES THE PACKAGE INCLUDE?",
      answer:
        "When you subscribe to IPTVy4K , you get all Live TV, VOD and sports , and so much more.",
    },
    {
      question: "WHAT IS OUR QUALITY SERVERS?",
      answer:
        "We are first the best service provider on internet, and we provide no freezing technology with 99% uptime.",
    },
    {
      question:
        "WHAT GUARANTEES DO YOU OFFER REGARDING THE QUALITY OF SERVICE ?",
      answer:
        "We offer the best performing IPTV service. Our servers are equipped with high bandwidth and antifreeze technology. We also offer a fast delivery service for orders by e-mail. If one of your subscriptions does not work, we always solve the problem or offer alternative subscriptions.",
    },
    {
      question: "HOW WILL I RECEIVE MY SUBSCRIPTION?",
      answer:
        "After making a payment you’ll be contacted via email in less than 1 hour with your logins credentials.",
    },
    {
      question: "CAN I REQUEST A REFUND?",
      answer:
        "Sure, You will be welcomed to request for a refund within 24 Hour after subscribing to any paid plan.",
    },
    {
      question: "DOES THIS SERVICE WORK IN MY COUNTRY?",
      answer:
        "IPTV works all over the world, no matter where you live or where you are. Since you have a stable Internet connection, you will be able to watch thousands of TV channels.",
    },
    // Add more shortened FAQ items
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className=" px-4 lg:px-20 mt-[4rem]">
      <div className="mb-6 text-center ">
        <h2 className="text-[#DA1B32] font-semibold mb-5">FAQ</h2>
        <h1 className="text-4xl font-bold mb-10">Frequently Asked Questions</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="mb-6 md:mb-0">
          <img
            src="/assets/faq.webp"
            alt="FAQ Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="max-w-full">
          <ul>
            {faqs.map((faq, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  activeFaq === index ? "text-red-500" : "text-white"
                }`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <h3
                  className={`bg-[#191919] p-4 text-sm font-medium ${
                    activeFaq === index ? "text-red-500" : "text-white"
                  }`}
                >
                  {faq.question}
                </h3>
                {activeFaq === index && (
                  <p className="mt-2 p-4 text-gray-600">{faq.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
