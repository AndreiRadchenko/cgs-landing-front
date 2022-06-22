import React from "react";
import Image from "next/image";
import cosmonaut from "../../../public/cosmonautFooter.png";
import cosmonautBg from "/public/coins.png";
import * as Styled from "../../styles/footer.styled";

const CosmonautImage = () => {
  return (
    <Styled.ImageWrapper>
      <Styled.CosmonautBgWrapper>
        <Image src={cosmonautBg} alt="footer cosmonaut bg" />
      </Styled.CosmonautBgWrapper>
      <Styled.CosmonautWrapper>
        <Image src={cosmonaut} alt="footer cosmonaut" />
      </Styled.CosmonautWrapper>
    </Styled.ImageWrapper>
  );
};

export default CosmonautImage;
