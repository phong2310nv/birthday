"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedText from "@/components/shared/AnimatedText";
import ContentBirthday from "./ContentBirthday";

const allGifs = [
  "/gif/gif-1.gif",
  "/gif/gif-2.gif",
  "/gif/gif-3.gif",
  "/gif/gif-4.gif",
  "/gif/gif-5.gif",
];

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const ContentBody = () => {
  const [bearGif, setBearGif] = useState<string>(allGifs[0]);
  const [finishFirst, setFinishFirst] = useState<boolean>(false);

  useEffect(() => {
    const bearGifInterval = setInterval(() => {
      const random = Math.floor(Math.random() * allGifs.length);
      setBearGif(allGifs[random]);
    }, 3000);

    return () => {
      clearInterval(bearGifInterval);
    };
  }, []);

  return (
    <>
      <div className="w-[130px] h-[130px] rounded-full relative overflow-hidden border-[1px] border-white">
        <div className="absolute w-full h-full top-0 left-0 z-1 bg-white opacity-35" />
        <Image
          src={bearGif}
          alt="Gif"
          width={100}
          height={100}
          priority
          className="m-auto rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-2 object-cover"
        />
      </div>

      <div className="mt-[20px] font-semibold text-white">
        <AnimatedText
          text="Xin chào Công Chúa Uyển Nhi nhé ✨"
          delay={1}
          end={500}
          setFinish={setFinishFirst}
        />
      </div>
      {finishFirst && (
        <motion.div
          variants={containerVariants}
          animate="visible"
          initial="hidden"
          className="w-[90%] max-w-[440px] mt-[20px] mx-auto border border-white rounded-tl-lg rounded-br-lg p-[10px]"
        >
          <div className="bg-white/50 p-[14px] text-sm rounded-tl-xl rounded-br-xl text-white transition-all duration-200">
            <p className="w-full font-small">
              Từ người đàn ông xấu xa thương em nhất trên đời 😍
            </p>
           
            <ContentBirthday />
          </div>
        </motion.div>
      )}
      
    </>
  );
};

export default ContentBody;
