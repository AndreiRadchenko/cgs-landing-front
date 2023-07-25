import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/BlockchainService/HeadBlock.styled";

import { queryKeys } from "../../consts/queryKeys";
import { cryptoTVImages } from "../../consts/cryptoTV";

import { IBlockchainService } from "../../types/Admin/Response.types";

import TV from "../../../public/BlockchainServicePage/HeadImage/TV.svg";

const HeadBlockBlockchain = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.headerBlock;

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
        {data && (
          <HeaderTextBlockServices
            title={data.title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
          />
        )}
      </Styled.Content>
      <Styled.Image>
        <Styled.ImageTV src={TV.src} alt="Old TV" />
        <Styled.ImageCrypto
          src={cryptoTVImages[imageIndex]}
          alt="Grey Square"
        />
      </Styled.Image>
    </Styled.Container>
  );
};

export default HeadBlockBlockchain;
