import React from "react";
import * as StyledThisComp from "./HeaderNav.styled";
import logoIMG from "../../../public/logo.svg";
import { routers } from "../../utils/variables";
import ImagePreview from "../Image/ImagePreview";

const HeaderNav = (): JSX.Element => {
  return (
    <StyledThisComp.HeaderNavContainer>
      <StyledThisComp.LogoLinkWrapper href={routers.home}>
        <ImagePreview src={logoIMG} alt={"logo cgs-team"} />
      </StyledThisComp.LogoLinkWrapper>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default HeaderNav;
