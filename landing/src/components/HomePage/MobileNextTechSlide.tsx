import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import TextTypingAnimation from "../Typewrite";
import { mobileServicesRoutes } from "../../utils/variables";
import * as StyledThisComp from "../../styles/HomePage/MobileServices.styled";
import { ISlideData } from "./MobileServices";
import { useOnScreen } from "../../hooks/useOnScreen";
import { replaceAt } from "../../utils/replaceStrByInd";
import { getPosition } from "../../utils/getPosition";

interface IMobileNextTechSlideProps {
  idx: number;
  item: ISlideData;
  length: number;
}

const MobileNextTechSlide = ({
  item,
  idx,
  length,
}: IMobileNextTechSlideProps) => {
  const elRef = useRef<HTMLAnchorElement>(null);
  const isOnScreen = useOnScreen(elRef, true);

  const slideItem = (title: string, idx: number) => {
    if (idx === length - 1) {
      return replaceAt(title, getPosition(title, "|", 2), 1);
    }
    return title;
  };

  const convertedTitle = slideItem(item.title, idx);

  return (
    <Link href={`/services/${mobileServicesRoutes[idx]}`} passHref>
      <StyledThisComp.ServiceLink ref={elRef}>
        <StyledThisComp.ServiceWrapper>
          <TextTypingAnimation text={convertedTitle} startPoint={isOnScreen} />
          <StyledThisComp.ImageWrapper>
            <Image
              src={item.image}
              alt="Image of the service"
              layout="fill"
              objectFit="contain"
            />
          </StyledThisComp.ImageWrapper>
        </StyledThisComp.ServiceWrapper>
      </StyledThisComp.ServiceLink>
    </Link>
  );
};

export default MobileNextTechSlide;
