"use client";


import { Header3, Header4, Paragraph1, Paragraph2, ParagraphLink1 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function Section4() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className=" bg-bg_gray">
      <div className=" container1 py-[24px] xl:py-[100px]  text-p_black">
        {" "}
        <div
          className=" flex flex-col xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3 className=" text-center">
            Our <span className=" text-primary">Simple 3-Steps</span> Approach
            to Exceptional <span className=" text-primary">Photography</span>
          </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            At Salford Studio, we believe that capturing your special moments
            should be a seamless and enjoyable experience.
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-6 gap-[24px] xl:gap-[30px]">
          <div className=" xl:col-span-2">
            <div
              className=" bg-[#e1ceff] py-[24px] xl:py-[53px] p-[32px] rounded-lg "
              data-aos="fade-right"
            >
              <div className="space-y-[24px] xl:space-y-[32px]    ">
                <div className=" flex w-full justify-end-  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                    />
                  </svg>
                </div>
                <Header4>Connect & Plan</Header4>{" "}
                <Paragraph2>
                  We believe every great photo starts with a conversation.
                  During our initial consultation, we’ll get to know you,
                  understand your vision, and discuss the details of your
                  session. Together, we’ll plan everything from the location to
                  the style, ensuring it reflects your unique personality and
                  story.
                </Paragraph2>
                <div>
                  <Link
                    href="/contact-us"
                    className=" text-[20px] font-bold  underline"
                  >
                    <ParagraphLink1> Start the Conversation</ParagraphLink1>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" xl:col-span-2 ">
            <div className=" bg-[#c7cbb9]  rounded-lg " data-aos="fade-up">
              <div className="space-y-[24px] xl:space-y-[32px] p-[32px] py-[24px]  xl:py-[53px]">
                <div className=" flex w-full justify-end-  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                  </svg>
                </div>
                <Header4>Capture the Moment</Header4>{" "}
                <Paragraph2>
                  On the day of your session, our team will create a relaxed and
                  fun atmosphere, allowing your true self to shine through.
                  Whether it{"'"}s a wedding, a family gathering, or a creative
                  shoot, we{"'"}ll capture those genuine moments that matter
                  most to you, all while keeping the experience enjoyable and
                  stress-free.
                </Paragraph2>
                <div>
                  <Link
                    href="/contact-us"
                    className=" text-[20px] font-bold  underline"
                  >
                    <ParagraphLink1> Book Your Session </ParagraphLink1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" xl:col-span-2 ">
            <div className=" bg-[#ff7878]  rounded-lg " data-aos="fade-left">
              <div className="space-y-[24px] xl:space-y-[32px] p-[32px] py-[24px]  xl:py-[53px]">
                <div className=" flex w-full justify-end-  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                </div>
                <Header4>Cherish & Share</Header4>
                <Paragraph2>
                  After your session, we{"'"}ll carefully curate and edit your
                  photos to highlight the beauty of your moments. You{"'"}ll
                  receive a stunning collection of images that you can cherish
                  for a lifetime. Plus, we{"'"}ll help you explore ways to
                  showcase your memories, whether through prints, albums, or
                  digital galleries.
                </Paragraph2>
                <div>
                  <Link
                    href="/contact-us"
                    className=" text-[20px] font-bold  underline"
                  >
                    <ParagraphLink1>See Your Memories Shine </ParagraphLink1>
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

export default Section4;
