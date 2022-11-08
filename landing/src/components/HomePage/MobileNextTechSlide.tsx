import React, { useRef } from "react";
import TextTypingAnimation from "../Typewrite";
import { mobileServicesRoutes } from "../../utils/variables";
import Link from "next/link";
import * as StyledThisComp from "../../styles/HomePage/MobileServices.styled";
import { ISlideData } from "./MobileServices";
import { useOnScreen } from "../../hooks/useOnScreen";

interface IMobileNextTechSlideProps {
  idx: number;
  item: ISlideData;
}

const MobileNextTechSlide = ({ item, idx }: IMobileNextTechSlideProps) => {
  const elRef = useRef<HTMLAnchorElement>(null);
  const isOnScreen = useOnScreen(elRef, true);

  return (
    <Link href={`/services/${mobileServicesRoutes[idx]}`} passHref>
      <StyledThisComp.ServiceLink ref={elRef}>
        <StyledThisComp.ServiceWrapper>
          <TextTypingAnimation text={item.title} startPoint={isOnScreen} />
          <StyledThisComp.ImageWrapper>
            <StyledThisComp.Image src={item.image} />
          </StyledThisComp.ImageWrapper>
        </StyledThisComp.ServiceWrapper>
      </StyledThisComp.ServiceLink>
    </Link>
  );
};

export default MobileNextTechSlide;
