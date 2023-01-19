import Image from "next/image";
import React, { useState } from "react";

interface IPartnersImageProps {
  img: { url: string };
}

interface IPartnersImageSize {
  height: number;
  width: number;
}

const PartnersImage = ({ img }: IPartnersImageProps) => {
  const [imgSize, setImgSize] = useState<IPartnersImageSize>({
    height: 0,
    width: 0,
  });

  const handleLoadingComplete = (imgSize: {
    naturalWidth: number;
    naturalHeight: number;
  }) => {
    setImgSize({ width: imgSize.naturalWidth, height: imgSize.naturalHeight });
  };

  return (
    <Image
      src={img.url}
      alt="partner image"
      width={imgSize.width}
      height={imgSize.height}
      objectFit="contain"
      onLoadingComplete={handleLoadingComplete}
    />
  );
};

export default PartnersImage;
