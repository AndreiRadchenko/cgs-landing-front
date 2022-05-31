import React, { useState } from "react";
import * as UsefullStyled from "../../styles/usefull.Styled";
import * as Styled from "../../styles/theyTrustUs.styled";
import Image from "next/image";
import ufo from "../../../public/ufo.png";
import { logos } from "../../utils/logos";

interface IRenderItem {
  i: {
    image: any;
    green: any;
  };
  ind: number;
}

const TheyTrustUs = () => {
  const [mouseY, setMouseY] = useState(100);
  const mouseOn = (ind: number) => () => setMouseY(ind);
  const mouseLeave = () => setMouseY(100);
  const renderItem = ({ i, ind }: IRenderItem) => {
    return (
      <div key={`theyLogoInd${ind}`}>
        {mouseY === ind ? (
          <Image
            src={i.green}
            onMouseOver={mouseOn(ind)}
            onMouseLeave={mouseLeave}
            alt={`they trus us ${i}`}
          />
        ) : (
          <Image
            src={i.image}
            onMouseOver={mouseOn(ind)}
            onMouseLeave={mouseLeave}
            alt={`they trus us ${i}`}
          />
        )}
      </div>
    );
  };

  return (
    <UsefullStyled.TitlePlusContentBlock>
      <div>
        <UsefullStyled.HeaderBig>they trust us</UsefullStyled.HeaderBig>
        <Styled.UfoBlock>
          <Image src={ufo} alt="they trust us ufo" />
        </Styled.UfoBlock>
      </div>
      <Styled.LogosGrid>
        {logos.map((i, ind) => renderItem({ i, ind }))}
      </Styled.LogosGrid>
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default TheyTrustUs;
