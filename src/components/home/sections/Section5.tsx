"use client";

import Button from "@/components/Button";
import { Header3, Header4, Header5, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React, { useState } from "react";
import AOS from "aos";


function Section5() {
  const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

  const toggleParagraphVisibility = (index: any) => {
    setOpenedQuestionIndex(openedQuestionIndex === index ? null : index);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  // Array of FAQ items
  const faqs = [
    {
      id: 1,
      question: "Q. What types of photography services do you offer?",
      answer:
        "At Salford Studio, we specialize in various photography services, including weddings, portraits, events, and commercial photography. No matter the occasion, we’re here to capture your unique moments!",
    },
    {
      id: 2,
      question: "Q. How do I book a session?",
      answer:
        "Booking a session is easy! Simply reach out through our Contact Form, and we’ll get back to you to discuss your needs, plan your session, and answer any questions you may have.",
    },
    {
      id: 3,
      question: "Q. What should I wear for my photo session?",
      answer:
        "Choosing your outfit can be part of the fun! We recommend wearing something that makes you feel comfortable and confident. Solid colors often work well, but feel free to add personal touches that reflect your style. If you need more guidance, we’re happy to help during the planning phase!",
    },
    {
      id: 4,
      question: "Q. How long will it take to receive my photos?",
      answer:
        "Typically, you can expect your edited photos within 2-4 weeks after your session. We want to ensure every image is beautifully curated, so we take the time to perfect them!",
    },
    {
      id: 5,
      question: "Q. Do you provide prints or albums?",
      answer:
        "Absolutely! We offer a variety of print and album options to help you showcase your cherished memories. During your consultation, we can discuss the different packages available.",
    },
    {
      id: 6,
      question:
        "Q. What if the weather doesn’t cooperate on the day of my outdoor shoot?",
      answer:
        "No worries! We keep a close eye on the weather forecast and will work with you to reschedule if needed. Your comfort and satisfaction are our top priorities!",
    },
    {
      id: 7,
      question: "Q. Can I bring props or other items to my session?",
      answer:
        "Definitely! We encourage you to bring along props or personal items that reflect your personality or the theme of your session. Let’s make it uniquely you!",
    },
  ];
  return (
    <div>
      <div className=" container1 pt-[24px] xl:pt-[100px] text-p_black">
        {" "}
        <div
          className=" flex flex-col xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>
            Frequently Asked <span className=" text-primary">Questions</span>{" "}
          </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Everything you need to know about our our photography services.
          </Paragraph1>
        </div>
        <div
          className="flex-row items-center justify-center py-4 xl:py-[37px] bg-bg_gray rounded-lg "
          data-aos="flip-up"
        >
          {/* Mapping over FAQ items */}
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`w-full px-4 xl:px-[37px] pt-4 xl:py-[21px] ${
                index !== faqs.length - 1
                  ? "border-b-4 border-[#E4E4E7]"
                  : "xl:-mb-6"
              }`}
            >
              <div
                className="flex items-start   justify-between cursor-pointer"
                onClick={() => toggleParagraphVisibility(faq.id)}
              >
                <Header5 className="text-[18px] w-[250px] xl:w-full font-medium text-primary-50">
                  {faq.question}
                </Header5>
                <button
                  className=" flex justify-center items-center h-4 w-4  cursor-pointer"
                  onClick={() => toggleParagraphVisibility(faq.id)}
                >
                  <img
                    src={
                      openedQuestionIndex === faq.id
                        ? "/icons/dash.svg"
                        : "/icons/plus.svg"
                    }
                    alt=""
                    className=""
                    style={{
                      transform:
                        openedQuestionIndex === faq.id
                          ? "rotate(0deg)" // Keep it static or adjust if necessary
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
              </div>
              <p
                className={`text-[12px] xl:text-[14px]- md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[18px]  overflow-hidden  transition-all pb-4 pt-4 max-w-[90%] duration-300 ${
                  openedQuestionIndex === faq.id ? "max-h-[500px]" : "max-h-0"
                }`}
                style={{ opacity: openedQuestionIndex === faq.id ? "1" : "0" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section5;
