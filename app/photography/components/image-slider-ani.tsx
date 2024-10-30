"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import React from "react";

import nextConfig from "../../../next.config";
const BASE_PATH = nextConfig.basePath || "";

export function ImagesSliderAni() {
  const images = [
    `${BASE_PATH}/photograph/pic1.jpg`,
    `${BASE_PATH}/photograph/pic2.jpg`,
    `${BASE_PATH}/photograph/pic3.jpg`,
    `${BASE_PATH}/photograph/pic4.jpg`,
    `${BASE_PATH}/photograph/pic5.jpg`,
    `${BASE_PATH}/photograph/pic6.jpg`,
  ];
  return (
    <ImagesSlider className="h-[25rem] lg:h-[50rem] rounded-md" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Photography is so fun <br /> Enjoy with my photos and presets
        </motion.p>
        <a href="https://instagram.com/leok_can">
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>View All →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>        
        </a>

      </motion.div>
    </ImagesSlider>
  );
}
