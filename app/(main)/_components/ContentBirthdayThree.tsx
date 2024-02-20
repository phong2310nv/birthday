"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";

import AnimatedText from "@/components/shared/AnimatedText";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

const ContentBirthdayThree = () => {

  const [finishFirst, setFinishFirst] = useState<boolean>(false);
  const [finishSecond, setFinishSecond] = useState<boolean>(false);
  const [finishThird, setFinishThird] = useState<boolean>(false);
  const [finishFourth, setFinishFourth] = useState<boolean>(false);
  const [finishFifth, setFinishFifth] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [showContentFirst, setShowContentFirst] = useState<boolean>(false);
  const [showContentSecond, setShowContentSecond] = useState<boolean>(false);
  const [endContentOne, setEndContentOne] = useState<boolean>(false);
  const [endContentTwo, setEndContentTwo] = useState<boolean>(false);
  const [lastContent, setLastContent] = useState<boolean>(false);

  useEffect(() => {
    if (showContentFirst || showContentSecond) {
      setTimeout(() => {
        setShowContent(false);
        setFinishThird(false);
        setEndContentOne(true);
        setShowContentFirst(false);
        setShowContentSecond(false);
      }, 3000)
    }
  }, [showContentFirst, showContentSecond])

  return (
    <>
      {!finishFirst && <AnimatedText text="Chờ xíu..." delay={1} end={500} setFinish={setFinishFirst} />}
      {finishFirst && !finishSecond && <AnimatedText text="Hình như hôm nay..là sinh nhật của ai đó xinh đẹp nhất quả đất thì phải 🤣🎉" delay={1} end={1000} setFinish={setFinishSecond} />}
      {finishFirst && finishSecond && (
        <div className="flex flex-col items-start justify-center text-center gap-y-6">
          <motion.p
            variants={containerVariants}
            animate="visible"
            initial="hidden"
            className="text-lg w-full"
          >Happy Birthday to Trà My 🥳</motion.p>
          {!endContentOne && <AnimatedText text="Chúc cho bông hoa này tuổi mới luôn luôn xinh đẹp 😘 ><" delay={1} end={500} setFinish={setFinishThird} />}
          {finishThird && (<AnimatedText text="Thật mạnh mẽ để đương đầu với đời nhưng không quên dịu dàng, iu thương chính bản thân mình 😁" delay={1} end={500} setFinish={setFinishFourth} />)}
          {finishThird && finishFourth && (<AnimatedText text="Cuối cùng là sớm đạt được những kỳ vọng của bản thân trong hành trình tiếp theo nhé 😘" delay={1} end={1000} setFinish={setFinishFifth} />)}
          {!lastContent && endContentOne && (
            <>
              <AnimatedText text="Thật ra mọi việc có khi rất là đơn giản nên cậu hãy cứ tự tin vào chính bản thân mình, đừng make it compicated lên nhé." delay={1} end={500} setFinish={setEndContentTwo} />
              {endContentTwo && <AnimatedText text="Cuối cùng thì enjoy cái moment này thôi nào. 🥳🎉" delay={1} end={500} setFinish={setLastContent} />}
            </>
          )}
          {lastContent && (
            <div className={`${dancingScript.className} text-center text-lg w-full`}>
              <AnimatedText text="Chúc mừng ngày sinh nhật vui vẻ. 🥳🎉" delay={1} end={1000} setFinish={() => { }} />
            </div>
          )}
        </div>
      )}
      {finishFirst && finishThird && finishFifth && (<div className="mt-[20px] w-full flex justify-end" onClick={() => setShowContent(true)}>Click to continue</div>)}
      {/* Dialog Question */}
      <AlertDialog open={showContent} onOpenChange={setShowContent}>
        <AlertDialogContent className="w-[80%] m-auto rounded-lg max-w-[400px]">
          <AlertDialogHeader className="w-full flex flex-col justify-center items-center gap-y-[20px]">
            <Image src="/gif/bear-modal.gif" alt="Gif" width={100} height={100} className="rounded-full object-cover" />
            <AlertDialogTitle>Trà My có muốn nhận quà tiếp không nhỉ? 😁😘</AlertDialogTitle>
            <AlertDialogTitle className="text-md">Chọn đi nè 😄</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col gap-y-3 w-full">
            <AlertDialogCancel asChild>
              <Button
                size="sm"
                variant="default"
                className="w-[200px] m-auto rounded-full px-4 bg-[#eb1ec9] hover:bg-[#e362cd] border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white hover:text-white"
                onClick={() => setShowContentFirst(true)}
              >Phát ngay đi!!</Button>
            </AlertDialogCancel>
            <AlertDialogCancel asChild>
              <Button
                size="sm"
                variant="default"
                className="w-[200px] m-auto rounded-full px-4 bg-[#eb425b] hover:bg-[#e86b7d] border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white hover:text-white"
                onClick={() => setShowContentSecond(true)}
              >Dỗi không cần nữa 😄</Button>
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Dialog Agree */}
      <AlertDialog open={showContentFirst} onOpenChange={setShowContentFirst}>
        <AlertDialogContent className="w-[80%] m-auto rounded-lg max-w-[400px] py-[40px]">
          <AlertDialogHeader className="w-full flex flex-col justify-center items-center gap-y-[20px]">
            <Image src="/gif/bear-modal-agree.gif" alt="Gif" width={100} height={100} className="rounded-full object-cover" />
            <AlertDialogTitle className="text-md">Cứ bình tĩnh nào My, quà nè! 😄</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
      {/* Dialog Disagree */}
      <AlertDialog open={showContentSecond} onOpenChange={setShowContentSecond}>
        <AlertDialogContent className="w-[80%] m-auto rounded-lg max-w-[400px] py-[40px]">
          <AlertDialogHeader className="w-full flex flex-col justify-center items-center gap-y-[20px]">
            <Image src="/gif/bear-modal-reject.gif" alt="Gif" width={100} height={100} className="rounded-full object-cover" />
            <AlertDialogTitle className="text-md">Thôi đừng dỗi nữa, quà ở đây nè!😄</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default ContentBirthdayThree