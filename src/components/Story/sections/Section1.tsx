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

function Section1() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });


  return (
    <div>
      {" "}
      <div className=" container1 py-[24px] xl:py-[100px] text-p_black">
        {" "}
        <div
          className=" flex xl:gap-[24px] flex-col items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>Our Story</Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Photography with Heart, capturing meaningful stories with passion
            and authenticity.{" "}
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-6 gap-[24px] xl:gap-[30px] items-center">
          <div className=" xl:col-span-3">
            <div
              className=" bg-bg_gray rounded-lg p-[31px] "
              data-aos="fade-right"
            >
              <img
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/w_1000,f_auto/v1729518941/utilities/templates/pxdfghjk_pfzu6t.jpg"
                alt="photographer"
                className="w-full rounded-lg"
              />{" "}
            </div>
          </div>
          <div className=" xl:col-span-3 space-y-[24px] xl:space-y-[30px]">
            <div className="  " data-aos="fade-left">
              <div className="xl:space-y-[32px] space-y-[24px] text-justify ">
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
                  imagery. She wanted to build a space where creativity
                  flourishes and clients feel comfortable expressing their
                  stories. Together with her team, Emma aims to deliver
                  exceptional experiences and stunning photos that will be
                  cherished for years to come.
                </Paragraph1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-[24px] xl:mt-[64px] space-y-[24px] xl:space-y-[64px] text-justify "
          data-aos="zoom-in"
        >
          <Paragraph1>
            Together with her talented team, Emma is committed to delivering
            more than just photos—she wants to offer exceptional experiences
            that reflect the unique personalities and stories of those she works
            with. Every click of the camera is an opportunity to create
            something authentic, meaningful, and timeless.
          </Paragraph1>
          <Paragraph1>
            Whether you{"'"}re celebrating a milestone, launching a new venture,
            or simply embracing everyday moments, Salford Studio is here to
            ensure that your experience is as enjoyable and effortless as it is
            memorable. Let{"'"}s work together to capture your story in a way
            that feels true to who you are—because the best photos are the ones
            that celebrate you.
          </Paragraph1>
        </div>
      </div>
    </div>
  );
}

export default Section1;
