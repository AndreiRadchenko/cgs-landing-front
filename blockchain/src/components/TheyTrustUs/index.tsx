import React, { useState } from "react";
import * as UsefullStyled from "../../styles/usefull.Styled";
import * as Styled from "../../styles/theyTrustUs.styled";
import Image from "next/image";
import ufo from "../../../public/ufo.png";
import { logos } from "../../utils/logos";

const TheyTrustUs = () => {
  const [isHowered, setIsHowered] = useState(false);
  const mouseOn = () => setIsHowered(true);
  const mouseLeave = () => setIsHowered(false);

  return (
    <UsefullStyled.TitlePlusContentBlock>
      <div>
        <UsefullStyled.HeaderBig>they trust us</UsefullStyled.HeaderBig>
        <Styled.UfoBlock>
          <Image src={ufo} />
        </Styled.UfoBlock>
      </div>
      <Styled.LogosGrid onMouseOver={mouseOn} onMouseLeave={mouseLeave}>
        {logos.map((i, ind) => (
          <div key={`theyLogoInd${ind}`}>
            <Image src={isHowered ? i.green : i.image} key={`theyLogoInd${ind}`} />
          </div>
        ))}
      </Styled.LogosGrid>
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default TheyTrustUs;
