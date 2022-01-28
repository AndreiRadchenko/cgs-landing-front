import React from "react";
import * as StyledThisComp from "../../styles/AboutUs.styled";
import { aboutUsContainerVars } from "../../utils/variables";
import AboutUsCard from "../AboutUsCard/AboutUsCard";
import illustrationIMG from "../../../public/illustration-technology.png";
import ImagePreview from "../Image/ImagePreview";

const AboutUs = () => {
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
          Bug-free code, juicy architecture, codebase optimisation,
          <br />
          up-to-date maintenance, outstanding clear communication
          <br /> and fluent English rolled into one. Imagined that? You don't
          even
          <br /> need to imagine this with CGS-team, just see for real!
        </StyledThisComp.AboutUsDescription>
        <StyledThisComp.AboutUsCodeIcon>
          {"</h2>"}
        </StyledThisComp.AboutUsCodeIcon>
      </StyledThisComp.AboutUsInfoSupport>

      <StyledThisComp.IllustrationWrapper>
        <ImagePreview
          src={illustrationIMG}
          placeholder={"blur"}
          alt={"illustration image technology"}
        />
      </StyledThisComp.IllustrationWrapper>
    </StyledThisComp.AboutUsContainer>
  );
};

export default AboutUs;
