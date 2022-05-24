import React, { useState, useEffect } from "react";
import * as UsefullStyled from "../../styles/usefull.Styled";
import * as Styled from "../../styles/theyTrustUs.styled";
import Image from "next/image";
import ufo from "../../../public/ufo.png";
import { logos } from "../../utils/logos";
import { useWindowDimension } from "../../hooks/useWindowDimension";

interface IRenderItem {
  i: {
    image: any;
    green: any;
  };
  ind: number;
}

const TheyTrustUs = () => {
  const [mouseY, setMouseY] = useState(100);
  const { width } = useWindowDimension();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(width !== null && width <= 768);
  }, [width]);
  const mouseOn = (ind: number) => () => setMouseY(ind);
  const mouseLeave = () => setMouseY(100);
  const renderItem = ({ i, ind }: IRenderItem) => {
    return (
      <div key={`theyLogoInd${ind}`}>
        <Image
          src={mouseY === ind ? i.green : i.image}
          onMouseOver={mouseOn(ind)}
          onMouseLeave={mouseLeave}
          alt="logo"
        />
      </div>
    );
  };

  return (
    <UsefullStyled.TitlePlusContentBlock>
      {(isMobile && (
        <>
          <UsefullStyled.HeaderBig>they trust us</UsefullStyled.HeaderBig>
          <Styled.ContentWrapper>
            <Styled.UfoBlock>
              <Image src={ufo} alt="they trust us ufo" />
            </Styled.UfoBlock>
            <Styled.LogosGrid>
              {logos.map((i, ind) => renderItem({ i, ind }))}
            </Styled.LogosGrid>
          </Styled.ContentWrapper>
        </>
      )) || (
        <>
          <div>
            <UsefullStyled.HeaderBig>they trust us</UsefullStyled.HeaderBig>
            <Styled.UfoBlock>
              <Image src={ufo} alt="they trust us ufo" />
            </Styled.UfoBlock>
          </div>
          <Styled.LogosGrid>
            {logos.map((i, ind) => renderItem({ i, ind }))}
          </Styled.LogosGrid>
        </>
      )}
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default TheyTrustUs;
