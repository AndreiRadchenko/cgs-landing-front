import React from "react";
import { useQueryClient } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/HomePage/MobilePartners.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import params from "../../mock/MobilePartnersSwiperParams";

const MobilePartners = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.LogosBlock;

  let renderSliderSlides;
  if (data?.images) {
    renderSliderSlides = data?.images?.map((img, idx) => (
      <SwiperSlide key={idx}>
        <StyledThisComp.PartnerImageWrapper>
          <StyledThisComp.Image src={img.url} />
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
