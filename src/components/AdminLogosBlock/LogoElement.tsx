import Image from "next/image";
import React from "react";
import * as Styled from "../../styles/AdminPage";

const LogoElement = (props: { image: any }) => {
  return (
    <Styled.AdminLogoElement>
      <Styled.AdminDeleteLogo>&#10005;</Styled.AdminDeleteLogo>
      <Image src={props.image} />
    </Styled.AdminLogoElement>
  );
};

export default LogoElement;
