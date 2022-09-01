import React from "react";
import * as Styles from "./Footer.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import FooterIcon from "./FooterIcon";

interface IFooter {
  isGreenLine?: boolean;
}

const Footer = ({ isGreenLine = true }: IFooter) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.FooterBlock;

  return (
    <Styles.Row>
      <Styles.Container isGreenLine={isGreenLine}>
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
          {isGreenLine && <Styles.DecorationFooterLinks />}
        </Styles.SocialLinksContainer>
      </Styles.Container>
    </Styles.Row>
  );
};

export default Footer;
