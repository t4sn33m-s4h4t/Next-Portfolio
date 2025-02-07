"use client";

import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function ClientProjectView({ data }) {
 
  const router = useRouter(); 
 
  return (
    <div
      className="max-w-screen-xl pt-20 pb-2 px-6 sm:px-8 lg:px-16 mx-auto"
      id="project" 
    >
      <AnimationWrapper className="pt-6 sm:pt-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"My Projects".split(" ").map((item, index) => (
              <span key={index} className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}>
                {item}{" "}
              </span>
            ))}
          </h1>
          
        </div>
      </AnimationWrapper>

      <AnimationWrapper>
     

          <Swiper
           slidesPerView={4}
           centeredSlides={true}
           spaceBetween={30}
           grabCursor={true}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination]}
            className="p-4"
          >


            {data && data.length
              ? data.map((item, index) => (
                <>
                <SwiperSlide className="min-w-[340px] flex items-stretch " key={index}>
                  <div className=" shadow relative max-w-[22rem]   transition-all rounded-lg flex flex-col p-4">
                    {/* Project Image */}
                    {item?.image && (
                      <img
                        src={item?.image}
                        alt={item?.name}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                    )}

                    <div className="mt-4">
                      <h3 className="text-2xl text-black-600 capitalize font-extrabold">
                        {item?.name}
                      </h3>
                      <div className="flex justify-between">
                        <p className="text-sm mt-1 bg-green-500 px-2 py-1 rounded-md text-gray-600">{item?.mainTechStack}</p>

                        <p className="text-sm mt-2 text-black-500 capitalize font-bold">
                          {item?.createdAt?.split("T")[0]}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 my-3 text-sm " style={{ textWrap: "auto" }}>
                        {item?.description?.length > 120
                          ? `${item?.description?.substring(0, 120)}...`
                          : item?.description}
                      </p>

                      <div className="text-gray-700 flex flex-wrap" style={{ wordWrap: "break-word" }}>
                        {
                          item?.technologies?.split(",")?.map((w, i) => (
                            <b key={i} className="p-1 rounded-md bg-gray-100 mr-2 mb-2">{w.trim()}</b>
                          ))
                        }
                      </div>

                    </div>

                    {/* Buttons */}
                    <div className="w-full flex justify-center gap-2 mt-4">
                      {item?.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-white font-semibold text-[14px] bg-green-main rounded-md transition-all"
                        >
                          Website
                        </a>
                      )}
                      {item?._id && (
                        <button
                          onClick={() => router.push(`/projects/${item?._id}`)}
                          className="p-2 text-white font-semibold  text-[14px] bg-blue-500 rounded-md transition-all"
                        >
                          View More
                        </button>
                      )}
                      {item?.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-white font-semibold text-[14px] bg-green-main rounded-md transition-all"
                        >
                          GitHub
                        </a>
                      )}
                    </div>

                  </div>
                </SwiperSlide>
              </>
              ))
              : null}

          </Swiper>
      </AnimationWrapper>

    </div>
  );
}
