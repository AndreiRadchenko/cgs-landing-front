import React from "react";
import * as Styled from "../../styles/AdminPage";
import AdminImage from "../AdminPageGlobal/AdminImage";

const LogoElement = ({ image }: { image: any }) => {
  return (
    <Styled.AdminLogoElement>
      <Styled.AdminDeleteLogo>&#10005;</Styled.AdminDeleteLogo>
      <AdminImage image={image} />
    </Styled.AdminLogoElement>
  );
};

export default LogoElement;
