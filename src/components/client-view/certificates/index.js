"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import AnimationWrapper from "../animation-wrapper";

// ✅ Import Lightbox and Plugins
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom, Fullscreen, Download } from "yet-another-react-lightbox/plugins";

export default function Certificates() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(-1); // ✅ Track the clicked image index

  useEffect(() => {
    fetch("/api/certificates/get") // ✅ Ensure correct API URL
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
      })
      .catch((error) => console.error("❌ Fetch error:", error));
  }, []);

  return (
    <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-20 mx-auto" id="certificate">
      <AnimationWrapper className="pt-6 sm:pt-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"My Certificates".split(" ").map((item, index) => (
              <span key={index} className={`${index === 1 ? "text-green-main stylish" : "text-[#000]"}`}>
                {item}{" "}
              </span>
            ))}
          </h1>
          <p className="text-[#000] mt-1 mb-8 font-bold">Click to View the Certifications</p>
        </div>
      </AnimationWrapper> 
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        className="p-4 h-[19rem] mt-4"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {images.length === 0 ? (
          <p className="text-center">Loading certificates...</p>
        ) : (
          images.map((src, index) => (
            <SwiperSlide key={index} className="h-[30%] shadow-md">
              {/* ✅ Open Lightbox on Click */}
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full object-cover h-full rounded-lg shadow-md cursor-pointer"
                onClick={() => setIndex(index)} // ✅ Set index when clicked
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>

      {/* ✅ Lightbox for Viewing Images */}
      <Lightbox
        plugins={[Zoom, Fullscreen, Download]} // ✅ Add useful plugins
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
      />
    </div>
  );
}
