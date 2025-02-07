"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";
import aiImage from "../../../assets/tasneem.jpg";
import Link from "next/link";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialIcons = [
  {
    id: "facebook",
    icon: (
      <FaFacebookF
        color="rgba(13, 183, 96, 1)"
        className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] "
      />
    ),
    link: "https://www.facebook.com/t4sn33m.s4h4t",
  },
  {
    id: "twitter",
    icon: (
      <FaTwitter color="rgba(13, 183, 96, 1)" className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] " />
    ),
    link: "https://x.com/TasneemSahat",
  },
  {
    id: "linkedin",
    icon: (
      <FaLinkedinIn
        color="rgba(13, 183, 96, 1)"
        className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] "
      />
    ),
    link: "https://www.linkedin.com/in/tasneem-sahat/",
  },
  {
    id: "github",
    icon: (
      <FaGithub
        color="rgba(13, 183, 96, 1)"
        className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] "
      />
    ),
    link: "https://github.com/t4sn33m-s4h4t/",
  },
];

export default function ClientHomeView({ data }) {

  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className={
            "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          }
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 mt-4 text-2xl lg:text-4xl xl:text-4xl font-medium leading-normal">
              Hi There!
            </h1>
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {data && data.length
                ? data[0]?.heading
                  .split("  ")
                  .map((item, index) => (
                    <span
                      className={`${index === 1
                        ? "text-green-main"
                        : "text-[#000]"
                        }`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </h1>
            <p className="text-[#000] mb-4 text-xl font-bold">
              {data && data.length
                ? data[0]?.summary
                  .split("  ")
                  .map((item, index) => (
                    <span
                      className={`${index === 1
                        ? "text-green-main"
                        : "text-[#000]"
                        }`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </p>

            <motion.div className="flex gap-3 py-2 mb-4 cursor-pointer">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                >
                  <a href={item.link} target="_blank">{item.icon}</a>
                </motion.div>
              ))}
            </motion.div> 
              <button
                className="py-3 px-6 border-[2px] bg-[#fff] border-green-main text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Download CV
              </button> 
          </div>
          <motion.div ref={containerRef} className="flex w-full justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative bg-green-main rounded-xl"
            >
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]  top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000000] absolute"></div>
              <Image
                src={aiImage}
                alt="Profile Picture"
                fill
                quality={100}
                className="object-cover filter grayscale hover:filter-none transition-all duration-300 rounded-xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
