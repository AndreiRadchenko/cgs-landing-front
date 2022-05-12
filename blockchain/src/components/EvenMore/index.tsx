import React from "react";
import * as UsefullStyled from "../../styles/usefullStyled";
import * as Styled from "../../styles/evenMore";
import Image from "next/image";
import cat from "../../../public/cosmoCat.png";
import planets from "../../../public/planets.png";

const EvenMore = () => {
  return (
    <UsefullStyled.TitlePlusContentBlock>
      <div>
        <UsefullStyled.HeaderBig>even more</UsefullStyled.HeaderBig>

        <Styled.ImagesPositioning>
          <Styled.CatPositioning>
            <Image src={cat} />
            <Styled.PlanetsPositioning>
              <Image src={planets} />
            </Styled.PlanetsPositioning>
          </Styled.CatPositioning>
        </Styled.ImagesPositioning>

      </div>
      
      <div>
        <Styled.FactsList>
          <Styled.GreenLineHorizontal>
            some
          </Styled.GreenLineHorizontal>
        </Styled.FactsList>

      </div>
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default EvenMore;
