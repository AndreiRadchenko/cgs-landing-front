import React from "react";
import * as Styles from "./Footer.styled";
import FooterIcon from "./FooterIcon";

// TODO temporary solution
const socialLinks = [
  {
    icoUrl: "/githubIco.svg",
    href: "https://github.com/",
  },
  {
    icoUrl: "/UPico.svg",
    href: "https://github.com/",
  },
  {
    icoUrl: "/Cicon.svg",
    href: "https://github.com/",
  },
  {
    icoUrl: "/LinkedIn.svg",
    href: "https://www.linkedin.com/",
  },
];

const Footer = () => {

  return (
    <Styles.Container>
      <Styles.WebAddressContainer>
        <Styles.WebAddress>sales.codegeneration@gmail.com</Styles.WebAddress>
      </Styles.WebAddressContainer>
      <Styles.SocialLinksContainer>
        {socialLinks.map((link) => (
          <FooterIcon key={link.href + link.icoUrl} {...link} />
        ))}
      </Styles.SocialLinksContainer>
    </Styles.Container>
  );
};

export default Footer;
