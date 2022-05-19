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
        <Image
          src={mouseY === ind ? i.green : i.image}
          onMouseOver={mouseOn(ind)}
          onMouseLeave={mouseLeave}
        />
      </div>
    );
  };

  return (
    <UsefullStyled.TitlePlusContentBlock>
      <div>
        <UsefullStyled.HeaderBig>they trust us</UsefullStyled.HeaderBig>
        <Styled.UfoBlock>
          <Image src={ufo} />
        </Styled.UfoBlock>
      </div>
      <Styled.LogosGrid>
        {logos.map((i, ind) => renderItem({ i, ind }))}
      </Styled.LogosGrid>
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default TheyTrustUs;
