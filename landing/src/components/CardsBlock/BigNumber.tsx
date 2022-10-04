import React, { useEffect, useRef, useState } from "react";
import { BigDigit } from "../../styles/HomePage/CardsBlock.styled";

const BigNumber = ({ idx }: { idx: number }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const numberRef = useRef<HTMLParagraphElement>(null);

  const onScroll = () => {
    const elTop = numberRef?.current?.getBoundingClientRect().top || 0;
    const windowHeight = window.innerHeight;

    if (
      numberRef.current &&
      elTop - windowHeight / 2 <= 0 &&
      elTop - windowHeight / 2 >=
        -(numberRef.current.getBoundingClientRect().height * 2)
    ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, true);
    return window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BigDigit ref={numberRef} className={isScrolled ? "scrolled" : undefined}>
      {idx + 1}
    </BigDigit>
  );
};

export default BigNumber;
