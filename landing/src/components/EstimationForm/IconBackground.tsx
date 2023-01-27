import Image from "next/image";
import React from "react";
import { ImageBlock } from "./index.styled";

interface IIconBackgroundProps {
  className: string;
  src: string;
  alt: string;
}

const IconBackground = ({ className, alt, src }: IIconBackgroundProps) => (
  <ImageBlock className={className}>
    <Image src={src} alt={alt} />
  </ImageBlock>
);

export default IconBackground;
