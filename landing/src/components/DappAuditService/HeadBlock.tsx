import React, { useRef } from "react";
import * as Styled from "../../styles/DappAuditService/HeadBlock.styled";
import Image from "next/image";
import TextTypingAnimation from "../Typewrite";
import { SplitBrackets } from "../../utils/splitBrackets";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { replaceAt } from "../../utils/replaceStrByInd";
import GetEstimationButton from "../GetEstimationButton";
import { getPosition } from "../../utils/getPosition";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

const HeadBlock = () => {
  const { width } = useWindowDimension();
  const elRef = useRef<HTMLDivElement>(null);
  const data = {
    title: "Dapp audit | // | Tokenomic | planning",
    text: "Ensure data and workflow security of your dapp, | providing smart contract security and dapp audit. | Take care of an essential part of the blockchain business | model — tokenomic.",
    button: "Book a consultation",
    buttonLink:
      "https://calendly.com/d/dwn-9yc-22t/client-meets-daniel-and-tech-department",
    image: {
      url: "https://landing-cgs.s3.amazonaws.com/68e2d183-35ef-4ce9-9467-0af327958123.svg",
    },
  };

  const title =
    data &&
    replaceAt(
      replaceAt(data.title, getPosition(data.title, "|", 3), 1),
      getPosition(data.title, "|", 1),
      1
    );

  const mobileTitle =
    data && replaceAt(data.title, getPosition(data.title, "|", 2), 1);

  return (
    <Styled.Wrapper>
      <Styled.TextContent>
        {data && title && mobileTitle && (
          <Styled.Title>
            <TextTypingAnimation
              text={width && width < 768 ? mobileTitle : title}
            />
          </Styled.Title>
        )}
        <Styled.Text>
          <SplitBrackets text={data?.text} />
        </Styled.Text>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              withEstimation
              buttonText={data.button}
              buttonClassName="social-button"
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </Styled.TextContent>
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data?.image.url}
            alt="dapp service hero img"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Styled.ImageWrapper>
      )}
    </Styled.Wrapper>
  );
};

export default HeadBlock;
