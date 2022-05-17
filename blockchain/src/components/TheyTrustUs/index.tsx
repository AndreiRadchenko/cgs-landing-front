import React from "react";
import * as UsefullStyled from "../../styles/usefull.Styled";
import * as Styled from "../../styles/theyTrustUs.styled";
import Image from "next/image";
import ufo from "../../../public/ufo.png";
import { logos } from "../../utils/logos";

const TheyTrustUs = () => {
  return (
    <UsefullStyled.TitlePlusContentBlock>
      <div>
        <UsefullStyled.HeaderBig>they trust us</UsefullStyled.HeaderBig>
        <Styled.UfoBlock>
          <Image src={ufo} />
        </Styled.UfoBlock>
      </div>
      <Styled.LogosGrid>
        {logos.map((i, ind) => (
          <div key={`theyLogoInd${ind}`}>
            <Image src={i} />
          </div>
        ))}
      </Styled.LogosGrid>
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default TheyTrustUs;
