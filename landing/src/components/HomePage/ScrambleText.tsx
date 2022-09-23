import React, { useEffect, useRef, useState } from "react";
import Scramble from "react-scramble";

interface IScrambleText {
  text: string;
}

const ScrambleText = ({ text }: IScrambleText) => {
  const [start, setStart] = useState<() => void>();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, true);
    return window.removeEventListener("scroll", onScroll);
  }, []);

  //   useEffect(() => {
  //     if (isScrolled && start) {
  //       console.log(isScrolled);
  //       start();
  //     }
  //   }, [isScrolled, start]);

  const onScroll = () => {
    const elTop = elRef?.current?.getBoundingClientRect().top || 0;
    const scrollY = window.scrollY;

    if (elTop <= scrollY) {
      setIsScrolled(true);
    }
  };

  return (
    <span ref={elRef} className="blue">
      <Scramble
        text={text}
        speed="slow"
        steps={[
          {
            roll: 20,
            action: "+",
            type: "random",
          },
          {
            action: "-",
            type: "forward",
          },
        ]}
      />
    </span>
  );
};

export default ScrambleText;
