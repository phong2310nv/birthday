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
  const [lastContentQuote, setLastContentQuote] = useState<boolean>(false);

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
      {finishFirst && !finishSecond && <AnimatedText text="Hình như hôm nay..là ngày mà ai cũng nâng niu người phụ nữ của riêng ta đóa" delay={1} end={1000} setFinish={setFinishSecond} />}
      {finishFirst && finishSecond && (
        <div className="flex flex-col items-start justify-center text-center gap-y-4">
          <motion.p
            variants={containerVariants}
            animate="visible"
            initial="hidden"
            className="text-lg w-full"
          >Happy Women day to my love Công Chúa Uyển Nhi 🥳</motion.p>
          {!endContentOne && <AnimatedText text="8/3 thì người ta hay tặng hoa nè, nhưng bông hoa đẹp nhất trong cuộc đời anh chính là em. 🥰" delay={1} end={500} setFinish={setFinishThird} />}
          {finishThird && (<AnimatedText text="Chúc em - bông hoa đẹp nhất của đời a luôn mãi mãi xinh đẹp, đáng yêu và gặp nhiều niềm vui trong cuộc sống nhé." delay={1} end={500} setFinish={setFinishFourth} />)}
          {finishThird && finishFourth && (<AnimatedText text="Tuy giờ, anh và em cũng đã trải qua nhiều niềm vui nỗi buồn cùng nhau. 2 đứa có nhiều tâm tư nguyện vọng cho nhau nhưng chưa nói hay làm được. Nhưng hãy vẫn yêu thương nhau như ngày mà chúng ta đến với nhau nhé. Dù bất kể có gì khó khăn hãy nắm tay a và mình cùng vượt qua nó nha bé iu. 😘" delay={1} end={1000} setFinish={setFinishFifth} />)}
          {!lastContent && endContentOne && (
            <>
              <AnimatedText text="Tình yêu là sự bao dung, vị tha, chia sẻ và cam chịu sát cánh bên nhau." delay={1} end={500} setFinish={setEndContentTwo} />
              {endContentTwo && <AnimatedText text="Anh biết em rất tự lập và không muốn giải thích nhiều, nhưng em giờ đã có anh ở bên, luôn lắng nghe và sẽ đi cùng em bất kể em muốn đi đâu 😁" delay={1} end={500} setFinish={setLastContent} />}
            </>
          )}
          {lastContent && (
            <div className={`${dancingScript.className} text-center text-lg w-full`}>
              <AnimatedText text="Chúc mừng 8/3 nha công chúa của a 🥰. Anh yêu em, nhớ em nhiều lắm. Tý ra gặp anh đấy a còn bất ngờ nữa cho em cơ. 😆" delay={1} end={1000} setFinish={setLastContentQuote} />
            </div>
          )}
        </div>
      )}
      {finishFirst && finishThird && finishFifth && (<div className="mt-[20px] w-full flex justify-end" onClick={() => setShowContent(true)}>Click to continue</div>)}
      {/* Dialog Question */}
      <AlertDialog open={showContent} onOpenChange={setShowContent}>
        <AlertDialogContent className="w-[90%] m-auto rounded-lg max-w-[400px]">
          <AlertDialogHeader className="w-full flex flex-col justify-center items-center gap-y-[20px]">
            <Image src="/gif/bear-modal.gif" alt="Gif" priority width={100} height={100} className="rounded-full object-cover" />
            <AlertDialogTitle>Công Chúa Uyển Nhi có muốn nhận quà tiếp không nhỉ? 😁😘</AlertDialogTitle>
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
        <AlertDialogContent className="w-[90%] m-auto rounded-lg max-w-[440px] py-[40px]">
          <AlertDialogHeader className="w-full flex flex-col justify-center items-center gap-y-[20px]">
            <Image src="/gif/bear-modal-agree.gif" alt="Gif" priority width={100} height={100} className="rounded-full object-cover" />
            <AlertDialogTitle className="text-md">Cứ bình tĩnh nào Nhi, quà nè! 😄</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
      {/* Dialog Disagree */}
      <AlertDialog open={showContentSecond} onOpenChange={setShowContentSecond}>
        <AlertDialogContent className="w-[90%] m-auto rounded-lg max-w-[440px] py-[40px]">
          <AlertDialogHeader className="w-full flex flex-col justify-center items-center gap-y-[20px]">
            <Image src="/gif/bear-modal-reject.gif" alt="Gif" priority width={100} height={100} className="rounded-full object-cover" />
            <AlertDialogTitle className="text-md">Thôi đừng dỗi nữa, quà ở đây nè!😄</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default ContentBirthdayThree