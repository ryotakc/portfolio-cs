"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import nextConfig from "../next.config";
import { YoutubeDial } from "./youtube-player";
const BASE_PATH = nextConfig.basePath || "";

export function LeoSection() {
  const features = [
    {
      title: "Designing and Developing",
      description:
        "Designing and developing websites and web applications with the latest technologies like React, Next.js, Tailwind CSS, and more.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Photography and Retouching",
      description:
        "Photography and retouching photos with Adobe Lightroom Classic. I love to capture beautiful moments and create beautiful images.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Watching Tech YouTube",
      description:
        "I love to watch tech YouTube channels like typecraft, DevOps Toolbox, and more. I love to learn new things and keep up with the latest technologies.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Using Linux",
      description:
        "I love to use Linux as my daily driver. I use Ubuntu and Arch Linux. I love to customize my desktop and use the terminal.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative z-20 pt-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          My Skills and Hobbies
        </h4>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            Here are some of my favorite things and skills that I love to do.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("p-4 sm:p-8 relative overflow-hidden", className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
    return (
      <div className="relative flex py-2 px-2 gap-4 h-full">
        <div className="w-full p-3 mx-auto shadow-2xl group h-full">
          <div className="flex flex-1 w-full h-full flex-col space-y-2">
            <Image
              src={`${BASE_PATH}/work/Portfolio-first/project1.jpeg`}
              alt="header"
              width={180}
              height={120}
              className="w-full aspect-[3/2] object-cover rounded-md blur-none"
            />
          </div>
        </div>
      </div>
    );
  };
  
  

  export const SkeletonTwo = () => {
    const images = [
      "/photograph/pic1.jpg",
      "/photograph/pic2.jpg",
      "/photograph/pic3.jpg",
      "/photograph/pic4.jpg",
      "/photograph/pic5.jpg",
      "/photograph/pic6.jpg",
    ];
  
    const [randomRotations, setRandomRotations] = useState<number[]>([]);
  
    useEffect(() => {
      const rotations = images.map(() => Math.random() * 20 - 10);
      setRandomRotations(rotations);
    }, []);
  
    return (
      <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
        {/* Row 1 */}
        <div className="flex flex-row -ml-20">
          {images.map((image, idx) => (
            <motion.div
              key={`images-first-${idx}`}
              style={{
                rotate: randomRotations[idx] || 0,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
            >
              <Image
                src={`${BASE_PATH}${image}`}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              />
            </motion.div>
          ))}
        </div>
        {/* Row 2 (Reversed order) */}
        <div className="flex flex-row">
          {images.slice().reverse().map((image, idx) => (
            <motion.div
              key={`images-second-${idx}`}
              style={{
                rotate: randomRotations[idx] || 0,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
            >
              <Image
                src={`${BASE_PATH}${image}`}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  


export const SkeletonThree = () => {
return (
    <div className="mt-6">
       <YoutubeDial /> 
    </div>
    
);
};


export const SkeletonFour = () => {
    return (
      <div className="relative flex py-2 px-2 gap-4 h-full">
        <div className="w-full p-3 mx-auto shadow-2xl group h-full">
          <div className="flex flex-1 w-full h-full flex-col space-y-2">
            <Image
              src={`${BASE_PATH}/work/Linux/Arch1.JPG`}
              alt="header"
              width={180}
              height={120}
              className="w-full aspect-[3/2] object-cover rounded-md blur-none"
            />
          </div>
        </div>
      </div>
    );
  };
  