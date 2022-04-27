import React from "react";
import * as Styled from "../../styles/AdminPage";
import AdminImage from "../AdminPageGlobal/AdminImage";

const LogoElement = ({
  image,
  deleteLogo,
}: {
  image: any;
  deleteLogo: () => void;
}) => {
  return (
    <Styled.AdminLogoElement>
      <Styled.AdminDeleteLogo
        onClick={(e) => {
          e.preventDefault();
          deleteLogo();
        }}
      >
        &#10005;
      </Styled.AdminDeleteLogo>
      <div><AdminImage image={image} /></div>
    </Styled.AdminLogoElement>
  );
};

export default LogoElement;
