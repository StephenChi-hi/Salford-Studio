"use client";

import Button from "@/components/Button";
import {
  Header3,
  Header4,
  Paragraph1,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import RandomFaces from "./others/RandomFaces";

function Section2() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div>
      <div className=" container1 pt-[24px] xl:pt-[100px]  text-p_black">
        {" "}
        <div
          className=" flex flex-col gap-[8px] xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>
            Where Your <span className=" text-primary">Story</span> Takes Center
            Stage
          </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Every photo we take reflects not just what we see but the emotions,
            milestones, and joy that make your moment unique.
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-5  sm:grid-cols-1 gap-[24px] xl:gap-[30px]">
          <div className="  xl:col-span-3">
            <div
              className=" bg-bg_gray rounded-lg overflow-hidden "
              data-aos="fade-right"
            >
              <img
                src="/images/section2_img1.jpg"
                alt="branding"
                className="w-full"
              />{" "}
              <div className=" space-y-[24px] xl:space-y-[32px] p-[24px] xl:p-[32px] flex flex-col w-full">
                <Header4>Let{"'"}s Create Something Beautiful Together</Header4>{" "}
                <Paragraph1>
                  Whether you're getting married, need a family portrait, or
                  want to capture a special event, we're here to tell your story
                  the way it deserves to be told—beautifully, professionally,
                  and effortlessly.
                </Paragraph1>
                <Button
                  text="Book A Session"
                  href="/contact-us"
                  isLink={true}
                  additionalClasses="border-0 xl:w-fit w-full "
                />
              </div>
            </div>
          </div>
          <div className=" xl:col-span-2 space-y-[24px] xl:space-y-[30px]">
            <div className=" bg-bg_gray rounded-lg " data-aos="fade-down-left">
              <div className="space-y-[24px] xl:space-y-[32px] p-[24px] xl:p-[32px]">
                <Header4>Creating Together</Header4>{" "}
                <Paragraph1>
                  At Salford Studio, our goal is to make capturing your special
                  moments a fun and memorable experience. We{"'"}re all about
                  working together to bring your vision to life, ensuring that
                  every photo reflects your personality and joy.
                </Paragraph1>
                <RandomFaces />
              </div>
            </div>
            <div
              className=" bg-primary relative overflow-hidden text-white rounded-lg "
              data-aos="fade-up-left"
            >
              <div className=" absolute bottom-0 -right-[150px] flex w-full justify-end  ">
                <div
                  style={{ transform: "rotate(-36deg)" }}
                  className=" h-8 w-[200px]- w-full border-4 border-white"
                >
                  {" "}
                </div>
              </div>
              <div className="xl:space-y-[6px] 2xl:space-y-[32px] space-y-[24px] p-[24px] xl:p-[32px]">
                <div className=" flex w-full justify-end  ">
                  <div className=" h-[40px] w-[50px]">
                    <div className=" relative h-[40px] w-[50px]">
                      <div
                        style={{ transform: "rotate(-12deg)" }}
                        className=" rounded-lg border-4 relative border-white  bg-primary h-[40px] w-[50px]"
                      ></div>
                      <div
                        style={{ transform: "rotate(8deg)" }}
                        className=" bg-primary h-full w-full overflow-hidden absolute -top-[20px] -right-[20px] p-4 border-4 border-white rounded-lg object-cover"
                      ></div>
                    </div>
                  </div>{" "}
                </div>
                <Header4>Here to Help You Shine</Header4>{" "}
                <Paragraph1>
                  Whether it{"'"}s choosing the perfect location or styling your
                  session, our goal is to ensure you feel comfortable and
                  confident in front of the camera. Together, we{"'"}ll create
                  stunning images that capture your unique essence!
                </Paragraph1>
                <div>
                  <Link
                    href="/contact-us"
                    className=" text-[20px] font-bold text-white underline"
                  >
                    <ParagraphLink1> Contact us</ParagraphLink1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
