import { useState } from "react";

import AnimatedText from "@/components/shared/AnimatedText";
import ContentBirthdayTwo from "./ContentBirthdayTwo";

const ContentBirthday = () => {

  const [showSecondContent, setShowSecondContent] = useState<boolean>(false);
  const [finishFirst, setFinishFirst] = useState<boolean>(false);

  return (
    <div className="text-center font-semibold text-md mt-5">
      {!showSecondContent ? (
        <>
          <AnimatedText text="Sắp xong rồi đó, tiếp tục làm theo hướng dẫn để nhận quà nè 🤣🎉" delay={1} end={500} setFinish={setFinishFirst} />
          {finishFirst && <div className="mt-[20px] w-full flex justify-end" onClick={() => setShowSecondContent(true)}>Click to continue</div>}
        </>
      ) : (
        <div className="text-center font-semibold text-md mt-5">
          <ContentBirthdayTwo />
        </div>
      )}

    </div>
  )
}

export default ContentBirthday