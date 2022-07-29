import React from "react";
import * as Styled from "../../styles/MobileService/Layout";
import HeadBlock from "./HeadBlock";
import HeaderNavNew from "../HeaderNavNew/HeaderNavNew";
import FooterNew from "../FooterNew/FooterNew";
import WorthIt from "./WorthIt";

const Content = () => {
  return (
    <>
      <HeaderNavNew />
      <Styled.Layout>
        <HeadBlock />
        <WorthIt />
      </Styled.Layout>
      <FooterNew />
    </>
  );
};

export default Content;
