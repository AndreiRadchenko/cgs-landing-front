import Image from "next/image";
import React from "react";
import {
  BlockWrapper,
  CoinsWrapper,
  ImageWrapper,
} from "../../styles/evenMore.styled";
import { IImageProps } from "../../types/EvenMore.types";
import blocks from "/public/blocks.png";
import coins from "/public/coinsEvenMore.png";

const Blocks = ({ isScrolled }: IImageProps) => {
  return (
    <ImageWrapper isScrolled={isScrolled}>
      <BlockWrapper>
        <Image
          src={blocks.src}
          blurDataURL={blocks.blurDataURL}
          alt="even more blocks"
          layout="fill"
        />
      </BlockWrapper>
      <CoinsWrapper isScrolled={isScrolled}>
        <Image
          src={coins.src}
          blurDataURL={coins.blurDataURL}
          alt="coins even more"
          layout="fill"
        />
      </CoinsWrapper>
    </ImageWrapper>
  );
};

export default Blocks;
