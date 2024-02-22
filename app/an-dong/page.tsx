"use client";

import { useState } from "react";
import Image from "next/image";

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ContentBody from "./_components/ContentBody";

export default function HomePage() {

  const [isOpenGift, setIsOpenGift] = useState<boolean>(false);
  const [openNameInput, setOpenNameInput] = useState<boolean>(true);
  const [openNameConfirm, setOpenNameConfirm] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const handleClickNameRegister = () => {
    if (name !== "Uyển Nhi") {
      setName("");
      setOpenNameConfirm(true);
    } else {
      setShowContent(true);
    }
  }

  const handleClickNameConfirmed = () => {
    setOpenNameInput(true);
  }

  return (
    <main className="w-full h-screen relative">
      {!isOpenGift ? (
        <div className="absolute bg-black/100 w-full h-full top-0 left-0 flex flex-col items-center justify-center gap-y-[60px] px-5">
          <Image src="/images/gift-box.png" alt="Gift" priority width={80} height={80} onClick={() => setIsOpenGift(true)} className="cursor-pointer" />
          <p className="font-semibold text-md text-white text-center w-full">Nhấn vào để nhận quà đi chứ còn đợi gì nữa? 😂</p>
        </div>
      ) : (
        <div className="absolute w-full h-full top-0 left-0">
          <AlertDialog open={openNameInput} onOpenChange={setOpenNameInput}>
            <AlertDialogContent className="w-[90%] m-auto rounded-lg max-w-[400px]">
              <AlertDialogHeader className="w-full flex flex-col justify-center items-center gap-y-[20px]">
                <AlertDialogTitle>Nhập tên của cậu vào nhé!</AlertDialogTitle>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="" className="w-full focus-visible:ring-0 focus-visible:ring-offset-0 max-w-[300px]" />
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button
                    size="sm"
                    variant="default"
                    className="w-fit m-auto rounded-full px-4 bg-[#eb1ec9] hover:bg-[#e362cd] border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white hover:text-white"
                    onClick={handleClickNameRegister}
                  >OK</Button>
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog open={openNameConfirm} onOpenChange={setOpenNameConfirm}>
            <AlertDialogContent className="w-[90%] m-auto rounded-lg max-w-[400px]">
              <AlertDialogHeader className="w-full flex flex-col justify-center items-center gap-y-[20px]">
                <AlertDialogTitle>Tên của mình cũng không nhớ là sao nhỉ? Nhập &quot;Uyển Nhi&quot; vào nhé! 😈</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button
                    size="sm"
                    variant="default"
                    className="w-fit m-auto rounded-full px-4 bg-[#eb1ec9] hover:bg-[#e362cd] border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white hover:text-white"
                    onClick={handleClickNameConfirmed}
                  >OK</Button>
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
      {isOpenGift && <audio id="audio" loop autoPlay preload="auto" className="w-0 h-0 overflow-hidden" src="/audio/bg-music.mp3" />}
      <video src="/video/backround_heart_new.webm" autoPlay loop muted preload="auto" className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] ${isOpenGift ? "block" : "hidden"}`} />
      {showContent && (
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-[100px]">
            <ContentBody />
          </div>
        </div>
      )}
    </main>
  );
}
