"use client";

import { useState } from 'react';

import AnimatedText from '@/components/shared/AnimatedText';

const WelcomeText = () => {

  const [finishFirst, setFinishFirst] = useState(false);

  return (
    <div className="flex flex-col absolute top-[300px] left-0 p-3">
      <AnimatedText
        text={`Hello you, today is 8/3 and i've got something to say.`}
        delay={1}
        setFinish={setFinishFirst}
      />
      {finishFirst && (<AnimatedText
        text={`Hello you, today is 8/3 and i've got something to say.`}
        delay={1}
        setFinish={() => { }}
      />)}
    </div>
  )
}

export default WelcomeText