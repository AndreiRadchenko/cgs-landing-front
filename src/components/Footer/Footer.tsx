import React from "react";
import * as Styles from "./Footer.styled";
import FooterIcon from "./FooterIcon";
import * as StyledCommon from "../../styles/Page.styled";
import {
  DecorationFooterLinks,
  SocialLinksContainerDecoration,
} from "./Footer.styled";

// TODO temporary solution
export const socialLinks = [
  {
    icoUrl: "/github.svg",
    href: "https://github.com/CodeGeneration-2020/",
  },
  {
    icoUrl: "/upwork.svg",
    href: "https://www.upwork.com/agencies/~01a24f185f6fd7afd0",
  },
  {
    icoUrl: "/ci.svg",
    href: "https://clutch.co/profile/code-generation#summary",
  },
  {
    icoUrl: "/linked.svg",
    href: "https://www.linkedin.com/company/code-generation-software/?viewAsMember=true",
  },
];

const Footer = () => {
  return (
    <Styles.Row>
      <Styles.Container>
        <Styles.WebAddressContainer>
          <Styles.WebAddress href={"mailto:contact@codegenerationsoftware.com"}>
            contact@codegenerationsoftware.com
          </Styles.WebAddress>
        </Styles.WebAddressContainer>
        <Styles.SocialLinksContainer>
          {socialLinks.map((link) => (
            <FooterIcon key={link.href + link.icoUrl} {...link} />
          ))}
          <Styles.DecorationFooterLinks />
        </Styles.SocialLinksContainer>
      </Styles.Container>
    </Styles.Row>
  );
};

export default Footer;
