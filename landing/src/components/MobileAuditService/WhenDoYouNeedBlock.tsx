import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import { IServicesShowcaseProps } from "../../types/Services.types";
import * as Styled from "../../styles/MobileAuditService/WhenDoYouNeedBlock.styled";
import { useOnScreen } from "../../hooks/useOnScreen";
import { Separator } from "../../styles/MobileAuditService/Common.styled";
import WhenDoYouNeedBlockItem from "./WhenDoYouNeedBlockItem";

const WhenDoYouNeedBlock = ({ withoutShowcase }: IServicesShowcaseProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whenDoYouNeed;

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container
      className={withoutShowcase ? "withoutShowcase" : undefined}
    >
      <Separator />
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.Description>{data?.description}</Styled.Description>
      <Styled.ContentWrapper ref={elRef}>
        {data?.points.map((el, idx) => (
          <WhenDoYouNeedBlockItem
            item={el}
            idx={idx}
            isScrolled={isScrolled}
            key={idx}
          />
        ))}
        {!withoutShowcase && <Separator className="bottom" />}
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};

export default WhenDoYouNeedBlock;
