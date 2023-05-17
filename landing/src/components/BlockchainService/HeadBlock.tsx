import React, { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/BlockchainService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

import TV from "../../../public/BlockchainServicePage/HeadImage/TV.svg";
import firstNoise from "../../../public/BlockchainServicePage/HeadImage/noise-1.svg";
import secondNoise from "../../../public/BlockchainServicePage/HeadImage/noise-2.svg";
import firstCripto from "../../../public/BlockchainServicePage/HeadImage/cripto-1.svg";
import secondCripto from "../../../public/BlockchainServicePage/HeadImage/cripto-2.svg";
import thirdCripto from "../../../public/BlockchainServicePage/HeadImage/cripto-3.svg";
import fourthCripto from "../../../public/BlockchainServicePage/HeadImage/cripto-4.svg";
import fifthCripto from "../../../public/BlockchainServicePage/HeadImage/cripto-5.svg";
import sixthCripto from "../../../public/BlockchainServicePage/HeadImage/cripto-6.svg";
import seventhCripto from "../../../public/BlockchainServicePage/HeadImage/cripto-7.svg";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.headerBlock;

  const [imageIndex, setImageIndex] = useState(0);
  const targetIndex = 1;

  const noiseImages = [
    secondNoise.src,
    firstNoise.src,
    secondNoise.src,
    firstNoise.src,
  ];

  const criptoImages = [
    firstCripto.src,
    secondCripto.src,
    thirdCripto.src,
    fourthCripto.src,
    fifthCripto.src,
    sixthCripto.src,
    seventhCripto.src,
  ];

  for (let n = 0; n < targetIndex; n++) {
    for (let i = criptoImages.length - 1; i >= 0; i--) {
      criptoImages.splice(i + 1, 0, ...noiseImages)
    }
  };

  useEffect(() => {
    const timerAll = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex === criptoImages.length - 1 ? 0 : prevIndex + 1));
    }, 300);
    return () => {
      clearInterval(timerAll);
    };
  }, [criptoImages]);

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          {data && <TextTypingAnimation text={data?.title} />}
        </Styled.Title>
        <Styled.Description>{data?.text}</Styled.Description>
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
      </Styled.Content>
      <Styled.Image>
        <Styled.ImageTV src={TV.src} />
        <Styled.ImageCripto src={criptoImages[imageIndex]} />
      </Styled.Image>
    </Styled.Container>
  );
};

export default HeadBlock;
