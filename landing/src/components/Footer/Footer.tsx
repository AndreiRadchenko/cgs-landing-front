import React from "react";
import * as Styles from "./Footer.styled";
import FooterIcon from "./FooterIcon";
import { IDataResponse } from "../../types/Admin/Response.types";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";

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
