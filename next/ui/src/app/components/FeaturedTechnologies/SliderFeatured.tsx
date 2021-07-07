import React from "react";
import * as Styled from "./Featured.styles"
import { Slider } from "../Slider";

import { onChangeSlideEA } from "../../../services/event";
import Featured from "./FeaturedTechnologies.component";
import { IFeaturedTechnology } from "types/components";
import { SampleNextArrow, SamplePrevArrow } from "../shared/Slider/arrows";


const SliderFeatured: React.FC<{
  featuredTechnologies: IFeaturedTechnology[];
}> = ({ featuredTechnologies }) => {

  return (
    <Styled.Container>
      <Styled.DesktopContainer>
            {featuredTechnologies?.map((el) => (
                <Featured featuredTech={el} key={el?.id} />
            ))}
      </Styled.DesktopContainer>
      <Styled.MobileContainer>
        <Slider
            items={featuredTechnologies}
            renderItem={(featuredTech) => (
                <Featured featuredTech={featuredTech}  />
            )}
        />
      </Styled.MobileContainer>
    </Styled.Container>
  );
};

export default SliderFeatured;
