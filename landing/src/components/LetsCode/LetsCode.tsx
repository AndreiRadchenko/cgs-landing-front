import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as StyledThisComp from "../../styles/LestCode.styles";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import catIconSleep from "/public/catIconSleep.png";
import catIcon from "/public/catIcon.png";
import LetsCodeForm from "./LetsCodeForm";

const LetsCode = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowDimension();

  useEffect(() => {
    if (width && width <= 768) {
      setIsMobile(true);
    }
  }, [width]);

  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  return (
    <StyledThisComp.LetsCodeContainer>
      <StyledThisComp.FormContainer>
        <LetsCodeForm setButtonIsHovered={setIsHovered} />
      </StyledThisComp.FormContainer>
      <StyledThisComp.ImageContainer>
        <StyledThisComp.ImageTagsContainer>
          <StyledThisComp.h2CodeIconOpen content={"<h2>"} />
          <StyledThisComp.h2CodeIconClose content={"</h2>"} />
          <StyledThisComp.pCodeIcon content={"<p>"} />
        </StyledThisComp.ImageTagsContainer>
        <StyledThisComp.ImageCatContainer
          onMouseOver={handleHover}
          onPointerDown={isMobile ? handleHover : undefined}
          onMouseLeave={handleLeave}
          onPointerUp={isMobile ? handleLeave : undefined}
        >
          {(isHovered && <Image src={catIcon} alt="cat icon" />) || (
            <Image src={catIconSleep} alt="cat icon sleep" />
          )}
        </StyledThisComp.ImageCatContainer>
      </StyledThisComp.ImageContainer>
    </StyledThisComp.LetsCodeContainer>
  );
};

export default LetsCode;
