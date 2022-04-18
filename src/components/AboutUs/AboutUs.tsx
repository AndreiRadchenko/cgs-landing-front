import React, { useEffect, useRef, useState } from "react";
import * as StyledThisComp from "../../styles/AboutUs.styled";
import { aboutUsContainerVars } from "../../utils/variables";
import AboutUsCard from "../AboutUsCard/AboutUsCard";
import illustrationIMG from "../../../public/illustration-technology.png";
import ImagePreview from "../Image/ImagePreview";

const AboutUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const illustrationRef = useRef<HTMLDivElement>(null);

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
        3 theses about us
      </StyledThisComp.AboutUsTitle>
      <StyledThisComp.AboutUsWrapper>
        {aboutUsContainerVars.map(({ url, description, text }) => (
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
          {"<h2>"}
        </StyledThisComp.AboutUsCodeIcon>
        <StyledThisComp.AboutUsDescription>
          Bug-free code, juicy architecture, codebase optimisation, up-to-date
          maintenance, outstanding clear communication and fluent English rolled
          into one. Imagined that? You don&#39;t even need to imagine this with
          CGS-team, just see for real!
        </StyledThisComp.AboutUsDescription>
        <StyledThisComp.AboutUsCodeIcon>
          {"</h2>"}
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
            src={illustrationIMG}
            placeholder={"blur"}
            alt={"illustration image technology"}
          />
        </StyledThisComp.Wrapper>
      </StyledThisComp.IllustrationWrapper>
    </StyledThisComp.AboutUsContainer>
  );
};

export default AboutUs;
