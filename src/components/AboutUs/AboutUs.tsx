import React, { useEffect, useRef, useState } from "react";
import * as StyledThisComp from "../../styles/AboutUs.styled";
import { aboutUsContainerVars } from "../../utils/variables";
import AboutUsCard from "../AboutUsCard/AboutUsCard";
import illustrationIMG from "../../../public/illustration-technology.png";
import ImagePreview from "../Image/ImagePreview";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";

const AboutUs = () => {
  const queryClient = useQueryClient();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IDataResponse>(queryKeys.getFullHomePage)?.SubtitleBlock;

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
      <StyledThisComp.AboutUsTitle>
        {data?.title}
      </StyledThisComp.AboutUsTitle>
      <StyledThisComp.AboutUsWrapper>
        {aboutUsContainerVars.map(({ url, description, text }) => ( // here
          <AboutUsCard
            key={description}
            url={url}
            text={text}
            description={description}
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
            src={illustrationIMG} // here
            placeholder={"blur"}
            alt={"illustration image technology"}
          />
        </StyledThisComp.Wrapper>
      </StyledThisComp.IllustrationWrapper>
    </StyledThisComp.AboutUsContainer>
  );
};

export default AboutUs;

// elements: (3) [{…}, {…}, {…}]
// firstText2: "<h2>"
// image: {url: 'https://landing-cgs.s3.amazonaws.com/60700a3b-e030-481e-a13e-4ebebc28c3a9.png'}
// secondText2: "</h2>"
// text3: "Bug-free code, juicy architecture, codebase optimisation, up-to-date maintenance, outstanding clear communication and fluent English rolled into one. Imagined that? You don't even need to imagine this with CGS-team, just see for real!"
// title: "3 theses about us"