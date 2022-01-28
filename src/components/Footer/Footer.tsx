import React from "react";
import * as Styles from "./Footer.styled";
import FooterIcon from "./FooterIcon";
import * as StyledCommon from "../../styles/Page.styled";
import {
  DecorationFooterLinks,
  SocialLinksContainerDecoration,
} from "./Footer.styled";

// TODO temporary solution
const socialLinks = [
  {
    icoUrl: "/github.svg",
    href: "https://github.com/",
  },
  {
    icoUrl: "/upwork.svg",
    href: "https://github.com/",
  },
  {
    icoUrl: "/ci.svg",
    href: "https://github.com/",
  },
  {
    icoUrl: "/linked.svg",
    href: "https://www.linkedin.com/",
  },
];

const Footer = () => {
  return (
    <Styles.Container>
      <StyledCommon.Page>
        <Styles.Row>
          <Styles.WebAddressContainer>
            <Styles.WebAddress
              href={"mailto:contact@codegenerationsoftware.com"}
            >
              contact@codegenerationsoftware.com
            </Styles.WebAddress>
          </Styles.WebAddressContainer>
          <Styles.SocialLinksContainerDecoration>
            {socialLinks.map((link) => (
              <FooterIcon key={link.href + link.icoUrl} {...link} />
            ))}
            <Styles.DecorationFooterLinks />
          </Styles.SocialLinksContainerDecoration>
        </Styles.Row>
      </StyledCommon.Page>
    </Styles.Container>
  );
};

export default Footer;
