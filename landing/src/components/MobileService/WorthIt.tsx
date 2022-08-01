import React from "react";
import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/MobileService/WorthIt";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";

const WorthIt = () => {
  return (
    <Styled.Container>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Subtitle>Why it's worth it?</Subtitle>
      <Styled.ContentLayout>
        {/*<Styled.WorthTitleContainer>*/}
        {/*  <Styled.Icon src={crystal.src} />*/}
        {/*</Styled.WorthTitleContainer>*/}
      </Styled.ContentLayout>
    </Styled.Container>
  );
};

export default WorthIt;
