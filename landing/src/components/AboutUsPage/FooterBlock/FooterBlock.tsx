import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";

import GetEstimationButton from "../../GetEstimationButton";
import ButtonShareComponent from "../../HomePage/ButtonShareComponent";
import leftArrow from "../../../../public/AboutUsDecorations/left-arrow.svg";
import rightArrow from "../../../../public/AboutUsDecorations/right-arrow.svg";
import leftArrowMobile from "../../../../public/AboutUsDecorations/left-arrow-mobile.svg";
import rightArrowMobile from "../../../../public/AboutUsDecorations/right-arrow-mobile.svg";

import * as Styled from "./FooterBlock.styled";
import { IAbout } from "../../../types/Admin/Response.types";
import { useOnScreen } from "../../../hooks/useOnScreen";

type IFooterProps = Pick<IAbout, "footerBlock">;

interface IProps extends IFooterProps {
  linkedInIcon?: string | any;
}

const FooterBlock = ({
  footerBlock: { title, button, buttonLink, image },
}: IProps) => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const animatedTextRef = useRef<HTMLHeadingElement | null>(null);
  const [animationPlay, setAnimationPlay] = useState(false);
  const isScrolled = useOnScreen(animatedTextRef, true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isScrolled) {
      setAnimationPlay(true);
      const interval: any = setInterval(() => {
        setAnimationPlay((prevAnimationPlay) => !prevAnimationPlay);
      }, 3500);

      return () => clearInterval(interval);
    } else {
      setAnimationPlay(false);
    }
  }, [isScrolled]);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(221, 105, 88)")
      ) {
        return (
          <>
            <Styled.RightArrowWrapper>
              <Image
                src={isMobile ? rightArrowMobile.src : rightArrow.src}
                alt="wide tech long arrow"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
              />
            </Styled.RightArrowWrapper>
          </>
        );
      }
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 24, 14)")
      ) {
        return (
          <>
            <Styled.LeftArrowWrapper>
              <Image
                src={isMobile ? leftArrowMobile.src : leftArrow.src}
                alt="wide tech long arrow"
                layout="fill"
                objectFit="cover"
                objectPosition="left"
              />
            </Styled.LeftArrowWrapper>
          </>
        );
      }
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 105, 221)")
      ) {
        return (
          <Styled.AnimatedTextWrapper
            className="animatedTextWrapper"
            onClick={() => buttonRef?.current?.click()}
          >
            <Styled.AnimatedText className="transparentText">
              {(domNode.children[0] as any).data}
            </Styled.AnimatedText>
            <div className="animatedTextBlock">
              <Styled.AnimatedText className="firstText">
                {(domNode.children[0] as any).data}
              </Styled.AnimatedText>
              <Styled.AnimatedText className="secondText">
                {(domNode.children[0] as any).data}
              </Styled.AnimatedText>
            </div>
          </Styled.AnimatedTextWrapper>
        );
      }
    },
  };

  return (
    <Styled.FooterSection>
      <Styled.Layout>
        <Styled.Title
          ref={animatedTextRef}
          className={animationPlay ? "animationPlay" : ""}
        >
          {title && parse(title, options)}
        </Styled.Title>
        <Styled.ButtonWrapper>
          <GetEstimationButton
            extRef={buttonRef}
            buttonLink={buttonLink}
            buttonText={button}
            withEstimation
            buttonClassName={`about-us`}
          />
          <ButtonShareComponent className={`about-us`} />
        </Styled.ButtonWrapper>
      </Styled.Layout>
      <Styled.Image src={image?.url} alt="Footer image" />
    </Styled.FooterSection>
  );
};

export default FooterBlock;
