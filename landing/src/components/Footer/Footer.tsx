import React from "react";
import * as Styles from "./Footer.styled";
import FooterIcon from "./FooterIcon";
import { IDataResponse } from "../../types/Admin/Response.types";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";

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
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.FooterBlock;

  return (
    <Styles.Row>
      <Styles.Container>
        <Styles.WebAddressContainer>
          <Styles.WebAddress href={`mailto:${data?.email}`}>
            <SplitBrackets text={data?.email} />
          </Styles.WebAddress>
        </Styles.WebAddressContainer>
        <Styles.SocialLinksContainer>
          {data?.links.map((el, idx) => (
            <FooterIcon
              key={el.link}
              icoUrl={data.images[idx].image?.url || ""}
              href={el.link}
            />
          ))}
          {/*<Styles.DecorationFooterLinks />*/}
        </Styles.SocialLinksContainer>
      </Styles.Container>
    </Styles.Row>
  );
};

export default Footer;
