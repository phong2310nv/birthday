"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  delay: number;
  end: number;
  setFinish: Dispatch<SetStateAction<boolean>>;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

const AnimatedText = ({ text, delay, end, setFinish }: AnimatedTextProps) => {

  const [showCursor, setShowCursor] = useState<boolean>(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text.slice(0, latest)
  );
  const animationTime = text.length * 0.08 - 0.5;

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      delay,
      duration: animationTime,
      ease: "linear",
      onPlay: () => {
        setShowCursor(true);
      },
      onComplete: () => {
        setTimeout(() => {
          setShowCursor(false);
          setFinish(true);
        }, end)
      }
    });

    return controls.stop;
  }, [setFinish, animationTime, count, delay, end, text.length]);

  return (
    <motion.div className="flex w-full select-none items-center justify-center">
      <motion.div
        variants={containerVariants}
        animate="visible"
        initial="hidden"
        className="flex items-center justify-center w-full h-full text-center"
      >
        <motion.span variants={itemVariants} className="inline h-full w-full text-white leading-6">
          <motion.span>{displayText}</motion.span>
          {showCursor && (
            <motion.div
              variants={cursorVariants}
              animate="blinking"
              className="inline-block h-[15px] w-[1px] translate-y-0.5 bg-white"
            />
          )}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default AnimatedText