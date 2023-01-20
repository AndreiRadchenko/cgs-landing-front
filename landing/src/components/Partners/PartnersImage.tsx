import Image from "next/image";
import React from "react";
import { PartnerImageWrapper } from "../../styles/HomePage/Partners.styled";

interface IPartnersImageProps {
  img: { url: string };
}

const PartnersImage = ({ img }: IPartnersImageProps) => {
  return (
    <PartnerImageWrapper>
      <Image
        src={img.url}
        alt="partner image"
        layout="fill"
        objectFit="contain"
      />
    </PartnerImageWrapper>
  );
};

export default PartnersImage;
