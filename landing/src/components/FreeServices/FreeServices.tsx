import React from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import parse from "html-react-parser";

import ButtonArrow from "../../utils/ButtonArrow";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";

import * as Styled from "../../styles/HomePage/FreeServices.styled";

const FreeServices = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.FreeServicesBlock;

  if (!data) throw Error("Data not found!");

  return (
    <Styled.FreeServicesContainer>
      <Styled.FreeServicesTitle>{parse(data.title)}</Styled.FreeServicesTitle>
      <Styled.FreeServicesData columnsNumber={data.items.length}>
        {data.items.map((elem, idx) =>
          elem.image ? (
            <Styled.FreeServicesCard key={idx}>
              <Styled.FreeServicesImageWrapper>
                <Image
                  src={elem.image.url}
                  alt="free service image"
                  height="105px"
                  width="87px"
                />

                <Styled.DashedLine className="dashed" />

                <Styled.ArrowContainer className="arrow">
                  <ButtonArrow />
                </Styled.ArrowContainer>
                <Styled.AdditionalArrowContainer className="additionalArrow">
                  <ButtonArrow />
                </Styled.AdditionalArrowContainer>
              </Styled.FreeServicesImageWrapper>

              <Styled.FreeServicesText className="text">
                {elem.subtitle}
              </Styled.FreeServicesText>
            </Styled.FreeServicesCard>
          ) : (
            <></>
          )
        )}
      </Styled.FreeServicesData>
    </Styled.FreeServicesContainer>
  );
};

export default FreeServices;
