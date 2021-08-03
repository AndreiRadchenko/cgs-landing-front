import { IFeaturedTechnology } from "types/components";

import { Slider } from "../Slider";

import Featured from "./FeaturedTechnologies.component";

import * as Styled from "./Featured.styles"

const SliderFeatured: React.FC<{
  featuredTechnologies: IFeaturedTechnology[];
}> = ({ featuredTechnologies }) => (
  <Styled.Container>
    <Slider
      items={featuredTechnologies}
      renderItem={(featuredTech) => (
        <Featured featuredTech={featuredTech}  />
      )}
    />
  </Styled.Container>
);

export default SliderFeatured;
