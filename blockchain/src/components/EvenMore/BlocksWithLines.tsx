import Image from "next/image";
import React from "react";
import { LinesWrapper } from "../../styles/evenMore.styled";
import { IImageProps } from "../../types/EvenMore.types";
import Blocks from "./Blocks";
import lines from "/public/lines.png";

const BlocksWithLines = ({ isScrolled }: IImageProps) => {
  return (
    <div>
      <Blocks isScrolled={isScrolled} />
      <LinesWrapper isScrolled={isScrolled}>
        <Image
          src={lines.src}
          alt="even more block lines"
          blurDataURL={lines.blurDataURL}
          layout="fill"
        />
      </LinesWrapper>
    </div>
  );
};

export default BlocksWithLines;
