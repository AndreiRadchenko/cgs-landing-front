import React, { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/BlockchainService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

import TV from "../../../public/BlockchainServicePage/HeadImage/TV.svg";
import { cryptoTVImages } from "../../consts/cryptoTV";
import { SplitBrackets } from "../../utils/splitBrackets";
import { IHeadServicesProps } from "../../types/Services.types";

const HeadBlock = ({
  setOnLoadCount,
  onLoadCount,
  setIsMainImagesLoaded,
}: IHeadServicesProps) => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.headerBlock;

  const onMainImageLoad = (e: any) => {
    setOnLoadCount((prev) => prev + 1);
    if (onLoadCount === 1) {
      setIsMainImagesLoaded(true);
    }
  };

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const nextIndex = imageIndex + 1;

    if (nextIndex % 5 === 0) {
      timer = setTimeout(() => {
        setImageIndex((prevIndex) =>
          prevIndex === cryptoTVImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    } else {
      timer = setTimeout(() => {
        setImageIndex((prevIndex) =>
          prevIndex === cryptoTVImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 250);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [imageIndex]);

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          {data && <TextTypingAnimation text={data?.title} />}
        </Styled.Title>
        <Styled.Description>
          <SplitBrackets text={data?.text} />
        </Styled.Description>
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
        <Styled.ImageTV onLoad={(e) => onMainImageLoad(e)} src={TV.src} />
        <Styled.ImageCrypto src={cryptoTVImages[imageIndex]} />
      </Styled.Image>
    </Styled.Container>
  );
};

export default HeadBlock;
