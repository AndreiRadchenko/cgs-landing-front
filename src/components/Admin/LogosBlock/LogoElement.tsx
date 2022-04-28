import React from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminImage from "../Global/AdminImage";

interface ILogoProps {
  image: any;
  deleteLogo: () => void;
}

const deleteFunc = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  deleteLogo: () => void
) => {
  e.preventDefault();
  deleteLogo();
};

const LogoElement = ({ image, deleteLogo }: ILogoProps) => {
  return (
    <Styled.AdminLogoElement>
      <Styled.AdminDeleteLogo onClick={(e) => deleteFunc(e, deleteLogo)}>
        &#10005;
      </Styled.AdminDeleteLogo>
      <div>
        <AdminImage image={image} />
      </div>
    </Styled.AdminLogoElement>
  );
};

export default LogoElement;
