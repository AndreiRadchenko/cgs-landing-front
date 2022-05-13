import React, { useEffect, useRef, useState } from "react";
import * as StyledThisComp from "../../styles/AboutUs.styled";
import AboutUsCard from "../AboutUsCard/AboutUsCard";
import ImagePreview from "../Image/ImagePreview";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";

const AboutUs = () => {
  const queryClient = useQueryClient();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.SubtitleBlock;

  const onScroll = () => {
    const elTop = illustrationRef?.current?.getBoundingClientRect().top || 0;
    const scrollY = window.scrollY;
    if (elTop - 100 <= scrollY) {
      setIsScrolled(true);
    }
  };

  const handleIllustrationClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, true);
    return window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledThisComp.AboutUsContainer>
      <StyledThisComp.AboutUsTitle>{data?.title}</StyledThisComp.AboutUsTitle>
      <StyledThisComp.AboutUsWrapper>
        {data?.elements.map((el) => (
          <AboutUsCard
            key={el.text}
            url={el.image.url}
            text={`${el.text.split(":")[1]}:`}
            description={`${el.text.split(":")[0]}`}
          />
        ))}
      </StyledThisComp.AboutUsWrapper>

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
            // placeholder={"blur"}
            alt={"illustration image technology"}
            width="130px"
            height="150px"
          />
        </StyledThisComp.Wrapper>
      </StyledThisComp.IllustrationWrapper>
    </StyledThisComp.AboutUsContainer>
  );
};

export default AboutUs;
