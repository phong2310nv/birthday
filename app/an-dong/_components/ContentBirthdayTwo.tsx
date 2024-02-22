"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ContentBirthdayThree from "./ContentBirthdayThree";

const containerVariants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    }
  }
};

const ContentBirthday = () => {

  const [candleOneOff, setCandleOneOff] = useState<boolean>(false);
  const [candleTwoOff, setCandleTwoOff] = useState<boolean>(false);
  const [candleThreeOff, setCandleThreeOff] = useState<boolean>(false);
  const [candleFourOff, setCandleFourOff] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    if (candleOneOff && candleTwoOff && candleThreeOff && candleFourOff) {
      setShowContent(true);
    }
  }, [candleOneOff, candleTwoOff, candleThreeOff, candleFourOff])

  return (
    <>
      {!showContent ? (
        <>
          <h1>Bó hoa có 100 bông cơ, nhưng thôi lấy tạm trước 4 bông nhé! 🤣🎉</h1>
          <motion.div
            variants={containerVariants}
            animate="visible"
            initial="hidden"
            className="w-fit mx-auto flex items-center justify-center mt-5 gap-x-4"
          >
            <Image src="/images/rose.png" alt="Rose" priority width={50} height={100} className={`trasition-all duration-300 ${candleOneOff ? "opacity-0" : "opacity-100"}`} onClick={() => setCandleOneOff(true)} />
            <Image src="/images/rose.png" alt="Rose" priority width={50} height={100} className={`trasition-all duration-300 ${candleTwoOff ? "opacity-0" : "opacity-100"}`} onClick={() => setCandleTwoOff(true)} />
            <Image src="/images/rose.png" alt="Rose" priority width={50} height={100} className={`trasition-all duration-300 ${candleThreeOff ? "opacity-0" : "opacity-100"}`} onClick={() => setCandleThreeOff(true)} />
            <Image src="/images/rose.png" alt="Rose" priority width={50} height={100} className={`trasition-all duration-300 ${candleFourOff ? "opacity-0" : "opacity-100"}`} onClick={() => setCandleFourOff(true)} />
          </motion.div>
        </>
      ) : (
        <ContentBirthdayThree />
      )}
    </>
  )
}

export default ContentBirthday