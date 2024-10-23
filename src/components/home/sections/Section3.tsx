"use client";

import {
  Header3,
  Header4,
  Paragraph1,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";


function Section3() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });


  return (
    <div>
      {" "}
      <div className=" container1 py-[24px] xl:py-[100px]  text-p_black">
        {" "}
        <div
          className=" flex xl:gap-[24px] flex-col items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>Get to Know Emma </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Your Friendly Photographer and Creative Artist
          </Paragraph1>
        </div>
        <div className=" grid col-span-1 xl:items-center xl:grid-cols-6 gap-[24px] xl:gap-[30px]">
          <div className=" xl:col-span-3">
            <div
              className=" bg-bg_gray rounded-lg p-[31px] overflow-hidden "
              data-aos="fade-left"
            >
              <img
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729518941/utilities/templates/pxdfghjk_pfzu6t.jpg"
                alt="branding"
                className="w-full rounded-lg"
              />{" "}
            </div>
          </div>
          <div className=" xl:col-span-3  xl:space-y-[30px]">
            <div className="  " data-aos="fade-right">
              <div className="space-y-[12px]  xl:space-y-[32px] md:space-y-[32px]">
                <Header4>Celebrating Your Moments</Header4>{" "}
                <Paragraph1>
                  Emma, along with her talented team, is the driving force
                  behind Salford Studio. With a deep passion for photography and
                  a commitment to storytelling, Emma was inspired to create this
                  brand to help people celebrate their unique moments. She
                  believes that every life event—big or small—deserves to be
                  beautifully captured.
                </Paragraph1>
                <Paragraph1>
                  Emma's motivation stems from her love for connecting with
                  others and showcasing their true selves through artful
                  imagery.
                </Paragraph1>
                <div>
                  <Link
                    href="/about-us"
                    className=" text-[20px] text-primary font-bold underline "
                  >
                    <ParagraphLink1> Read More</ParagraphLink1>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
