import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/Burger.styles";
import { IDataResponse } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import Link from "next/link";

const BurgerFooter = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.FooterBlock;

  return (
    <StyledThisComp.FooterWrapper>
      <StyledThisComp.Mail href={`mailto:${data?.email}`}>
        <SplitBrackets text={data?.email} />
      </StyledThisComp.Mail>
      <StyledThisComp.FooterIconsWrapper>
        {data?.links.map((el, idx) => (
          <Link key={el.link} href={el.link} passHref>
            <StyledThisComp.FooterLink>
              <StyledThisComp.Image
                src={data.images[idx].image?.url || ""}
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
