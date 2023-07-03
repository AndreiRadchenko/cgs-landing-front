import React, { useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/HomePage/MobileServices.styled";
import params from "../../mock/MobileServicesSwiperParams";
import { adminServices } from "../../services/services/commonServices";
import MobileNextTechSlide from "./MobileNextTechSlide";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getAllServices], () =>
    adminServices.getAllServices()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export interface ISlideData {
  image: string;
  title: string;
}

const MobileServices = () => {
  const { data } = useQuery([queryKeys.getAllServices], () =>
    adminServices.getAllServices()
  );

  const [slidesData, setSlidesData] = useState<ISlideData[]>([]);

  useEffect(() => {
    if (data) {
      const services = data.map((service) => ({
        image: service.headerBlock.image?.url,
        title: service.headerBlock?.title,
      }));
      setSlidesData(services);
    }
  }, [data]);

  return (
    <StyledThisComp.Wrapper>
      <Swiper {...params}>
        {slidesData.map((item, idx) => (
          <SwiperSlide style={{ padding: "35px 0px" }} key={idx}>
            <MobileNextTechSlide
              item={item}
              idx={idx}
              length={slidesData.length}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledThisComp.Wrapper>
  );
};

export default MobileServices;
