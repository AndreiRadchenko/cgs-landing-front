import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

import * as StyledThisComp from "../../styles/HomePage/MobilePartners.styled";

import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import params from "../../mock/MobilePartnersSwiperParams";
import Image from "next/image";

const MobilePartners = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.LogosBlock;

  let renderSliderSlides;
  if (data?.images) {
    renderSliderSlides = data?.images?.map((img, idx) => (
      <SwiperSlide key={idx}>
        <StyledThisComp.PartnerImageWrapper>
          <Image
            src={img.url}
            alt="partner logo"
            layout="fill"
            objectFit="contain"
          />
        </StyledThisComp.PartnerImageWrapper>
      </SwiperSlide>
    ));
  }

  return (
    <StyledThisComp.Wrapper>
      <Swiper {...params}>{renderSliderSlides}</Swiper>
    </StyledThisComp.Wrapper>
  );
};

export default MobilePartners;
