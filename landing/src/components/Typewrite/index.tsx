import parse from "html-react-parser";
import React, { Fragment, useEffect, useState } from "react";
import * as Styled from "../../styles/TextTypewrite.styled";

interface ITextTypingAnimationProps {
  text: string;
  startPoint?: boolean;
}

interface IDisplayedTextProps {
  visibleText: string;
  hiddenText: string;
}

function TextTypingAnimation({ text, startPoint }: ITextTypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<IDisplayedTextProps>({
    visibleText: text.slice(0, 1),
    hiddenText: text.slice(1, text.length),
  });

  useEffect(() => {
    if (startPoint || startPoint === undefined) {
      const timer = setTimeout(() => {
        if (
          displayedText.visibleText.length !== 0 &&
          displayedText.visibleText !== text &&
          displayedText.visibleText.length < text.length
        ) {
          const visiblePart = text.slice(
            0,
            displayedText.visibleText.length + 1
          );

          const hiddenPart = text.slice(
            displayedText.visibleText.length + 1,
            text.length
          );

          setDisplayedText({
            visibleText: visiblePart,
            hiddenText: hiddenPart,
          });
        }
      }, 150 - Math.random() * 100);

      return () => clearTimeout(timer);
    }
  }, [text, displayedText, startPoint]);

  const splittedDisplayed = displayedText.visibleText.split("|");

  const splittedHidden = displayedText.hiddenText.split("|");

  return (
    <Styled.TypewriteTextWrapper>
      <Styled.DisplayedPart>
        {splittedDisplayed.map((el, idx) =>
          idx !== splittedDisplayed.length - 1 ? (
            <Fragment key={idx}>{parse(`<span>${el}</span><br/ >`)}</Fragment>
          ) : (
            <Styled.LastPart
              className={splittedHidden.length === 1 ? "last-part" : undefined}
              key={idx}
            >
              {parse(`<span>${el}</span>`)}
              <Styled.Cursor />
            </Styled.LastPart>
          )
        )}
      </Styled.DisplayedPart>
      <Styled.HiddenPart>
        {splittedHidden.map((el, idx) =>
          idx !== splittedHidden.length - 1 ? (
            <Fragment key={idx}>
              {parse(`<span key="${idx}">${el}</span><br/ >`)}
            </Fragment>
          ) : (
            <Styled.LastPart className="last-part" key={idx}>
              {parse(`<span>${el}</span>`)}
            </Styled.LastPart>
          )
        )}
      </Styled.HiddenPart>
    </Styled.TypewriteTextWrapper>
  );
}

export default TextTypingAnimation;
