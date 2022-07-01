import React, { useEffect, useRef, useState } from "react";
import * as StyledThisComp from "../../styles/AboutUs.styled";
import AboutUsAdditional from "../AboutUsAdditional/AboutUsAdditional";
import AboutUsCard from "../AboutUsCard/AboutUsCard";
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

      <AboutUsAdditional
        data={data}
        isScrolled={isScrolled}
        isClicked={isClicked}
        handleIllustrationClick={handleIllustrationClick}
        illustrationRef={illustrationRef}
      />
    </StyledThisComp.AboutUsContainer>
  );
};

export default AboutUs;
