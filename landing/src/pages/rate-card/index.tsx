import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import RateHeading from "../../components/RateCard/RateHeading";
import RateCardContent from "../../components/RateCard/RateCardContent";
import { Loader, LoaderStub } from "../../components/Loader";

import { queryKeys } from "../../consts/queryKeys";

import { adminGlobalService } from "../../services/adminHomePage";

import {
  Container,
  ContainerRateCardDate,
} from "../../components/RateCard/index.styled";
import { adminRateCardService } from "../../services/adminRateCard";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const RateCard = () => {
  const { data, isLoading } = useQuery([queryKeys.getRateCardData], () =>
    adminRateCardService.getCards()
  );

  return (
    <Loader active={isLoading}>
      {isLoading ? (
        <LoaderStub />
      ) : (
        <Container>
          <HeaderNavNew />
          <ContainerRateCardDate>
            <RateHeading heading={data!.title} />
            <RateCardContent services={data!.services} />
          </ContainerRateCardDate>
          <FooterNew />
        </Container>
      )}
    </Loader>
  );
};

export default RateCard;
