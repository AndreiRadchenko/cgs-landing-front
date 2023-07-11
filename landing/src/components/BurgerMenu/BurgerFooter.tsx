import React from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/Burger.styles";
import { IDataResponse } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import Link from "next/link";
import { adminGlobalService } from "../../services/adminHomePage";

interface IBurgerFooter {
  data: IDataResponse | undefined;
}

const BurgerFooter = () => {
  const { data }: IBurgerFooter = useQuery(
    [queryKeys.getFullHomePage],
    () => adminGlobalService.getFullPage()
  );

  return (
    <StyledThisComp.FooterWrapper>
      <StyledThisComp.MailsWrapper>
        <StyledThisComp.Mail href={`mailto:${data?.FooterBlock?.email}`} className="upper">
          <SplitBrackets text={data?.FooterBlock?.email} />
        </StyledThisComp.Mail>
        <StyledThisComp.Mail href={`mailto:${data?.FooterBlock?.hrEmail}`}>
          <SplitBrackets text={data?.FooterBlock?.hrEmail} />
        </StyledThisComp.Mail>
      </StyledThisComp.MailsWrapper>
      <StyledThisComp.FooterIconsWrapper>
        {data?.FooterBlock?.links.map((el, idx) => (
          <Link key={el.link} href={el.link} passHref>
            <StyledThisComp.FooterLink>
              <StyledThisComp.Image
                src={data.FooterBlock?.images[idx].image?.url || ""}
                alt="burger footer icon image"
              />
            </StyledThisComp.FooterLink>
          </Link>
        ))}
      </StyledThisComp.FooterIconsWrapper>
    </StyledThisComp.FooterWrapper>
  );
};

export default BurgerFooter;
