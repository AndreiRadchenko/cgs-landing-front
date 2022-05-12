import React from "react";
import * as Styled from "../../styles/Body.styled";
import ImagePreview from "../Image/ImagePreview";
import logoIMG from "../../../public/cosmonaut.png";
import OrbitButton from "../OrbitButton";

function WelcomeBlock() {
  return (
    <Styled.WelcomeBlockWrapper>
      <Styled.WrapperBgImg>
        <ImagePreview
          src={logoIMG}
          alt={"main logo big image"}
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </Styled.WrapperBgImg>
      <Styled.TextBlock>
        <Styled.Title>blockchain</Styled.Title>
        <Styled.Subtitle>
          save up to 37% of your time and chill more!
        </Styled.Subtitle>
        <Styled.BottomText>
          {"// "} thanks to our predefined boilerplates
          <br /> for <Styled.Bold>
            NFT marketplaces, Dapp, DeFi
          </Styled.Bold> and <Styled.Bold>Crypto projects</Styled.Bold>
        </Styled.BottomText>
        <OrbitButton>build a project</OrbitButton>
      </Styled.TextBlock>
    </Styled.WelcomeBlockWrapper>
  );
}

export default WelcomeBlock;
