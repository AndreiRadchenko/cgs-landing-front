import React, { FC, RefObject } from "react";
import * as StyledThisComp from "../../styles/AboutUs.styled";
import { ISubtitle } from "../../types/Admin/Response.types";
import ImagePreview from "../Image/ImagePreview";

interface IAboutUsAdditionalProps {
  data?: ISubtitle;
  isScrolled: boolean;
  isClicked: boolean;
  handleIllustrationClick: () => void;
  illustrationRef: RefObject<HTMLDivElement>;
}

const AboutUsAdditional: FC<IAboutUsAdditionalProps> = ({
  data,
  isScrolled,
  isClicked,
  illustrationRef,
  handleIllustrationClick,
}) => {
  return (
    <>
      <StyledThisComp.AboutUsInfoSupport>
        <StyledThisComp.AboutUsCodeIcon>
          {data?.firstText2}
        </StyledThisComp.AboutUsCodeIcon>
        <StyledThisComp.AboutUsDescription>
          {data?.text3}
        </StyledThisComp.AboutUsDescription>
        <StyledThisComp.AboutUsCodeIcon>
          {data?.secondText2}
        </StyledThisComp.AboutUsCodeIcon>
      </StyledThisComp.AboutUsInfoSupport>

      <StyledThisComp.IllustrationWrapper
        isScrolled={isScrolled}
        ref={illustrationRef}
        onClick={!isClicked ? handleIllustrationClick : undefined}
        className={isClicked ? "mobileAnimation" : undefined}
      >
        <StyledThisComp.Wrapper>
          <ImagePreview
            src={data?.image.url}
            alt={"illustration image technology"}
            width="140px"
            height="181px"
          />
        </StyledThisComp.Wrapper>
      </StyledThisComp.IllustrationWrapper>
    </>
  );
};

export default AboutUsAdditional;
