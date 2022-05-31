import React from "react";
import * as Styled from "../../styles/footer.styled";
import OrbitButton from "../OrbitButton";
import Image from "next/image";
import cosmonaut from "../../../public/cosmonautFooter.png";
import { socialLinks } from "../../utils/footerLinks";
import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        want to receive free audit & consultation <br /> from our technical
        department?
      </Styled.Header>
      <OrbitButton>Book a meeting</OrbitButton>
      <Styled.MarginBlock />
      <Styled.ImagePosition>
        <Image src={cosmonaut} alt="footer cosmonaut" />
      </Styled.ImagePosition>
      <Styled.FooterNav>
        <Styled.Email href="mailto:sales.codegeneration@gmail.com">
          sales.codegeneration@gmail.com
        </Styled.Email>
        {socialLinks.map((i) => (
          <FooterIcon key={i.href} Icon={i.Icon} href={i.href} />
        ))}
      </Styled.FooterNav>
    </Styled.Wrapper>
  );
};

export default Footer;
