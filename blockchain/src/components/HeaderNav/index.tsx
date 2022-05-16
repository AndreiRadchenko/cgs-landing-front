import React from "react";
import * as StyledThisComp from "./HeaderNav.styled";
import logoIMG from "../../../public/logo.png";
import { routers } from "../../utils/variables";
import ImagePreview from "../Image/ImagePreview";

const HeaderNav = (): JSX.Element => {
  return (
    <StyledThisComp.HeaderNavContainer>
      <StyledThisComp.LogoLinkWrapper href={routers.home}>
        <ImagePreview
          src={logoIMG}
          alt={"logo cgs-team"}
          placeholder={"blur"}
        />
      </StyledThisComp.LogoLinkWrapper>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default HeaderNav;
