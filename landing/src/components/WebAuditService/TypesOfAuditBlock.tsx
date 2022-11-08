import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/WebAuditService/TypesOfAudit.styled";
import { IServiceWebAudit } from "../../types/Admin/Response.types";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import { TypesOfAuditDesktopCard } from "./TypesOfAuditDesktopCard";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import TypesOfAuditMobileCard from "./TypesOfAuditMobileCard";

const TypesOfAuditBlock = () => {
  const { width } = useWindowDimension();
  const queryClient = useQueryClient();
  const [cardsComponents, setCardsComponents] = useState<JSX.Element[]>();

  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.typesOfAuditBlock;

  const deskCards = data?.map((item, idx) => (
    <TypesOfAuditDesktopCard key={idx + "desk"} idx={idx} item={item} />
  ));
  const mobileCards = data?.map((item, idx) => (
    <TypesOfAuditMobileCard key={idx + "mobile"} idx={idx} item={item} />
  ));

  useEffect(() => {
    width && width > 767
      ? setCardsComponents(deskCards)
      : setCardsComponents(mobileCards);
  }, [width]);

  return (
    <Styled.Wrapper>
      <Styled.Subtitle>Types of audit</Styled.Subtitle>
      <MobileInfiniteText title={"Types of audit"} />
      <Styled.TypesGrid>{cardsComponents}</Styled.TypesGrid>
    </Styled.Wrapper>
  );
};

export default TypesOfAuditBlock;
