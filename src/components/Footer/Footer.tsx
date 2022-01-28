import React from "react";
import * as Styles from "./Footer.styled";
import FooterIcon from "./FooterIcon";
import * as StyledCommon from "../../styles/Page.styled";

// TODO temporary solution
const socialLinks = [
  {
    icoUrl: "/githubIco.svg",
    href: "https://github.com/CodeGeneration-2020/",
  },
  {
    icoUrl: "/UPico.svg",
    href: "https://www.upwork.com/agencies/~01a24f185f6fd7afd0",
  },
  {
    icoUrl: "/CIcon.svg",
    href: "https://clutch.co/profile/code-generation#summary",
  },
  {
    icoUrl: "/LinkedIn.svg",
    href: "https://www.linkedin.com/company/code-generation-software/?viewAsMember=true",
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
          <Styles.SocialLinksContainer>
            {socialLinks.map((link) => (
              <FooterIcon key={link.href + link.icoUrl} {...link} />
            ))}
          </Styles.SocialLinksContainer>
        </Styles.Row>
      </StyledCommon.Page>
    </Styles.Container>
  );
};

export default Footer;
