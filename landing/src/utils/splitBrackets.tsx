import React, { useEffect, useState } from "react";
interface ISplitBracketsProps {
  text?: string;
  animated?: boolean;
}

export const SplitBrackets = ({
  text,
  animated = false,
}: ISplitBracketsProps) => {
  const typingSpeed = 150;
  const [animatedText, setAnimatedText] = useState<string>(" ");
  // const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    if (animated) {
      const handleType = () => {
        if (text && text !== animatedText) {
          setAnimatedText(
            text.substring(0, animatedText.length + 1)
            // +
            //   text
            //     .substring(animatedText.length + 2, text.length)
            //     .replace(/[^|]+/g, " ")
          );

          // setDisplayedText(text.substring(0, displayedText.length + 1));
        }
      };
      if (text?.length !== animatedText?.length) {
        setTimeout(handleType, typingSpeed);
      }
    }
  }, [animatedText, text, animated]);
  const splited = animated ? animatedText?.split("|") : text?.split("|");

  return (
    <>
      {splited?.map(
        (el, idx) =>
          el !== "" && (
            <span key={idx}>
              {el}
              <br />
            </span>
          )
      )}
    </>
  );
};
